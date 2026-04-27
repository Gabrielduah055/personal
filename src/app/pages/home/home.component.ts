import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { ProjectService } from '@core/services/project.service';
import { Project } from '@models/project.model';
import { ProjectCardComponent } from '@shared/components/project-card/project-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerChildren', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  projects: Project[] = [];

  technologies: string[] = [
    'Angular',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'Figma',
    'Canva',
    'RESTful APIs',
    'Responsive Design',
    'CMS Integration',
    'E-commerce'
  ];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }
}
