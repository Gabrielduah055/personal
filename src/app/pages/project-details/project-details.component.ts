import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ProjectService } from '@core/services/project.service';
import { Project } from '@models/project.model';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('contentSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        animate('0.8s 0.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | null = null;
  allProjects: Project[] = [];
  previousProject: Project | null = null;
  nextProject: Project | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.allProjects = projects;
      this.route.params.subscribe(params => {
        const projectId = params['id'];
        this.project = this.allProjects.find(p => p.id === projectId) || null;

        if (!this.project) {
          this.router.navigate(['/not-found']);
          return;
        }

        // Get previous and next projects
        const currentIndex = this.allProjects.findIndex(p => p.id === projectId);
        this.previousProject = currentIndex > 0 ? this.allProjects[currentIndex - 1] : null;
        this.nextProject = currentIndex < this.allProjects.length - 1 ? this.allProjects[currentIndex + 1] : null;
      });
    });
  }

  navigateToProject(projectId: string): void {
    this.router.navigate(['/project', projectId]);
  }
}
