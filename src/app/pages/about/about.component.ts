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
  profileImage = '/assets/profile/gabriel-profile.jpg?v=1';

  contactItems = [
    { label: 'Phone', value: '+233 557 038 547' },
    { label: 'Email', value: 'gabrielagyemanduah@gmail.com' },
    { label: 'Location', value: 'Madina, Accra, Ghana' },
    { label: 'Role', value: 'Web Developer' }
  ];

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

  highlights = [
    'Angular, React, Next.js and Node.js applications',
    'RESTful API integration and scalable frontend state',
    'Responsive interfaces for mobile and desktop users',
    'Agile collaboration across design and backend teams'
  ];

  experience = [
    {
      role: 'Frontend Developer (Angular)',
      company: 'Truelight Tech, Accra, Ghana',
      period: '02/2025 - Ongoing',
      points: [
        'Collaborating with design and backend teams to deliver projects ahead of sprint deadlines and improve team velocity.',
        'Integrating RESTful APIs to deliver seamless user experiences.',
        'Implementing NgRx state management to improve scalability and maintainability.',
        'Writing clean, testable, reusable TypeScript code, contributing to a reduction in post-release bugs.'
      ]
    },
    {
      role: 'Frontend Developer (Angular)',
      company: 'Amalitech, Takoradi, Ghana',
      period: '10/2023 - 10/2024',
      points: [
        'Developed and maintained responsive Angular interfaces across multiple devices.',
        'Collaborated with design and backend teams to integrate RESTful APIs.',
        'Implemented NgRx state management for scalable application architecture.',
        'Participated in Agile sprint planning, daily stand-ups, retrospectives, and code reviews.'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'Innovative Tech Hive, Accra, Ghana',
      period: '09/2022 - 05/2023',
      points: [
        'Designed and developed an intuitive food delivery app interface for students.',
        'Transformed app designs into frontend code with React.',
        'Implemented real-time tracking features to improve order transparency.',
        'Designed vendor management screens for partner restaurants to manage orders and menus.'
      ]
    },
    {
      role: 'Web Development',
      company: 'Moonsquare, Accra, Ghana',
      period: '05/2022 - 09/2022',
      points: [
        'Developed wireframes as the functional blueprint for a news app web interface.',
        'Implemented responsive frontend pages using HTML, CSS, and JavaScript.',
        'Partnered with the design team to turn client wireframes into working interfaces.',
        'Worked in an Agile environment to receive requirements, peer program, and test application features.'
      ]
    }
  ];

  skills = {
    technical: ['Angular', 'React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'Python'],
    product: ['RESTful APIs', 'NgRx', 'Responsive Design', 'E-commerce', 'Booking Systems', 'Firebase'],
    tools: ['Git', 'Azure DevOps', 'ClickUp', 'Figma', 'Vercel', 'Agile']
  };

  education = {
    title: 'BSc Computer Science',
    school: 'Valley View University, Accra, Ghana',
    period: '09/2019 - 04/2023'
  };

  recognition = 'Best Volunteer of the Year (2025) - recognized for outstanding contributions as a Web Developer and Coordinator at PSJUK.';

  languages = ['English - Professional', 'Twi - Native'];

  interests = ['Technology Communities', 'Hackathons and Coding Competitions', 'Mentorship'];
}
