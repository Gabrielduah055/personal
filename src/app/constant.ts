import { title } from "process";

export const TEXT = {
  home: {
    title: "Hello, I'm Gabriel",
    subtitle: 'I build modern, fast, and delightful web experiences.',
    description:
      'I develop user-centered software — the kind that tells stories that gently removes friction from every interaction, and ultimately feels joyful to use.',
    ctaTalk: 'Download CV',
    ctaAbout: 'About Me',
  },
  about: {
    title: 'About Me',
    intro:
      'Hey, I’m Gabriel — a passionate software and web developer based in Ghana. I enjoy building sleek, dynamic, and user-centered products, and I love collaborating with teams that transform great ideas into powerful, real-world solutions.',
    coreStackTitle: 'Core Stack',
    coreStack: [
      'JavaScript',
      'Angular',
      'Tailwind CSS',
      'Node.js',
      'Typescript',
    ],
    toolsTitle: 'Software Tools',
    tools: ['Postman', 'Figma', 'VsCode', 'Spotify', 'Warp'],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What services do you offer?',
        answer:
          'I specialize in building modern, responsive websites and web applications using React, Next.js, and other cutting-edge technologies.Whether you need a landing page, a custom dashboard, or a full-scale web app, I can handle the entire frontend development process.',
      },
      {
        question: 'What is your typical workflow?',
        answer:
          'We start with a brief, then move to wireframes and iterative milestones. I provide regular updates, deploy previews and incorporate feedback continuously.',
      },
      {
        question: 'How long does a project take?',
        answer:
          'It depends on scope. Small sites take 1–2 weeks, while full products can take several weeks. I share a timeline after requirements are clear.',
      },
      {
        question: 'Do you work with designs or create them too?',
        answer:
          'I can implement your existing designs (Figma) or create lightweight UI/UX and component systems as needed.',
      },
      {
        question: 'What about pricing and payments?',
        answer:
          'Fixed-price for well-defined scopes, or weekly rates for ongoing work. Payments are milestone-based via common methods.',
      },
      {
        question: 'Do you offer maintenance after the project is done?',
        answer:
          'Yes. I offer ongoing maintenance, updates and support packages to keep your app secure and fast.',
      },
    ],
    contactPrompt: 'Can’t find what you’re looking for? Contact me',
    contactLinkText: 'via form',
  },

  policy: {
    lastUpdated: '24.08.2025',
    title: 'Privacy Policy',
    intro:
      'This Privacy Policy explains how the personal data you share with me through the contact form on my website is collected, used, and protected.',
    sections: [
      {
        id: 'information-collected',
        title: '1. Information Collected',
        lead: 'The only data collected through this website is the information you provide via the contact form:',
        bullets: [
          'Name and surname',
          'Email address',
          'Phone number',
          'Message content',
        ],
      },
      {
        id: 'purposes-of-use',
        title: '2. Purposes of Use',
        lead: 'The information collected is used solely for the following purposes:',
        bullets: [
          'To respond to your inquiries and communicate with you',
          'To provide the information or services you requested',
          'To improve the website and prevent spam or abuse',
          'To comply with applicable legal obligations',
        ],
      },
      {
        id: 'data-retention',
        title: '3. Data Retention',
        lead: 'Information submitted via the contact form is stored only for as long as the communication process continues. Once the process is complete, the data will be securely deleted within a reasonable time.',
        bullets: [],
      },
      {
        id: 'data-security',
        title: '4. Data Security',
        lead: 'Appropriate technical and administrative measures are taken to protect your information. However, please note that no method of online data transmission can be guaranteed as 100% secure.',
        bullets: [],
      },
      {
        id: 'your-rights',
        title: '5. Your Rights',
        lead: 'Under applicable data protection laws, you have the right to:',
        bullets: [
          'Request access to your personal data',
          'Request correction or deletion of your data',
          'Object to or restrict processing of your data',
          'Request deletion of your data',
        ],
      },
      {
        id: 'contact',
        title: '6. Contact',
        lead: 'For any questions or requests regarding this Privacy Policy, you can reach me at:',
        bullets: ['Email:gabrielagyemanduah@gmail.com'],
      },
      {
        id: 'changes-to-policy',
        title: '7. Changes to Policy',
        lead: 'This Privacy Policy may be updated from time to time. Updates will take effect once published on this page.',
        bullets: [],
      },
    ],
  },
} as const;


