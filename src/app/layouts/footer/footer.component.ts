import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { label: 'GitHub', href: 'https://github.com/Gabrielduah055', icon: 'uil uil-github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gabrial-agyeman-duah-298870299/', icon: 'uil uil-linkedin' },
    { label: 'X', href: 'https://x.com/GabrielDuah8', icon: 'uil uil-twitter' },
    { label: 'Facebook', href: 'https://web.facebook.com/gabbyduah.agyeman/', icon: 'uil uil-facebook' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@gabrielduah_055', icon: 'uil uil-music' },
    { label: 'Instagram', href: 'https://www.instagram.com/duah4731/', icon: 'uil uil-instagram' },
    { label: 'WhatsApp', href: 'https://wa.me/233557038547', icon: 'uil uil-whatsapp' },
    { label: 'Peerlist', href: 'https://peerlist.io/gabriela_tech', peerlist: true }
  ];
}
