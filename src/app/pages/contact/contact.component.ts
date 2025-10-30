import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CountryCodesService, CountryDialInfo } from '../../service/country-codes.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  countries: CountryDialInfo[] = [];
  countryDropdownOpen = false;
  countrySearch = '';
  showSuccessModal = false;

  constructor(private fb: FormBuilder, private countryCodes: CountryCodesService) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      country: [null, [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    this.countryCodes.getCountries().subscribe({
      next: (list) => {
        this.countries = list;
        // Set a sensible default: Ghana if present, otherwise first item
        const gh = this.countries.find((c) => c.code === 'GH') ?? this.countries[0];
        if (gh) {
          this.form.patchValue({ country: gh });
        }
        console.log('Loaded countries:', this.countries);
      },
      error: (err) => {
        console.error('Failed to load countries', err);
      },
    });
  }

  get selectedCountry(): CountryDialInfo | null {
    return this.form.get('country')?.value ?? null;
  }

  get filteredCountries(): CountryDialInfo[] {
    const query = this.countrySearch.trim().toLowerCase();
    if (!query) return this.countries;
    const digits = query.replace('+', '');
    return this.countries.filter((c) =>
      c.name.toLowerCase().includes(query) ||
      c.code.toLowerCase().includes(query) ||
      c.dialCode.toLowerCase().includes(query) ||
      c.dialCode.replace('+', '').includes(digits)
    );
  }

  toggleCountryDropdown(): void {
    this.countryDropdownOpen = !this.countryDropdownOpen;
  }

  selectCountry(country: CountryDialInfo): void {
    this.form.patchValue({ country });
    this.countryDropdownOpen = false;
  }

  onCountrySearch(value: string): void {
    this.countrySearch = value;
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.countryDropdownOpen = false;
  }

  openSuccessModal(): void {
    this.showSuccessModal = true;
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
  }

  get f() {
    return this.form.controls;
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { country, phone, firstName, lastName, message } = this.form.value;
    const payload = {
      name: `${firstName} ${lastName}`.trim(),
      telephone: `${country.dialCode} ${phone}`.trim(),
      message,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        this.openSuccessModal();
        this.form.reset({
          country: this.countries.find((c) => c.code === 'GH') ?? this.countries[0],
        });
      } else {
        alert('There was an error sending your message. Please try again later.');
      }
    } catch (err) {
      alert('There was an error sending your message. Please try again later.');
      console.error(err);
    }
  }
}
