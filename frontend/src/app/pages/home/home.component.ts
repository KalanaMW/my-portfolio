import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ProjectService } from '../../services/project.service';
import { SkillService } from '../../services/skill.service';
import { ContactService } from '../../services/contact.service';
import { ContactMessage } from '../../models/contact-message.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  animations: [
    trigger('slideDown', [
      state('collapsed', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden',
        marginTop: '0'
      })),
      state('expanded', style({
        height: '*',
        opacity: '1',
        overflow: 'visible',
        marginTop: '15px'
      })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out'))
    ])
  ],
  template: `
    <div class="home-container">
      <!-- Hero Section -->
      <section id="home" class="hero">
        <div class="hero-background"></div>
        <div class="hero-content">
          <div class="hero-text">
            <p class="hero-greeting">Hello, I'm</p>
            <h1 class="hero-title">Kalana Warnakulasooriya</h1>
            <h2 class="hero-role">Software Engineering Intern</h2>
            <p class="hero-tagline">
              Enthusiastic IT & Management undergraduate specializing in software engineering and web development
            </p>
            <div class="hero-stats">
              <div class="stat-item stat-technologies" style="background-image: url('assets/Technologies background.png');">
                <div class="stat-number" [attr.data-target]="totalSkills">0</div>
                <div class="stat-label">Technologies</div>
              </div>
              <div class="stat-item stat-projects" style="background-image: url('assets/Projets background.png');">
                <div class="stat-number" [attr.data-target]="totalProjects">0</div>
                <div class="stat-label">Major Projects</div>
              </div>
              <div class="stat-item stat-awards" style="background-image: url('assets/Awards background.png');">
                <div class="stat-number" [attr.data-target]="3">0</div>
                <div class="stat-label">Awards Won</div>
              </div>
            </div>
            <div class="hero-buttons">
              <a href="#projects" class="btn btn-primary" (click)="scrollTo('projects')">
                <span>View Projects</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
                </svg>
              </a>
              <a href="#contact" class="btn btn-secondary" (click)="scrollTo('contact')">
                <span>Get In Touch</span>
              </a>
            </div>
            <div class="hero-social">
              <a href="mailto:kalanam890@gmail.com" class="social-link" title="Email">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#EA4335"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/kalana-madhumalka-19b787334" target="_blank" class="social-link" title="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
                </svg>
              </a>
              <a href="https://github.com/KalanaMW" target="_blank" class="social-link" title="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" fill="#181717"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="hero-image">
            <img src="assets/profile.png" alt="Kalana Warnakulasooriya" class="profile-photo">
          </div>
        </div>
      </section>

      <!-- About Summary -->
      <section id="about" class="about-summary">
        <div class="container">
          <h2 class="section-title">About Me</h2>
          <div class="about-content">
            <p class="about-text">
              I am an enthusiastic IT and Management undergraduate who thrives on tackling challenges and finding creative
              solutions. I have a strong interest in software engineering and web development, and I am seeking a software
              engineering internship where I can apply my time management and teamwork skills to contribute to collaborative
              projects and create value efficiently.
            </p>
            <div class="about-highlights">
              <div class="highlight-item">
                <div class="highlight-image-container">
                  <img src="assets/focus-areas.png" alt="Focus Areas" class="highlight-image">
                </div>
                <div class="highlight-content">
                  <h3>Focus Areas</h3>
                  <p>Enterprise Application Development, Web Development, Competitive Gaming</p>
                </div>
              </div>
              <div class="highlight-item">
                <div class="highlight-image-container">
                  <img src="assets/Soft Skills.png" alt="Soft Skills" class="highlight-image">
                </div>
                <div class="highlight-content">
                  <h3>Soft Skills</h3>
                  <p>Leadership, Self Learning, Analytical Thinking, Problem Solving, Effective Communication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Education Section -->
      <section id="education" class="education-section">
        <div class="container">
          <h2 class="section-title">🎓 Education</h2>
          <div class="education-timeline">
            <div class="education-item">
              <div class="education-logo">
                <img src="assets/uom-logo.png" alt="University of Moratuwa" class="edu-logo">
              </div>
              <div class="education-content">
                <div class="education-header">
                  <h3>B.Sc. (Hons) Degree in Information Technology & Management</h3>
                  <span class="education-date">2023 - Present</span>
                </div>
                <p class="education-institution">University of Moratuwa</p>
                <p class="education-gpa"><strong>GPA: 3.46 / 4.00</strong></p>
              </div>
            </div>

            <div class="education-item">
              <div class="education-logo">
                <img src="assets/imbs-logo.png" alt="IMBS Green Campus" class="edu-logo">
              </div>
              <div class="education-content">
                <div class="education-header">
                  <h3>Diploma in Business Management</h3>
                  <span class="education-date">2024 - 2025</span>
                </div>
                <p class="education-institution">IMBS Green Campus</p>
                <p class="education-gpa"><strong>Final GPA: 3.893 / 4.00</strong></p>
              </div>
            </div>

            <div class="education-item">
              <div class="education-logo">
                <img src="assets/maliyadeva-logo.png" alt="Maliyadeva College" class="edu-logo">
              </div>
              <div class="education-content">
                <div class="education-header">
                  <h3>Maliyadeva College - Kurunegala</h3>
                  <span class="education-date">2012 - 2025</span>
                </div>
                <div class="education-details">
                  <p class="education-qualification"><strong>G.C.E. Advanced Level 2021 (Physical Science)</strong></p>
                  <p class="education-gpa">Z-score: 1.3533</p>
                  <p class="education-gpa">Chemistry - B, Physics - B, Combined Mathematics - C</p>
                </div>
                <div class="education-details">
                  <p class="education-qualification"><strong>G.C.E. Ordinary Level 2017</strong></p>
                  <p class="education-gpa">Results: 7 A's & 2 B's (English Medium)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Projects -->
      <section id="projects" class="featured-projects">
        <div class="container">
          <h2 class="section-title">Featured Projects</h2>
          <div class="projects-grid">
            <div class="project-card featured">
              <div class="project-image-placeholder">
                <img src="assets/Agrilink-lanka project.png" alt="AgriLink Lanka" class="project-image">
                <div class="project-badge">ONGOING</div>
              </div>
              <div class="project-content">
                <div class="project-header">
                  <h3>AgriLink Lanka</h3>
                  <p class="project-year">2025 - Ongoing</p>
                </div>
                <p class="project-description">
                  Centralized B2B platform connecting Sri Lankan farmers with global exporters, eliminating intermediaries 
                  and promoting fair trade with role-based access and secure payments.
                </p>
                <div class="project-tech-stack">
                  <span class="tech-tag">Next.js</span>
                  <span class="tech-tag">ASP.NET Core</span>
                  <span class="tech-tag">PostgreSQL</span>
                  <span class="tech-tag">Stripe</span>
                  <span class="tech-tag">TypeScript</span>
                </div>
              </div>
            </div>

            <div class="project-card">
              <div class="project-image-placeholder">
                <img src="assets/Fitsync project.png" alt="FitSync Pro" class="project-image">
                <div class="project-badge">COMPLETED</div>
              </div>
              <div class="project-content">
                <div class="project-header">
                  <h3>FitSync Pro</h3>
                  <p class="project-year">2024 - 2025</p>
                </div>
                <p class="project-description">
                  Fitness trainer reservation system with integrated Stripe payments. Led the team as Team Leader,
                  developing landing page and purchase history features.
                </p>
                <div class="project-tech-stack">
                  <span class="tech-tag">Next.js</span>
                  <span class="tech-tag">Stripe API</span>
                  <span class="tech-tag">TypeScript</span>
                  <span class="tech-tag">Tailwind CSS</span>
                </div>
              </div>
            </div>

            <div class="project-card">
              <div class="project-image-placeholder">
                <img src="assets/Gearup project.png" alt="GearUp" class="project-image">
                <div class="project-badge">ONGOING</div>
              </div>
              <div class="project-content">
                <div class="project-header">
                  <h3>GearUp – Automobile Service Management System</h3>
                  <p class="project-year">2024</p>
                </div>
                <p class="project-description">
                  A microservices-based platform for vehicle service booking, real-time tracking, and employee workflow management.
                  Built customer modules (Dashboard, My Vehicles, Settings, Modifications) with real-time updates and consistent UI enhancements.
                </p>
                <div class="project-tech-stack">
                  <span class="tech-tag">Next.js</span>
                  <span class="tech-tag">TypeScript</span>
                  <span class="tech-tag">Tailwind CSS</span>
                  <span class="tech-tag">Spring Boot</span>
                  <span class="tech-tag">PostgreSQL</span>
                </div>
              </div>
            </div>

            <ng-container *ngIf="showMoreProjects">
              <div class="project-card">
                <div class="project-image-placeholder">
                  <img src="assets/portfolio web app.png" alt="Portfolio Web App" class="project-image">
                  <div class="project-badge">ONGOING</div>
                </div>
                <div class="project-content">
                  <div class="project-header">
                    <h3>Portfolio Web App</h3>
                    <p class="project-year">2025 - Ongoing</p>
                  </div>
                  <p class="project-description">
                    Built a full-stack personal portfolio web application with project showcase, skills section, and contact form. 
                    Features RESTful API backend, modern responsive UI, and MSSQL integration.
                  </p>
                  <div class="project-tech-stack">
                    <span class="tech-tag">Angular</span>
                    <span class="tech-tag">Spring Boot</span>
                    <span class="tech-tag">MSSQL</span>
                    <span class="tech-tag">Java</span>
                  </div>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image-placeholder">
                  <img src="assets/Gamershub project.jpeg" alt="Gamers Hub" class="project-image">
                  <div class="project-badge">COMPLETED</div>
                </div>
                <div class="project-content">
                  <div class="project-header">
                    <h3>Gamers_Hub</h3>
                    <p class="project-year">2024</p>
                  </div>
                  <p class="project-description">
                    Gaming news and entertainment platform with user authentication, dashboards, and dynamic content sections. 
                    Delivered seamless SPA experience with responsive design.
                  </p>
                  <div class="project-tech-stack">
                    <span class="tech-tag">Laravel</span>
                    <span class="tech-tag">React</span>
                    <span class="tech-tag">Inertia.js</span>
                    <span class="tech-tag">Tailwind CSS</span>
                  </div>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image-placeholder">
                  <img src="assets/Informative posture corrector.jpg" alt="Informative Posture Corrector" class="project-image">
                  <div class="project-badge">COMPLETED</div>
                </div>
                <div class="project-content">
                  <div class="project-header">
                    <h3>Informative Posture Corrector</h3>
                    <p class="project-year">2024</p>
                  </div>
                  <p class="project-description">
                    Developed a real-time posture correction device using MPU6050 and flex sensor. 
                    Programmed Arduino to process sensor data and trigger vibration alerts for poor posture.
                  </p>
                  <div class="project-tech-stack">
                    <span class="tech-tag">Arduino C++</span>
                    <span class="tech-tag">MPU 6050</span>
                    <span class="tech-tag">Embedded Systems</span>
                  </div>
                </div>
              </div>
            </ng-container>
          </div>

          <div class="section-footer">
            <button
              type="button"
              class="view-more-btn"
              (click)="toggleProjects()"
              [attr.aria-expanded]="showMoreProjects"
            >
              <span>{{ showMoreProjects ? 'View less' : 'View more' }}</span>
              <svg class="chevron" [class.open]="showMoreProjects" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <!-- Tech Stack -->
      <section id="skills" class="tech-stack">
        <div class="container">
          <h2 class="section-title">Technologies & Tools</h2>
          <div class="tech-categories">
            <div class="tech-category">
              <h3 class="tech-category-title">Programming Languages</h3>
              <div class="tech-items">
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  <span>C</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  <span>C++</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  <span>JavaScript</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  <span>TypeScript</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  <span>PHP</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  <span>Java</span>
                </div>
              </div>
            </div>

            <div class="tech-category">
              <h3 class="tech-category-title">Web Development</h3>
              <div class="tech-items">
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                  <span>Tailwind CSS</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                  <span>Next.js</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                  <span>React.js</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                  <span>Angular</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                  <span>ASP.NET</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                  <span>Spring Boot</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                  <span>Express.js</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                  <span>Laravel</span>
                </div>
              </div>
            </div>

            <div class="tech-category">
              <h3 class="tech-category-title">Database & Cloud</h3>
              <div class="tech-items">
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3"/>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                  </svg>
                  <span>MongoDB</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3"/>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                  </svg>
                  <span>MySQL</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3"/>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                  </svg>
                  <span>MSSQL</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3"/>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                  </svg>
                  <span>PostgreSQL</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                  </svg>
                  <span>Cloudinary</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                  </svg>
                  <span>Stripe</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                  </svg>
                  <span>Firebase</span>
                </div>
              </div>
            </div>

            <div class="tech-category">
              <h3 class="tech-category-title">Tools & Others</h3>
              <div class="tech-items">
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                  <span>Git</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                  <span>GitHub</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="9" y1="3" x2="9" y2="21"/>
                  </svg>
                  <span>Figma</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="9" y1="3" x2="9" y2="21"/>
                  </svg>
                  <span>Blender</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                  <span>Linux</span>
                </div>
                <div class="tech-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                  <span>macOS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Awards Section -->
      <section id="awards" class="awards-section">
        <div class="container">
          <h2 class="section-title">Awards & Achievements</h2>
          <div class="awards-grid">
            <div class="award-card">
              <div class="award-image-container">
                <img src="assets/Coderush 2024.JPG" alt="CodeRush 2024" class="award-image">
                <div class="award-overlay"></div>
              </div>
              <div class="award-content">
                <h3 class="award-title">1st Runners-Up</h3>
                <p class="award-event">CodeRush 2024</p>
                <p class="award-description">Competitive programming competition showcasing algorithmic problem-solving skills.</p>
              </div>
            </div>
            <div class="award-card">
              <div class="award-image-container">
                <img src="assets/CodeArena.jpg" alt="CodeAréna '25" class="award-image">
                <div class="award-overlay"></div>
              </div>
              <div class="award-content">
                <h3 class="award-title">1st Runners-Up</h3>
                <p class="award-event">CodeAréna '25</p>
                <p class="award-description">Software development competition demonstrating full-stack development expertise.</p>
              </div>
            </div>
            <div class="award-card">
              <div class="award-image-container">
                <img src="assets/Devthon 2.0.jpg" alt="Devthon 2.0" class="award-image">
                <div class="award-overlay"></div>
              </div>
              <div class="award-content">
                <h3 class="award-title">2nd Runners-Up</h3>
                <p class="award-event">Devthon 2.0</p>
                <p class="award-description">Hackathon focused on innovative solutions and rapid prototyping.</p>
              </div>
            </div>

            <ng-container *ngIf="showMoreAwards">
              <!-- Additional awards go here (hidden until "View more" is opened) -->
            </ng-container>
          </div>

          <div class="section-footer">
            <button
              type="button"
              class="view-more-btn"
              (click)="toggleAwards()"
              [attr.aria-expanded]="showMoreAwards"
            >
              <span>{{ showMoreAwards ? 'View less' : 'View more' }}</span>
              <svg class="chevron" [class.open]="showMoreAwards" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <!-- Extra-Curricular Activities Section -->
      <section id="activities" class="activities-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Extra-Curricular Activities</h2>
            <p class="section-subtitle">Leadership, Community Service & Personal Development</p>
          </div>
          
          <div class="activities-scroll-container">
            <div class="activities-grid">
            
            <!-- Volunteering & Community Service -->
            <div class="activity-card">
              <div class="activity-header">
                <div class="activity-icon">🤝</div>
                <h3 class="activity-title">Volunteering & Community Service</h3>
              </div>
              <div class="activity-items">
                <div class="activity-item" [class.expanded]="expandedItems['coordinator']">
                  <div class="activity-item-header" (click)="toggleItem('coordinator')">
                    <img src="assets/uom-logo.png" alt="UoM Logo" class="activity-org-logo">
                    <div class="activity-item-info">
                      <h4>Company Coordinator</h4>
                      <p class="activity-org">Faculty of IT Career Fair 2025, University of Moratuwa</p>
                    </div>
                    <button class="expand-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  </div>
                  <div class="activity-content" [@slideDown]="expandedItems['coordinator'] ? 'expanded' : 'collapsed'">
                    <p class="activity-desc">Honored to represent Axinom as a company coordinator. Connected with emerging tech talent and supported industry engagement.</p>
                    <div class="activity-gallery">
                      <img src="assets/volunteering company coordinator for axinom at career fare .jpeg" alt="Axinom Career Fair Coordinator" class="activity-image" (click)="openImageGallery('volunteering', 0)">
                    </div>
                  </div>
                </div>
                <div class="activity-item" [class.expanded]="expandedItems['csr']">
                  <div class="activity-item-header" (click)="toggleItem('csr')">
                    <img src="assets/imbs-logo.png" alt="IMBS Logo" class="activity-org-logo">
                    <div class="activity-item-info">
                      <h4>Corporate Social Responsibility Project Team Lead</h4>
                      <p class="activity-org">IMBS Green Campus - Sri Lanka</p>
                    </div>
                    <button class="expand-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  </div>
                  <div class="activity-content" [@slideDown]="expandedItems['csr'] ? 'expanded' : 'collapsed'">
                    <p class="activity-desc">"Empowering the Future – One Child at a Time" - Led DBM Group 01 (80th Batch) CSR initiative: A Social Care Program for School Children. Donated essentials, planted trees, and delivered IoT workshop with Gavesha.space.</p>
                  <div class="image-carousel">
                    <button class="carousel-btn prev" (click)="previousImage('csr')" *ngIf="carouselIndices['csr'] > 0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>
                    <div class="carousel-container">
                      <div class="carousel-track" [style.transform]="'translateX(-' + (carouselIndices['csr'] * 100) + '%)'">
                        <img src="assets/Volunteering imbs csr image 1.jpeg" alt="IMBS CSR Project 1" class="carousel-image" (click)="openImageGallery('volunteering', 1)">
                        <img src="assets/Volunteering imbs csr image 2.jpeg" alt="IMBS CSR Project 2" class="carousel-image" (click)="openImageGallery('volunteering', 2)">
                        <img src="assets/Volunteering imbs csr image 3.jpg" alt="IMBS CSR Project 3" class="carousel-image" (click)="openImageGallery('volunteering', 3)">
                      </div>
                    </div>
                    <button class="carousel-btn next" (click)="nextImage('csr', 3)" *ngIf="carouselIndices['csr'] < 2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                    <div class="carousel-dots">
                      <span class="dot" [class.active]="carouselIndices['csr'] === 0" (click)="goToImage('csr', 0)"></span>
                      <span class="dot" [class.active]="carouselIndices['csr'] === 1" (click)="goToImage('csr', 1)"></span>
                      <span class="dot" [class.active]="carouselIndices['csr'] === 2" (click)="goToImage('csr', 2)"></span>
                    </div>
                  </div>
                  </div>
                </div>

                <div class="activity-item" [class.expanded]="expandedItems['certificate']">
                  <div class="activity-item-header" (click)="toggleItem('certificate')">
                    <img src="assets/imbs-logo.png" alt="IMBS Logo" class="activity-org-logo">
                    <div class="activity-item-info">
                      <h4>Certificate of Appreciation</h4>
                      <p class="activity-org">Secondary School Gonahena (March 11, 2025)</p>
                    </div>
                    <button class="expand-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  </div>
                  <div class="activity-content" [@slideDown]="expandedItems['certificate'] ? 'expanded' : 'collapsed'">
                    <p class="activity-desc">Awarded for conducting an inspiring and educational Robotics Workshop, acknowledging the positive impact and valuable contribution to student learning.</p>
                    <div class="activity-gallery">
                      <img src="assets/imbs diploma csr Certificate of Appreciation.jpg" alt="Certificate of Appreciation" class="activity-image" (click)="openImageGallery('volunteering', 4)">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Diploma & Academic Excellence -->
              <div class="activity-card">
                <div class="activity-header">
                  <div class="activity-icon">🎓</div>
                  <h3 class="activity-title">Diploma & Academic Excellence</h3>
                </div>
                <div class="activity-items">
                  <div class="activity-item" [class.expanded]="expandedItems['diploma']">
                    <div class="activity-item-header" (click)="toggleItem('diploma')">
                      <img src="assets/imbs-logo.png" alt="IMBS Logo" class="activity-org-logo">
                      <div class="activity-item-info">
                        <h4>Diploma in Business Management</h4>
                        <p class="activity-org">IMBS Green Campus (2024-2025)</p>
                      </div>
                      <button class="expand-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    </div>
                    <div class="activity-content" [@slideDown]="expandedItems['diploma'] ? 'expanded' : 'collapsed'">
                      <p class="activity-desc">Achieved an impressive GPA of 3.893/4.00, demonstrating academic excellence and dedication to business education.</p>
                      <div class="activity-gallery">
                        <img src="assets/imbs diploma result transcript image to view.png" alt="IMBS Diploma Transcript" class="activity-image" (click)="openImageGallery('diploma', 0)">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Karate -->
              <div class="activity-card">
                <div class="activity-header">
                  <div class="activity-icon">🥋</div>
                  <h3 class="activity-title">Karate</h3>
                </div>
                <div class="activity-items">
                  <div class="activity-item" [class.expanded]="expandedItems['karate1']">
                    <div class="activity-item-header" (click)="toggleItem('karate1')">
                      <div class="activity-item-info">
                        <h4>Certificate of Merit - Best Eight</h4>
                        <p class="activity-org">3rd USKU Karate Championship 2016</p>
                      </div>
                      <button class="expand-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    </div>
                    <div class="activity-content" [@slideDown]="expandedItems['karate1'] ? 'expanded' : 'collapsed'">
                      <p class="activity-desc">Achieved Best Eight at the 3rd USKU Karate Championship 2016, held on 3 April 2016 at YMBA, Kurunegala. Issued by the Universal Shotokan Karate Union of Sri Lanka (USKU), affiliated with the Sri Lanka Karate Do Federation.</p>
                      <div class="activity-gallery">
                        <img src="assets/Karate Championship.jpg" alt="Karate Championship Certificate" class="activity-image" (click)="openImageGallery('karate', 0)">
                      </div>
                    </div>
                  </div>
                  <div class="activity-item" [class.expanded]="expandedItems['karate2']">
                    <div class="activity-item-header" (click)="toggleItem('karate2')">
                      <div class="activity-item-info">
                        <h4>Certificate of Participation - Kata & Kumite Seminar</h4>
                        <p class="activity-org">Universal Shotokan Karate Union of Sri Lanka</p>
                      </div>
                      <button class="expand-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    </div>
                    <div class="activity-content" [@slideDown]="expandedItems['karate2'] ? 'expanded' : 'collapsed'">
                      <p class="activity-desc">Successfully completed the Kata & Kumite Seminar, held on 16 January 2016 at YMBA Kurunegala. Organized by the Universal Shotokan Karate Union of Sri Lanka and conducted by Hanshi Kenichi Fukamizu (Japan).</p>
                      <div class="activity-gallery">
                        <img src="assets/karate and umithe seminar.jpg" alt="Karate Seminar Certificate" class="activity-image" (click)="openImageGallery('karate', 1)">
                      </div>
                    </div>
                  </div>
                  <div class="activity-item" [class.expanded]="expandedItems['karate3']">
                    <div class="activity-item-header" (click)="toggleItem('karate3')">
                      <div class="activity-item-info">
                        <h4>Certificate of Proficiency - 10th Kyu (White Belt)</h4>
                        <p class="activity-org">Universal Shotokan Karate Union of Sri Lanka</p>
                      </div>
                      <button class="expand-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    </div>
                    <div class="activity-content" [@slideDown]="expandedItems['karate3'] ? 'expanded' : 'collapsed'">
                      <p class="activity-desc">Certified for passing the 10th Kyu (White Belt) examination in the Martial Art of Karate. Conducted on 10 November 2015 at Kurunegala, under the Universal Shotokan Karate Union of Sri Lanka, affiliated with USKU Japan.</p>
                      <div class="activity-gallery">
                        <img src="assets/karate 10 th kyu.jpg" alt="10th Kyu Certificate" class="activity-image" (click)="openImageGallery('karate', 2)">
                      </div>
                    </div>
                  </div>
                  <div class="activity-item" [class.expanded]="expandedItems['karate4']">
                    <div class="activity-item-header" (click)="toggleItem('karate4')">
                      <div class="activity-item-info">
                        <h4>Certificate of Proficiency - 9th Kyu (White Belt)</h4>
                        <p class="activity-org">Universal Shotokan Karate Union of Sri Lanka</p>
                      </div>
                      <button class="expand-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    </div>
                    <div class="activity-content" [@slideDown]="expandedItems['karate4'] ? 'expanded' : 'collapsed'">
                      <p class="activity-desc">Promoted to 9th Kyu (White Belt) after successfully completing the karate grading examination. Held on 22 February 2016 at Kurunegala, under the Universal Shotokan Karate Union of Sri Lanka, affiliated with USKU Japan.</p>
                      <div class="activity-gallery">
                        <img src="assets/karate 9 th kyu.jpg" alt="9th Kyu Certificate" class="activity-image" (click)="openImageGallery('karate', 3)">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="contact-section">
        <div class="container">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">I'm actively seeking software engineering internships and exciting collaborative projects.</p>
          
          <div class="contact-content">
            <!-- Contact Form -->
            <div class="contact-form-container">
              <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="contact-form">
                <div class="form-group">
                  <label for="name">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    [(ngModel)]="message.name" 
                    required 
                    class="form-input"
                    placeholder="Your full name">
                </div>

                <div class="form-group">
                  <label for="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    [(ngModel)]="message.email" 
                    required 
                    email
                    class="form-input"
                    placeholder="your.email@example.com">
                </div>

                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    [(ngModel)]="message.subject" 
                    class="form-input"
                    placeholder="What's this about?">
                </div>

                <div class="form-group">
                  <label for="messageText">Message *</label>
                  <textarea 
                    id="messageText" 
                    name="messageText" 
                    [(ngModel)]="message.message" 
                    required 
                    rows="5"
                    class="form-textarea"
                    placeholder="Tell me about your project or just say hello..."></textarea>
                </div>

                <button 
                  type="submit" 
                  [disabled]="!contactForm.form.valid || isSubmitting"
                  class="submit-btn">
                  <span *ngIf="!isSubmitting">Send Message</span>
                  <span *ngIf="isSubmitting">Sending...</span>
                </button>

                <div *ngIf="submitSuccess" class="success-message">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
                <div *ngIf="submitError" class="error-message">
                  ✗ {{ submitError }}
                </div>
              </form>
            </div>

            <!-- Contact Methods -->
            <div class="contact-methods-container">
              <h3 class="contact-methods-title">Or reach out directly</h3>
              <div class="contact-methods-grid">
                <a href="mailto:kalanam890@gmail.com" class="contact-method-card">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#EA4335"/>
                  </svg>
                  <h3>Email</h3>
                  <p>kalanam890{{ '@' }}gmail.com</p>
                </a>
                <a href="https://www.linkedin.com/in/kalana-madhumalka-19b787334" target="_blank" class="contact-method-card">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
                  </svg>
                  <h3>LinkedIn</h3>
                  <p>Connect with me</p>
                </a>
                <a href="https://github.com/KalanaMW" target="_blank" class="contact-method-card">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" fill="#181717"/>
                  </svg>
                  <h3>GitHub</h3>
                  <p>View my repositories</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      min-height: 100vh;
      overflow-x: hidden;
      background: var(--bg-primary);
      transition: background-color 0.3s ease;
    }

    /* Hero Section */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 120px 60px 80px;
      overflow: hidden;
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
      z-index: -2;
    }

    :host-context(.dark-mode) .hero-background {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    }

    .hero-background::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -10%;
      width: 800px;
      height: 800px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
      border-radius: 50%;
      animation: float 20s infinite ease-in-out;
    }

    .hero-background::after {
      content: '';
      position: absolute;
      bottom: -30%;
      left: -5%;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
      border-radius: 50%;
      animation: float 15s infinite ease-in-out reverse;
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(30px, 30px); }
    }

    .hero-content {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
      z-index: 1;
    }

    .hero-image {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: fadeIn 1s ease-out;
    }

    .profile-photo {
      width: 100%;
      max-width: 450px;
      height: auto;
      border-radius: 30px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      animation: fadeInScale 1s ease-out;
      border: 3px solid transparent;
    }

    .profile-photo:hover {
      transform: scale(1.05) translateY(-10px);
      box-shadow: 0 35px 90px rgba(102, 126, 234, 0.35);
      border-color: rgba(102, 126, 234, 0.2);
    }

    :host-context(.dark-mode) .profile-photo {
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    }

    :host-context(.dark-mode) .profile-photo:hover {
      box-shadow: 0 35px 90px rgba(167, 139, 250, 0.4);
      border-color: rgba(167, 139, 250, 0.3);
    }

    @keyframes fadeInScale {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .hero-greeting {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 12px;
      animation: fadeInUp 0.6s ease-out;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: 0.5px;
    }

    :host-context(.dark-mode) .hero-greeting {
      background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-title {
      font-size: 4.2rem;
      font-weight: 900;
      color: #111827;
      margin-bottom: 18px;
      line-height: 1.05;
      animation: fadeInUp 0.8s ease-out;
      letter-spacing: -0.03em;
      transition: color 0.3s ease;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    :host-context(.dark-mode) .hero-title {
      color: #ffffff;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }

    .hero-role {
      font-size: 2rem;
      font-weight: 700;
      color: #667eea;
      margin-bottom: 24px;
      animation: fadeInUp 1s ease-out;
      transition: color 0.3s ease;
      display: inline-block;
      position: relative;
      padding-bottom: 8px;
    }

    .hero-role::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
      border-radius: 2px;
      animation: slideIn 1.2s ease-out;
    }

    @keyframes slideIn {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    :host-context(.dark-mode) .hero-role {
      color: #a78bfa;
    }

    :host-context(.dark-mode) .hero-role::after {
      background: linear-gradient(90deg, #a78bfa 0%, #ec4899 100%);
    }

    .hero-tagline {
      font-size: 1.15rem;
      color: #4b5563;
      line-height: 1.7;
      margin-bottom: 35px;
      animation: fadeInUp 1.2s ease-out;
      transition: color 0.3s ease;
    }

    :host-context(.dark-mode) .hero-tagline {
      color: #d1d5db;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Stats Counter */
    .hero-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
      margin-bottom: 40px;
      animation: fadeInUp 1.4s ease-out;
    }

    .stat-item {
      background: transparent;
      backdrop-filter: none;
      border-radius: 20px;
      padding: 32px 24px;
      text-align: center;
      border: 2px solid rgba(255, 255, 255, 0.2);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .stat-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      transition: all 0.4s ease;
      z-index: 1;
    }

    .stat-number, .stat-label {
      position: relative;
      z-index: 2;
    }

    .stat-item:hover::before {
      background: rgba(0, 0, 0, 0.1);
    }

    :host-context(.dark-mode) .stat-item {
      border-color: rgba(255, 255, 255, 0.3);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    :host-context(.dark-mode) .stat-item::before {
      background: transparent;
    }

    :host-context(.dark-mode) .stat-item:hover::before {
      background: rgba(0, 0, 0, 0.15);
    }

    .stat-item:hover {
      transform: translateY(-12px) scale(1.05);
      box-shadow: 0 20px 50px rgba(102, 126, 234, 0.35);
      border-color: rgba(102, 126, 234, 0.4);
    }

    .stat-item:hover .stat-number {
      transform: scale(1.1);
    }

    .stat-item:hover .stat-label {
      transform: translateY(-2px);
    }

    :host-context(.dark-mode) .stat-item:hover {
      box-shadow: 0 20px 50px rgba(167, 139, 250, 0.4);
      border-color: rgba(167, 139, 250, 0.5);
    }

    .stat-number {
      font-size: 2.8rem;
      font-weight: 900;
      color: #ffffff;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      margin-bottom: 8px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      z-index: 1;
    }

    :host-context(.dark-mode) .stat-number {
      color: #ffffff;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .stat-label {
      font-size: 0.95rem;
      color: #ffffff;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
      font-weight: 600;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      z-index: 1;
    }

    :host-context(.dark-mode) .stat-label {
      color: #ffffff;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    }

    :host-context(.dark-mode) .stat-number {
      color: #ffffff;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    /* Buttons */
    .hero-buttons {
      display: flex;
      gap: 20px;
      margin-bottom: 35px;
      animation: fadeInUp 1.6s ease-out;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 32px;
      border-radius: 980px;
      font-weight: 600;
      font-size: 1rem;
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      border: none;
    }

    .btn-primary {
      background: #111827;
      color: white;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .btn-primary:hover {
      background: #1f2937;
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    }

    :host-context(.dark-mode) .btn-primary {
      background: #f9fafb;
      color: #111827;
    }

    :host-context(.dark-mode) .btn-primary:hover {
      background: #e5e7eb;
    }

    .btn-secondary {
      background: transparent;
      color: #111827;
      border: 2px solid #e5e7eb;
    }

    .btn-secondary:hover {
      background: #f9fafb;
      border-color: #d1d5db;
      transform: translateY(-2px);
    }

    :host-context(.dark-mode) .btn-secondary {
      color: #f9fafb;
      border-color: #374151;
    }

    :host-context(.dark-mode) .btn-secondary:hover {
      background: #1f2937;
      border-color: #4b5563;
    }

    .btn-outline {
      background: transparent;
      color: #667eea;
      border: 2px solid #667eea;
    }

    .btn-outline:hover {
      background: #667eea;
      color: white;
      transform: translateY(-2px);
    }

    :host-context(.dark-mode) .btn-outline {
      color: #a78bfa;
      border-color: #a78bfa;
    }

    :host-context(.dark-mode) .btn-outline:hover {
      background: #a78bfa;
      color: #111827;
    }

    .btn-large {
      padding: 18px 40px;
      font-size: 1.1rem;
    }

    /* Social Links */
    .hero-social {
      display: flex;
      gap: 15px;
      animation: fadeInUp 1.8s ease-out;
    }

    .social-link {
      width: 52px;
      height: 52px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border: 2px solid rgba(102, 126, 234, 0.1);
      position: relative;
      overflow: hidden;
    }

    .social-link::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width 0.4s ease, height 0.4s ease;
    }

    .social-link:hover::before {
      width: 200%;
      height: 200%;
    }

    .social-link:hover {
      background: white;
      transform: translateY(-8px) scale(1.1);
      box-shadow: 0 15px 35px rgba(102, 126, 234, 0.3);
      border-color: rgba(102, 126, 234, 0.3);
    }

    :host-context(.dark-mode) .social-link {
      background: var(--card-bg);
      border-color: rgba(167, 139, 250, 0.2);
    }

    :host-context(.dark-mode) .social-link::before {
      background: linear-gradient(135deg, rgba(167, 139, 250, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%);
    }

    :host-context(.dark-mode) .social-link:hover {
      background: var(--bg-secondary);
      box-shadow: 0 15px 35px rgba(167, 139, 250, 0.4);
      border-color: rgba(167, 139, 250, 0.4);
    }

    /* Hero Image */
    .hero-image {
      position: relative;
      animation: fadeIn 2s ease-out;
    }

    /* Floating Badges */
    .floating-badge {
      position: absolute;
      background: white;
      padding: 12px 20px;
      border-radius: 50px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
      color: #374151;
      animation: floatBadge 3s infinite ease-in-out;
    }

    .badge-1 {
      top: 10%;
      right: -10%;
      animation-delay: 0s;
    }

    .badge-2 {
      bottom: 30%;
      left: -15%;
      animation-delay: 1s;
    }

    .badge-3 {
      bottom: 10%;
      right: -5%;
      animation-delay: 2s;
    }

    @keyframes floatBadge {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }

    .badge-icon {
      font-size: 1.5rem;
    }

    .badge-text {
      font-size: 0.95rem;
    }

    /* Sections */
    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .about-summary,
    .featured-projects,
    .tech-stack,
    .cta-section {
      padding: 100px 20px;
    }

    .about-summary {
      background: var(--bg-primary);
      transition: background-color 0.3s ease;
    }

    .section-title {
      font-size: 2.8rem;
      font-weight: 800;
      text-align: center;
      margin-bottom: 60px;
      color: var(--text-heading);
      position: relative;
      transition: color 0.3s ease;
    }

    .section-title::after {
      content: '';
      display: block;
      width: 100px;
      height: 5px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      margin: 20px auto 0;
      border-radius: 3px;
    }

    :host-context(.dark-mode) .section-title::after {
      background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
    }

    /* About Summary */
    .about-content {
      max-width: 900px;
      margin: 0 auto;
    }

    .about-text {
      font-size: 1.2rem;
      line-height: 1.9;
      color: var(--text-secondary);
      text-align: center;
      margin-bottom: 50px;
      transition: color 0.3s ease;
    }

    .about-highlights {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }

    .highlight-item {
      background: var(--card-bg);
      border-radius: 20px;
      border: 2px solid var(--border-color);
      transition: all 0.3s ease;
      overflow: hidden;
    }

    .highlight-item:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }

    :host-context(.dark-mode) .highlight-item:hover {
      border-color: #a78bfa;
    }

    .highlight-image-container {
      width: 100%;
      height: 240px;
      overflow: hidden;
      border-radius: 20px 20px 0 0;
      position: relative;
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
    }

    .highlight-image-container::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100px;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, var(--card-bg) 100%);
      pointer-events: none;
      z-index: 1;
    }

    .highlight-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 20%;
      transition: transform 0.3s ease;
    }

    .highlight-item:hover .highlight-image {
      transform: scale(1.05);
    }

    .highlight-content {
      padding: 25px;
      position: relative;
      z-index: 2;
    }

    .highlight-item h3 {
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--text-heading);
      margin-bottom: 10px;
      transition: color 0.3s ease;
    }

    .highlight-item p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin: 0;
      transition: color 0.3s ease;
    }

    /* Education Section */
    .education-section {
      padding: 80px 20px;
      background: var(--bg-primary);
      transition: background-color 0.3s ease;
    }

    .education-timeline {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .education-item {
      background: var(--card-bg);
      border-radius: 20px;
      padding: 30px;
      border: 2px solid var(--border-color);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      display: flex;
      gap: 25px;
      align-items: flex-start;
    }

    .education-item::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
      transition: width 0.3s ease;
    }

    .education-item:hover::before {
      width: 8px;
    }

    .education-item:hover {
      transform: translateX(8px);
      box-shadow: var(--shadow-lg);
      border-color: rgba(102, 126, 234, 0.3);
    }

    :host-context(.dark-mode) .education-item::before {
      background: linear-gradient(180deg, #a78bfa 0%, #ec4899 100%);
    }

    :host-context(.dark-mode) .education-item:hover {
      border-color: rgba(167, 139, 250, 0.4);
    }

    .education-logo {
      flex-shrink: 0;
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 16px;
      padding: 12px;
      border: 2px solid rgba(102, 126, 234, 0.1);
      transition: all 0.3s ease;
    }

    :host-context(.dark-mode) .education-logo {
      background: var(--bg-secondary);
      border-color: rgba(167, 139, 250, 0.2);
    }

    .education-item:hover .education-logo {
      transform: scale(1.05);
      border-color: rgba(102, 126, 234, 0.3);
    }

    :host-context(.dark-mode) .education-item:hover .education-logo {
      border-color: rgba(167, 139, 250, 0.4);
    }

    .edu-logo {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .education-content {
      position: relative;
      z-index: 1;
      flex: 1;
    }

    .education-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;
      gap: 20px;
    }

    .education-header h3 {
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--text-heading);
      margin: 0;
      flex: 1;
      transition: color 0.3s ease;
    }

    .education-date {
      font-size: 0.95rem;
      font-weight: 600;
      color: #667eea;
      background: rgba(102, 126, 234, 0.1);
      padding: 6px 16px;
      border-radius: 20px;
      white-space: nowrap;
      transition: all 0.3s ease;
    }

    :host-context(.dark-mode) .education-date {
      color: #a78bfa;
      background: rgba(167, 139, 250, 0.15);
    }

    .education-institution {
      font-size: 1.1rem;
      color: #667eea;
      font-weight: 600;
      margin: 8px 0;
      transition: color 0.3s ease;
    }

    :host-context(.dark-mode) .education-institution {
      color: #a78bfa;
    }

    .education-gpa {
      font-size: 1rem;
      color: var(--text-secondary);
      margin: 6px 0;
      transition: color 0.3s ease;
    }

    .education-gpa strong {
      color: var(--text-primary);
      transition: color 0.3s ease;
    }

    .education-details {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid var(--border-color);
    }

    .education-details:first-of-type {
      margin-top: 12px;
    }

    .education-qualification {
      font-size: 1.05rem;
      color: var(--text-heading);
      font-weight: 600;
      margin: 0 0 8px 0;
      transition: color 0.3s ease;
    }

    /* Featured Projects */
    .featured-projects {
      background: var(--bg-secondary);
      transition: background-color 0.3s ease;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 35px;
      margin-bottom: 50px;
    }

    .project-card {
      background: var(--card-bg);
      border-radius: 20px;
      padding: 0;
      box-shadow: var(--shadow-md);
      transition: all 0.4s ease;
      border: 2px solid var(--border-color);
      position: relative;
      overflow: hidden;
    }

    .project-content {
      padding: 30px;
    }

    .project-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.05), transparent);
      transition: left 0.5s ease;
    }

    .project-card:hover::before {
      left: 100%;
    }

    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: var(--shadow-lg);
    }

    :host-context(.dark-mode) .project-card:hover {
      border-color: #a78bfa;
    }

    .project-badge {
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 8px 16px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.5px;
      z-index: 2;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    :host-context(.dark-mode) .project-badge {
      background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
    }

    .project-header {
      margin-bottom: 15px;
    }

    .project-header h3 {
      font-size: 1.6rem;
      font-weight: 700;
      color: var(--text-heading);
      margin-bottom: 5px;
      transition: color 0.3s ease;
    }

    .project-year {
      color: var(--text-secondary);
      font-size: 0.95rem;
      margin: 0;
      transition: color 0.3s ease;
    }

    .project-description {
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: 20px;
      transition: color 0.3s ease;
    }

    .project-tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 20px;
    }

    .tech-tag {
      padding: 6px 12px;
      background: rgba(102, 126, 234, 0.1);
      color: #667eea;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    :host-context(.dark-mode) .tech-tag {
      background: rgba(167, 139, 250, 0.2);
      color: #a78bfa;
    }

    .project-image-placeholder {
      width: 100%;
      height: 250px;
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
      border-radius: 20px 20px 0 0;
      overflow: hidden;
      position: relative;
    }

    .project-image-placeholder::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);
      pointer-events: none;
      z-index: 1;
    }

    :host-context(.dark-mode) .project-image-placeholder::after {
      background: linear-gradient(to bottom, rgba(30, 41, 59, 0) 0%, rgba(30, 41, 59, 0.4) 100%);
    }

    .project-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .project-card:hover .project-image {
      transform: scale(1.05);
    }

    .section-footer {
      text-align: center;
      margin-top: 40px;
    }

    .view-more-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 18px;
      border-radius: 999px;
      background: var(--card-bg);
      color: var(--text-heading);
      border: 2px solid var(--border-color);
      font-weight: 800;
      cursor: pointer;
      transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
    }

    .view-more-btn:hover {
      transform: translateY(-2px);
      border-color: rgba(102, 126, 234, 0.45);
      box-shadow: var(--shadow-md);
    }

    :host-context(.dark-mode) .view-more-btn:hover {
      border-color: rgba(167, 139, 250, 0.55);
    }

    .view-more-btn .chevron {
      transition: transform 0.25s ease;
    }

    .view-more-btn .chevron.open {
      transform: rotate(180deg);
    }

    /* Tech Stack */
    .tech-stack {
      background: var(--bg-primary);
    }

    .tech-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
    }

    .tech-category {
      background: var(--card-bg);
      padding: 30px;
      border-radius: 20px;
      border: 2px solid var(--border-color);
      transition: all 0.3s ease;
    }

    .tech-category:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-md);
      border-color: #667eea;
    }

    :host-context(.dark-mode) .tech-category {
      background: var(--card-bg);
    }

    :host-context(.dark-mode) .tech-category:hover {
      border-color: #a78bfa;
    }

    .tech-category-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--text-heading);
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 2px solid #667eea;
    }

    :host-context(.dark-mode) .tech-category-title {
      border-bottom-color: #a78bfa;
    }

    .tech-items {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .tech-item {
      padding: 10px 18px;
      background: var(--bg-primary);
      border: 2px solid rgba(102, 126, 234, 0.2);
      border-radius: 10px;
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text-primary);
      transition: all 0.3s ease;
      cursor: default;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .tech-item svg {
      flex-shrink: 0;
    }

    .tech-item:hover {
      background: #667eea;
      color: white;
      border-color: #667eea;
      transform: scale(1.05);
    }

    :host-context(.dark-mode) .tech-item {
      background: rgba(15, 23, 42, 0.6);
      border-color: rgba(167, 139, 250, 0.3);
    }

    :host-context(.dark-mode) .tech-item:hover {
      background: #a78bfa;
      border-color: #a78bfa;
    }

    /* Awards Section */
    .awards-section {
      padding: 80px 20px;
      background: var(--bg-secondary);
      transition: background 0.3s ease;
    }

    .awards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .award-card {
      background: var(--card-bg);
      border-radius: 24px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
      border: 1px solid var(--border-color);
      position: relative;
    }

    .award-card:hover {
      transform: translateY(-12px);
      box-shadow: 0 20px 40px rgba(102, 126, 234, 0.25);
      border-color: rgba(102, 126, 234, 0.3);
    }

    :host-context(.dark-mode) .award-card {
      background: var(--card-bg);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    :host-context(.dark-mode) .award-card:hover {
      box-shadow: 0 20px 40px rgba(167, 139, 250, 0.4);
      border-color: rgba(167, 139, 250, 0.4);
    }

    .award-image-container {
      width: 100%;
      height: 400px;
      overflow: hidden;
      position: relative;
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
    }

    .award-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 60%;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%);
      z-index: 1;
      pointer-events: none;
    }

    :host-context(.dark-mode) .award-image-container {
      background: linear-gradient(135deg, rgba(167, 139, 250, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%);
    }

    .award-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea20 0%, #764ba250 100%);
    }

    :host-context(.dark-mode) .award-placeholder {
      background: linear-gradient(135deg, #a78bfa30 0%, #ec489950 100%);
    }

    .award-badge-large {
      font-size: 8rem;
      filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
    }

    .award-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      z-index: 0;
    }

    .award-card:hover .award-image {
      transform: scale(1.1);
    }

    .award-card:hover .award-overlay {
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%);
    }

    .award-content {
      padding: 30px;
      text-align: center;
      position: relative;
      z-index: 2;
    }

    .award-title {
      font-size: 1.6rem;
      font-weight: 800;
      color: var(--text-heading);
      margin-bottom: 0.75rem;
      transition: all 0.3s ease;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    :host-context(.dark-mode) .award-title {
      background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .award-event {
      font-size: 1.1rem;
      color: #667eea;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    :host-context(.dark-mode) .award-event {
      color: #a78bfa;
    }

    .award-description {
      color: var(--text-secondary);
      line-height: 1.6;
      transition: color 0.3s ease;
    }

    /* Contact Section */
    .contact-section {
      padding: 80px 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    :host-context(.dark-mode) .contact-section {
      background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
    }

    .section-subtitle {
      font-size: 1.2rem;
      margin-bottom: 40px;
      opacity: 0.95;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 60px;
      max-width: 1200px;
      margin: 0 auto;
      align-items: start;
    }

    /* Contact Form Styles */
    .contact-form-container {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 24px;
      padding: 40px;
      border: 2px solid rgba(255, 255, 255, 0.2);
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-group label {
      font-weight: 600;
      font-size: 0.95rem;
      color: white;
      opacity: 0.95;
    }

    .form-input,
    .form-textarea {
      padding: 14px 18px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.15);
      color: white;
      font-size: 1rem;
      font-family: inherit;
      transition: all 0.3s ease;
      outline: none;
    }

    .form-input::placeholder,
    .form-textarea::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    .form-input:focus,
    .form-textarea:focus {
      border-color: rgba(255, 255, 255, 0.6);
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
    }

    .form-textarea {
      resize: vertical;
      min-height: 120px;
    }

    .submit-btn {
      padding: 16px 32px;
      background: white;
      color: #667eea;
      border: none;
      border-radius: 12px;
      font-size: 1.1rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 10px;
    }

    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      background: rgba(255, 255, 255, 0.95);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .success-message {
      padding: 15px;
      background: rgba(46, 213, 115, 0.2);
      border: 2px solid rgba(46, 213, 115, 0.5);
      border-radius: 12px;
      color: white;
      font-weight: 600;
      margin-top: 10px;
    }

    .error-message {
      padding: 15px;
      background: rgba(255, 71, 87, 0.2);
      border: 2px solid rgba(255, 71, 87, 0.5);
      border-radius: 12px;
      color: white;
      font-weight: 600;
      margin-top: 10px;
    }

    /* Contact Methods Container */
    .contact-methods-container {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .contact-methods-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
      margin: 0;
      text-align: center;
    }

    .contact-methods-grid {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .contact-method-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 24px;
      text-decoration: none;
      color: white;
      transition: all 0.3s ease;
      border: 2px solid rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .contact-method-card:hover {
      transform: translateY(-3px);
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.4);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    .contact-method-card svg {
      flex-shrink: 0;
    }

    .contact-method-card h3 {
      font-size: 1.2rem;
      font-weight: 700;
      margin: 0 0 5px 0;
    }

    .contact-method-card p {
      opacity: 0.9;
      margin: 0;
      font-size: 0.95rem;
    }

    @media (max-width: 968px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .contact-form-container {
        padding: 30px;
      }

      .contact-methods-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
      }

      .contact-method-card {
        flex-direction: column;
        text-align: center;
        padding: 30px 20px;
      }
    }

    @media (max-width: 640px) {
      .contact-form-container {
        padding: 24px;
      }

      .contact-methods-grid {
        grid-template-columns: 1fr;
      }
    }

    /* Extra-Curricular Activities */
    .activities-section {
      background: var(--bg-primary);
      padding: 100px 0;
    }

    .section-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .section-subtitle {
      color: var(--text-body);
      font-size: 1.1rem;
      margin-top: 10px;
      opacity: 0.8;
    }

    .activities-scroll-container {
      overflow-x: auto;
      overflow-y: hidden;
      margin-bottom: 50px;
      padding: 20px 0;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: thin;
      scrollbar-color: rgba(102, 126, 234, 0.3) transparent;
      width: 100%;
    }

    .activities-scroll-container::-webkit-scrollbar {
      height: 8px;
    }

    .activities-scroll-container::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.05);
      border-radius: 10px;
    }

    .activities-scroll-container::-webkit-scrollbar-thumb {
      background: rgba(102, 126, 234, 0.3);
      border-radius: 10px;
    }

    :host-context(.dark-mode) .activities-scroll-container::-webkit-scrollbar-thumb {
      background: rgba(167, 139, 250, 0.3);
    }

    .activities-grid {
      display: flex;
      gap: 30px;
      padding: 0 20px;
      width: max-content;
    }

    .activity-card {
      background: var(--card-bg);
      border-radius: 20px;
      padding: 30px;
      border: 2px solid var(--border-color);
      transition: all 0.3s ease;
      flex-shrink: 0;
      width: 550px;
      max-width: 90vw;
      max-height: 600px;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: rgba(102, 126, 234, 0.3) transparent;
    }

    .activity-card::-webkit-scrollbar {
      width: 6px;
    }

    .activity-card::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.05);
      border-radius: 10px;
    }

    .activity-card::-webkit-scrollbar-thumb {
      background: rgba(102, 126, 234, 0.3);
      border-radius: 10px;
    }

    :host-context(.dark-mode) .activity-card::-webkit-scrollbar-thumb {
      background: rgba(167, 139, 250, 0.3);
    }

    .activity-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
      border-color: rgba(102, 126, 234, 0.3);
    }

    :host-context(.dark-mode) .activity-card:hover {
      border-color: rgba(167, 139, 250, 0.4);
    }

    .activity-header {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 2px solid var(--border-color);
    }

    .activity-icon {
      font-size: 2.5rem;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
      border-radius: 15px;
    }

    :host-context(.dark-mode) .activity-icon {
      background: linear-gradient(135deg, rgba(167, 139, 250, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%);
    }

    .activity-title {
      font-size: 1.6rem;
      font-weight: 700;
      color: var(--text-heading);
      margin: 0;
    }

    .activity-items {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .activity-item-header {
      display: flex;
      align-items: center;
      gap: 15px;
      cursor: pointer;
      user-select: none;
    }

    .activity-item-info {
      flex: 1;
    }

    .activity-org-logo {
      width: 50px;
      height: 50px;
      object-fit: contain;
      border-radius: 8px;
      background: white;
      padding: 5px;
      flex-shrink: 0;
    }

    :host-context(.dark-mode) .activity-org-logo {
      background: rgba(255, 255, 255, 0.1);
    }

    .expand-btn {
      background: none;
      border: none;
      color: var(--text-body);
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .expand-btn svg {
      transition: transform 0.3s ease;
    }

    .activity-item.expanded .expand-btn svg {
      transform: rotate(180deg);
    }

    .activity-item {
      padding: 15px;
      background: rgba(102, 126, 234, 0.03);
      border-radius: 12px;
      border-left: 4px solid #667eea;
      transition: all 0.3s ease;
      margin-bottom: 15px;
    }

    .activity-item:last-child {
      margin-bottom: 0;
    }

    .activity-items {
      margin-top: 20px;
    }

    .activity-content {
      overflow: visible;
      transition: all 0.3s ease;
      margin-top: 0;
    }

    .activity-content p,
    .activity-content .activity-gallery,
    .activity-content .image-carousel {
      margin-top: 15px;
    }

    :host-context(.dark-mode) .activity-item {
      background: rgba(167, 139, 250, 0.05);
      border-left-color: #a78bfa;
    }

    .activity-item:hover {
      background: rgba(102, 126, 234, 0.08);
    }

    :host-context(.dark-mode) .activity-item:hover {
      background: rgba(167, 139, 250, 0.1);
    }

    .activity-item h4 {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--text-heading);
      margin: 0 0 8px 0;
    }

    .activity-org {
      font-size: 0.95rem;
      font-weight: 600;
      color: #667eea;
      margin: 0 0 12px 0;
    }

    :host-context(.dark-mode) .activity-org {
      color: #a78bfa;
    }

    .activity-desc {
      color: var(--text-secondary);
      line-height: 1.7;
      margin: 0 0 15px 0;
    }

    .activity-gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 15px;
      margin-top: 15px;
    }

    .activity-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 2px solid var(--border-color);
    }

    .activity-image:hover {
      transform: scale(1.05);
      box-shadow: var(--shadow-md);
      border-color: #667eea;
    }

    :host-context(.dark-mode) .activity-image:hover {
      border-color: #a78bfa;
    }

    .image-carousel {
      position: relative;
      margin-top: 15px;
    }

    .carousel-container {
      overflow: hidden;
      border-radius: 10px;
      position: relative;
    }

    .carousel-track {
      display: flex;
      transition: transform 0.4s ease;
    }

    .carousel-image {
      width: 100%;
      height: 300px;
      object-fit: cover;
      flex-shrink: 0;
      cursor: pointer;
      border: 2px solid var(--border-color);
    }

    .carousel-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.9);
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 2;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    :host-context(.dark-mode) .carousel-btn {
      background: rgba(30, 41, 59, 0.9);
    }

    .carousel-btn:hover {
      background: white;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    :host-context(.dark-mode) .carousel-btn:hover {
      background: rgba(30, 41, 59, 1);
    }

    .carousel-btn.prev {
      left: 10px;
    }

    .carousel-btn.next {
      right: 10px;
    }

    .carousel-btn svg {
      color: #667eea;
    }

    :host-context(.dark-mode) .carousel-btn svg {
      color: #a78bfa;
    }

    .carousel-dots {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin-top: 12px;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(102, 126, 234, 0.3);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .dot.active {
      background: #667eea;
      width: 24px;
      border-radius: 4px;
    }

    :host-context(.dark-mode) .dot {
      background: rgba(167, 139, 250, 0.3);
    }

    :host-context(.dark-mode) .dot.active {
      background: #a78bfa;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 60px;
        text-align: center;
      }

      .hero-image {
        order: -1;
        max-width: 400px;
        margin: 0 auto;
      }

      .hero-title {
        font-size: 3rem;
      }

      .hero-buttons {
        justify-content: center;
      }

      .hero-stats {
        grid-template-columns: repeat(2, 1fr);
      }

      .floating-badge {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .hero {
        padding: 100px 20px 60px;
      }

      .hero-image {
        max-width: 320px;
      }

      .profile-photo {
        border-radius: 20px;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-role {
        font-size: 1.4rem;
      }

      .hero-buttons {
        flex-direction: column;
      }

      .about-highlights,
      .cta-buttons {
        grid-template-columns: 1fr;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }

      .tech-categories {
        grid-template-columns: 1fr;
      }

      .section-title {
        font-size: 2rem;
      }

      .cta-title {
        font-size: 2rem;
      }

      .cta-buttons {
        flex-direction: column;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }

      .stat-number {
        font-size: 2rem;
      }

      .hero-stats {
        grid-template-columns: 1fr;
      }

      .btn {
        width: 100%;
        justify-content: center;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  totalProjects = 0;
  totalSkills = 0;

  showMoreProjects = false;
  showMoreAwards = false;
  showMoreActivities = false;
  
  carouselIndices: { [key: string]: number } = {
    'csr': 0
  };
  
  expandedItems: { [key: string]: boolean } = {
    'coordinator': false,
    'csr': false,
    'certificate': false,
    'diploma': false,
    'karate1': false,
    'karate2': false,
    'karate3': false,
    'karate4': false
  };

  // Contact form properties
  message: ContactMessage = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  constructor(
    private projectService: ProjectService,
    private skillService: SkillService,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.loadStats();
  }

  toggleProjects() {
    this.showMoreProjects = !this.showMoreProjects;
  }

  toggleAwards() {
    this.showMoreAwards = !this.showMoreAwards;
  }

  toggleActivities() {
    this.showMoreActivities = !this.showMoreActivities;
  }

  toggleItem(itemKey: string) {
    this.expandedItems[itemKey] = !this.expandedItems[itemKey];
  }

  openImageGallery(category: string, index: number) {
    // For now, just open the image in a new tab
    // You can implement a modal/lightbox later if needed
    const images: { [key: string]: string[] } = {
      'volunteering': [
        'assets/volunteering company coordinator for axinom at career fare .jpeg',
        'assets/Volunteering imbs csr image 1.jpeg',
        'assets/Volunteering imbs csr image 2.jpeg',
        'assets/Volunteering imbs csr image 3.jpg',
        'assets/imbs diploma csr Certificate of Appreciation.jpg'
      ],
      'diploma': [
        'assets/imbs diploma result transcript image to view.png'
      ],
      'karate': [
        'assets/Karate Championship.jpg',
        'assets/karate and umithe seminar.jpg',
        'assets/karate 10 th kyu.jpg',
        'assets/karate 9 th kyu.jpg'
      ]
    };

    if (images[category] && images[category][index]) {
      window.open(images[category][index], '_blank');
    }
  }

  loadStats() {
    // Fetch projects count
    this.projectService.getAllProjects().subscribe({
      next: (projects) => {
        this.totalProjects = projects.filter(p => p.active !== false).length;
        setTimeout(() => this.animateCounters(), 100);
      },
      error: () => {
        this.totalProjects = 5; // Fallback
        setTimeout(() => this.animateCounters(), 100);
      }
    });

    // Fetch skills count
    this.skillService.getAllSkills().subscribe({
      next: (skills) => {
        this.totalSkills = skills.filter(s => s.active !== false).length;
        setTimeout(() => this.animateCounters(), 100);
      },
      error: () => {
        this.totalSkills = 31; // Fallback
        setTimeout(() => this.animateCounters(), 100);
      }
    });
  }

  animateCounters() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
      const target = parseInt((stat as HTMLElement).getAttribute('data-target') || '0');
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          (stat as HTMLElement).textContent = Math.floor(current).toString();
          requestAnimationFrame(updateCounter);
        } else {
          (stat as HTMLElement).textContent = target.toString();
        }
      };

      // Start animation when element is in view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCounter();
            observer.unobserve(entry.target);
          }
        });
      });

      observer.observe(stat as Element);
    });
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // 80px for header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }

  // Carousel navigation methods
  nextImage(carouselKey: string, totalImages: number) {
    if (this.carouselIndices[carouselKey] < totalImages - 1) {
      this.carouselIndices[carouselKey]++;
    }
  }

  previousImage(carouselKey: string) {
    if (this.carouselIndices[carouselKey] > 0) {
      this.carouselIndices[carouselKey]--;
    }
  }

  goToImage(carouselKey: string, index: number) {
    this.carouselIndices[carouselKey] = index;
  }

  // Contact form submission
  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = '';

    this.contactService.sendMessage(this.message).subscribe({
      next: () => {
        this.submitSuccess = true;
        this.isSubmitting = false;
        // Reset form
        this.message = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        // Clear success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.submitError = 'Failed to send message. Please try again or email me directly.';
        console.error('Error sending message:', error);
        // Clear error message after 5 seconds
        setTimeout(() => {
          this.submitError = '';
        }, 5000);
      }
    });
  }
}
