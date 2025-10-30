import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface CountryDialInfo {
  code: string; // ISO 3166-1 alpha-2 (e.g., "GH")
  name: string; // Common country name
  dialCode: string; // E.g., "+233"
  flagEmoji: string; // Emoji fallback
  flagPngUrl: string; // PNG flag URL
  flagSvgUrl: string; // SVG flag URL
}

@Injectable({ providedIn: 'root' })
export class CountryCodesService {
  private readonly endpoint = 'https://restcountries.com/v3.1/all?fields=name,cca2,idd,flags';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<CountryDialInfo[]> {
    return this.http.get<any[]>(this.endpoint).pipe(
      map((countries) =>
        countries
          .map((c) => {
            const root: string = c?.idd?.root ?? '';
            const suffix: string = Array.isArray(c?.idd?.suffixes) && c.idd.suffixes.length > 0 ? c.idd.suffixes[0] : '';
            const dial = `${root}${suffix}`;
            const code: string = c?.cca2 ?? '';
            const name: string = c?.name?.common ?? code;
            const flagPngUrl: string = c?.flags?.png ?? '';
            const flagSvgUrl: string = c?.flags?.svg ?? '';
            const flagEmoji: string = this.codeToFlagEmoji(code);
            return {
              code,
              name,
              dialCode: dial,
              flagEmoji,
              flagPngUrl,
              flagSvgUrl,
            } as CountryDialInfo;
          })
          .filter((c: CountryDialInfo) => !!c.code && !!c.dialCode)
          .sort((a: CountryDialInfo, b: CountryDialInfo) => a.name.localeCompare(b.name))
      )
    );
  }

  private codeToFlagEmoji(iso2: string): string {
    if (!iso2) return '';
    return iso2
      .toUpperCase()
      .split('')
      .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
      .join('');
  }
}
