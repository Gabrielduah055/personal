import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  contactItems = [
    { label: 'Email', value: 'gabriel@example.com' },
    { label: 'Location', value: 'Accra, Ghana' },
    { label: 'Role', value: 'Full-Stack Developer' },
    { label: 'Availability', value: 'Open to freelance work' }
  ];

  highlights = [
    'React and Angular frontend applications',
    'Node.js APIs and MongoDB data flows',
    'E-commerce and booking systems',
    'Responsive product-focused interfaces'
  ];

  experience = [
    {
      role: 'Full-Stack Developer',
      company: 'Independent Projects',
      period: 'Recent Work',
      points: [
        'Designed and built production-style web applications for commerce, health content, and appointment booking.',
        'Created account flows with registration, verification, protected actions, and reusable UI components.',
        'Focused on clean user journeys, responsive layouts, and practical business outcomes.'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'Portfolio & Client Work',
      period: 'Ongoing',
      points: [
        'Built polished interfaces using React, Angular, Tailwind CSS, and component-based design patterns.',
        'Translated real business needs into usable screens, product cards, booking forms, dashboards, and detail pages.',
        'Iterated on spacing, animation, typography, and interaction details to make products feel professional.'
      ]
    }
  ];

  skills = {
    technical: ['React', 'Angular', 'Next.js', 'Node.js', 'MongoDB', 'RESTful APIs'],
    product: ['Responsive Design', 'E-commerce', 'Booking Systems', 'CMS Integration'],
    tools: ['Figma', 'Canva', 'GitHub', 'Vercel']
  };
}
