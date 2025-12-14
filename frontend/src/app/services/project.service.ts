import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:8080/api/projects';

  // Mock projects data from CV
  private mockProjects: Project[] = [
    {
      id: 1,
      title: 'AgriLink Lanka – Agricultural Export Platform',
      description: 'Developing a centralized B2B web platform to connect Sri Lankan farmers directly with global exporters, eliminating intermediaries and promoting fair trade. Features role-based access (admin, farmer, exporter), product catalog, secure Stripe payments, automated email notifications, and glassmorphism UI.',
      technologies: 'Next.js, Tailwind CSS, ASP.NET Core (.NET 7), PostgreSQL, Stripe, Nodemailer, TypeScript',
      startDate: '2025-01-01',
      endDate: '',
      githubUrl: '',
      liveUrl: '',
      imageUrl: '',
      active: true
    },
    {
      id: 2,
      title: 'Portfolio Web App',
      description: 'Built a full-stack personal portfolio web application with project showcase, skills section, and contact form. Features RESTful API backend, modern responsive UI, and MSSQL integration.',
      technologies: 'Angular, Spring Boot, Microsoft SQL Server, JavaScript, Java',
      startDate: '2025-01-01',
      endDate: '',
      githubUrl: '',
      liveUrl: '',
      imageUrl: '',
      active: true
    },
    {
      id: 3,
      title: 'FitSync Pro - Trainer Reservation System',
      description: 'Level 2 Software Project - Team Leader. FitSync Pro is a fitness trainer reservation and management system. Developed the landing page to highlight core features, integrated Stripe payment gateway for secure transactions, and implemented purchase history feature for users to view and manage past orders.',
      technologies: 'Next.js, Stripe API, TypeScript, Tailwind CSS, Node.js',
      startDate: '2024-01-01',
      endDate: '2025-01-01',
      githubUrl: '',
      liveUrl: '',
      imageUrl: '',
      active: true
    },
    {
      id: 4,
      title: 'Gamers_Hub – Gaming News & Entertainment Platform',
      description: 'A modern web app for gamers to access news, upcoming releases, and trends. Developed user authentication, dashboards, and dynamic content sections for gaming news and releases. Delivered a seamless SPA experience and responsive design for all devices.',
      technologies: 'Laravel 11, React, Inertia.js, Tailwind CSS, SQLite',
      startDate: '2024-01-01',
      endDate: '2024-12-01',
      githubUrl: '',
      liveUrl: '',
      imageUrl: '',
      active: true
    },
    {
      id: 5,
      title: 'Informative Posture Corrector',
      description: 'Level 1 Hardware Project - Team Leader. Device that helps users maintain proper posture by providing real-time feedback. Developed and calibrated posture detection by integrating MPU 6050 for body tilt and flex sensor for back curvature. Wrote and optimized Arduino C++ code to process sensor data, detect poor posture, and activate vibrating motor for user feedback.',
      technologies: 'Arduino C++, MPU 6050, Flex Sensor, Embedded Systems',
      startDate: '2024-01-01',
      endDate: '2024-12-01',
      githubUrl: '',
      liveUrl: '',
      imageUrl: '',
      active: true
    }
  ];

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    // Try to fetch from backend, fallback to mock data if it fails
    return this.http.get<Project[]>(this.apiUrl).pipe(
      catchError(() => of(this.mockProjects))
    );
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${id}`);
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }

  updateProject(id: number, project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/${id}`, project);
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  searchProjectsByTitle(title: string): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/search/title?title=${title}`);
  }

  searchProjectsByTechnology(technology: string): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/search/technology?technology=${technology}`);
  }
}
