import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-container">
      <!-- Hero Section -->
      <section class="hero">
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
              <div class="stat-item">
                <div class="stat-number" [attr.data-target]="346">0</div>
                <div class="stat-label">GPA (3.46/4.00)</div>
              </div>
              <div class="stat-item">
                <div class="stat-number" [attr.data-target]="15">0</div>
                <div class="stat-label">Technologies</div>
              </div>
              <div class="stat-item">
                <div class="stat-number" [attr.data-target]="6">0</div>
                <div class="stat-label">Major Projects</div>
              </div>
              <div class="stat-item">
                <div class="stat-number" [attr.data-target]="5">0</div>
                <div class="stat-label">Awards Won</div>
              </div>
            </div>
            <div class="hero-buttons">
              <a routerLink="/projects" class="btn btn-primary">
                <span>View Projects</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
                </svg>
              </a>
              <a routerLink="/contact" class="btn btn-secondary">
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
            <div class="image-placeholder">
              <!-- Add your Cloudinary image here -->
              <div class="placeholder-text">Your Photo</div>
            </div>
            <div class="floating-badge badge-1">
              <span class="badge-icon">🏆</span>
              <span class="badge-text">5 Awards</span>
            </div>
            <div class="floating-badge badge-2">
              <span class="badge-icon">💻</span>
              <span class="badge-text">6 Projects</span>
            </div>
            <div class="floating-badge badge-3">
              <span class="badge-icon">🎓</span>
              <span class="badge-text">GPA 3.46</span>
            </div>
          </div>
        </div>
      </section>

      <!-- About Summary -->
      <section class="about-summary">
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
                <div class="highlight-icon">🎯</div>
                <h3>Focus Areas</h3>
                <p>Enterprise Application Development, Web Development, Competitive Gaming</p>
              </div>
              <div class="highlight-item">
                <div class="highlight-icon">💪</div>
                <h3>Soft Skills</h3>
                <p>Leadership, Self Learning, Analytical Thinking, Problem Solving, Effective Communication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Projects -->
      <section class="featured-projects">
        <div class="container">
          <h2 class="section-title">Featured Projects</h2>
          <div class="projects-grid">
            <div class="project-card featured">
              <div class="project-badge">ONGOING</div>
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
              <div class="project-image-placeholder">
                <!-- Cloudinary image placeholder -->
              </div>
            </div>

            <div class="project-card">
              <div class="project-badge">COMPLETED</div>
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
              <div class="project-image-placeholder"></div>
            </div>

            <div class="project-card">
              <div class="project-badge">ONGOING</div>
              <div class="project-header">
                <h3>Portfolio Web App</h3>
                <p class="project-year">2025 - Ongoing</p>
              </div>
              <p class="project-description">
                Full-stack personal portfolio with project showcase, skills section, and contact form. 
                Features RESTful API backend and modern responsive UI.
              </p>
              <div class="project-tech-stack">
                <span class="tech-tag">Angular</span>
                <span class="tech-tag">Spring Boot</span>
                <span class="tech-tag">MSSQL</span>
                <span class="tech-tag">Java</span>
              </div>
              <div class="project-image-placeholder"></div>
            </div>
          </div>
          <div class="section-footer">
            <a routerLink="/projects" class="btn btn-outline">View All Projects →</a>
          </div>
        </div>
      </section>

      <!-- Tech Stack -->
      <section class="tech-stack">
        <div class="container">
          <h2 class="section-title">Technologies & Tools</h2>
          <div class="tech-categories">
            <div class="tech-category">
              <h3 class="tech-category-title">Programming Languages</h3>
              <div class="tech-items">
                <div class="tech-item">C</div>
                <div class="tech-item">C++</div>
                <div class="tech-item">JavaScript</div>
                <div class="tech-item">TypeScript</div>
                <div class="tech-item">PHP</div>
                <div class="tech-item">Java</div>
              </div>
            </div>

            <div class="tech-category">
              <h3 class="tech-category-title">Web Development</h3>
              <div class="tech-items">
                <div class="tech-item">Tailwind CSS</div>
                <div class="tech-item">Next.js</div>
                <div class="tech-item">React.js</div>
                <div class="tech-item">Angular</div>
                <div class="tech-item">ASP.NET</div>
                <div class="tech-item">Spring Boot</div>
                <div class="tech-item">Express.js</div>
                <div class="tech-item">Laravel</div>
              </div>
            </div>

            <div class="tech-category">
              <h3 class="tech-category-title">Database & Cloud</h3>
              <div class="tech-items">
                <div class="tech-item">MongoDB</div>
                <div class="tech-item">MySQL</div>
                <div class="tech-item">MSSQL</div>
                <div class="tech-item">PostgreSQL</div>
                <div class="tech-item">Cloudinary</div>
                <div class="tech-item">Stripe</div>
                <div class="tech-item">Firebase</div>
              </div>
            </div>

            <div class="tech-category">
              <h3 class="tech-category-title">Tools & Others</h3>
              <div class="tech-items">
                <div class="tech-item">Git</div>
                <div class="tech-item">GitHub</div>
                <div class="tech-item">Figma</div>
                <div class="tech-item">Blender</div>
                <div class="tech-item">Linux</div>
                <div class="tech-item">macOS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2 class="cta-title">Let's Work Together</h2>
            <p class="cta-text">
              I'm actively seeking software engineering internships and exciting collaborative projects. 
              Let's create something amazing together!
            </p>
            <div class="cta-buttons">
              <a routerLink="/contact" class="btn btn-primary btn-large">Contact Me</a>
              <a routerLink="/awards" class="btn btn-outline btn-large">View Achievements</a>
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
    }

    /* Hero Section */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 120px 20px 80px;
      overflow: hidden;
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      z-index: -2;
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
      grid-template-columns: 1.2fr 1fr;
      gap: 60px;
      align-items: center;
      z-index: 1;
    }

    .hero-greeting {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 10px;
      animation: fadeInUp 0.6s ease-out;
    }

    .hero-title {
      font-size: 4rem;
      font-weight: 900;
      color: white;
      margin-bottom: 15px;
      line-height: 1.1;
      animation: fadeInUp 0.8s ease-out;
    }

    .hero-role {
      font-size: 1.8rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.95);
      margin-bottom: 20px;
      animation: fadeInUp 1s ease-out;
    }

    .hero-tagline {
      font-size: 1.15rem;
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.7;
      margin-bottom: 35px;
      animation: fadeInUp 1.2s ease-out;
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
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-bottom: 40px;
      animation: fadeInUp 1.4s ease-out;
    }

    .stat-item {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 20px 15px;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
    }

    .stat-item:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-5px);
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 800;
      color: white;
      margin-bottom: 5px;
    }

    .stat-label {
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 500;
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
      padding: 16px 32px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 1rem;
      text-decoration: none;
      transition: all 0.3s ease;
      cursor: pointer;
      border: none;
    }

    .btn-primary {
      background: white;
      color: #667eea;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.15);
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(10px);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.6);
      transform: translateY(-3px);
    }

    .btn-outline {
      background: transparent;
      color: #667eea;
      border: 2px solid #667eea;
    }

    .btn-outline:hover {
      background: #667eea;
      color: white;
      transform: translateY(-3px);
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
      width: 48px;
      height: 48px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .social-link:hover {
      background: white;
      transform: translateY(-5px) rotate(5deg);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }

    /* Hero Image */
    .hero-image {
      position: relative;
      animation: fadeIn 2s ease-out;
    }

    .image-placeholder {
      width: 100%;
      aspect-ratio: 1;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 30px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    .placeholder-text {
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.5rem;
      font-weight: 600;
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
      background: white;
    }

    .section-title {
      font-size: 2.8rem;
      font-weight: 800;
      text-align: center;
      margin-bottom: 60px;
      color: #1f2937;
      position: relative;
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

    /* About Summary */
    .about-content {
      max-width: 900px;
      margin: 0 auto;
    }

    .about-text {
      font-size: 1.2rem;
      line-height: 1.9;
      color: #4b5563;
      text-align: center;
      margin-bottom: 50px;
    }

    .about-highlights {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }

    .highlight-item {
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
      padding: 30px;
      border-radius: 20px;
      border: 2px solid rgba(102, 126, 234, 0.1);
      transition: all 0.3s ease;
    }

    .highlight-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.15);
      border-color: #667eea;
    }

    .highlight-icon {
      font-size: 3rem;
      margin-bottom: 15px;
    }

    .highlight-item h3 {
      font-size: 1.4rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 10px;
    }

    .highlight-item p {
      color: #6b7280;
      line-height: 1.6;
      margin: 0;
    }

    /* Featured Projects */
    .featured-projects {
      background: linear-gradient(to bottom, #f9fafb 0%, #ffffff 100%);
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 35px;
      margin-bottom: 50px;
    }

    .project-card {
      background: white;
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.4s ease;
      border: 2px solid transparent;
      position: relative;
      overflow: hidden;
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
      box-shadow: 0 15px 40px rgba(102, 126, 234, 0.2);
      border-color: #667eea;
    }

    .project-card.featured {
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
      border-color: #667eea;
    }

    .project-badge {
      display: inline-block;
      padding: 6px 14px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.5px;
      margin-bottom: 20px;
    }

    .project-header {
      margin-bottom: 15px;
    }

    .project-header h3 {
      font-size: 1.6rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 5px;
    }

    .project-year {
      color: #9ca3af;
      font-size: 0.95rem;
      margin: 0;
    }

    .project-description {
      color: #6b7280;
      line-height: 1.7;
      margin-bottom: 20px;
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
    }

    .project-image-placeholder {
      width: 100%;
      height: 180px;
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
      border-radius: 12px;
      margin-top: 20px;
    }

    .section-footer {
      text-align: center;
      margin-top: 40px;
    }

    /* Tech Stack */
    .tech-stack {
      background: white;
    }

    .tech-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
    }

    .tech-category {
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.03) 0%, rgba(118, 75, 162, 0.03) 100%);
      padding: 30px;
      border-radius: 20px;
      border: 2px solid rgba(102, 126, 234, 0.1);
      transition: all 0.3s ease;
    }

    .tech-category:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.1);
    }

    .tech-category-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 2px solid #667eea;
    }

    .tech-items {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .tech-item {
      padding: 10px 18px;
      background: white;
      border: 2px solid rgba(102, 126, 234, 0.2);
      border-radius: 10px;
      font-size: 0.95rem;
      font-weight: 600;
      color: #374151;
      transition: all 0.3s ease;
      cursor: default;
    }

    .tech-item:hover {
      background: #667eea;
      color: white;
      border-color: #667eea;
      transform: scale(1.05);
    }

    /* CTA Section */
    .cta-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-align: center;
    }

    .cta-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .cta-title {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 20px;
    }

    .cta-text {
      font-size: 1.2rem;
      line-height: 1.8;
      margin-bottom: 40px;
      opacity: 0.95;
    }

    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 20px;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .hero-title {
        font-size: 3rem;
      }

      .hero-stats {
        grid-template-columns: repeat(2, 1fr);
      }

      .hero-image {
        max-width: 500px;
        margin: 0 auto;
      }

      .floating-badge {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .hero {
        padding: 100px 20px 60px;
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
export class HomeComponentNew implements OnInit {
  ngOnInit() {
    this.animateCounters();
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
}
