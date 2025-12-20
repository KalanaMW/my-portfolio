import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="awards-container">
      <div class="awards-hero">
        <div class="container">
          <h1 class="hero-title">Awards & Achievements</h1>
          <p class="hero-subtitle">Recognitions from competitions and certifications</p>
        </div>
      </div>

      <div class="container">
        <!-- Competition Awards -->
        <section class="awards-section">
          <h2 class="section-title">Competition Awards</h2>
          <div class="awards-grid">
            <div class="award-card highlight">
              <div class="award-image-wrapper">
                <img src="https://res.cloudinary.com/dzzqefqkr/image/upload/v1734688800/coderush_tz6jy8.png" alt="CodeRush 2024 Award" class="award-image">
              </div>
              <h3 class="award-title">1st Runners-Up</h3>
              <p class="award-event">CodeRush 2024</p>
              <p class="award-description">Competitive programming competition showcasing algorithmic problem-solving skills.</p>
            </div>

            <div class="award-card highlight">
              <div class="award-image-wrapper">
                <img src="https://res.cloudinary.com/dzzqefqkr/image/upload/v1734688801/codearena_nxtslg.png" alt="CodeAréna '25 Award" class="award-image">
              </div>
              <h3 class="award-title">1st Runners-Up</h3>
              <p class="award-event">CodeAréna '25</p>
              <p class="award-description">Software development competition demonstrating full-stack development expertise.</p>
            </div>

            <div class="award-card">
              <div class="award-image-wrapper">
                <img src="https://res.cloudinary.com/dzzqefqkr/image/upload/v1734688800/devthon_gzswme.png" alt="Devthon 2.0 Award" class="award-image">
              </div>
              <h3 class="award-title">2nd Runners-Up</h3>
              <p class="award-event">Devthon 2.0</p>
              <p class="award-description">Hackathon focused on innovative solutions and rapid prototyping.</p>
            </div>

            <div class="award-card">
              <div class="award-badge">🏆</div>
              <h3 class="award-title">Finalists</h3>
              <p class="award-event">MoraXtreme 10.0, 2025</p>
              <p class="award-description">University of Moratuwa's premier tech competition.</p>
            </div>

            <div class="award-card">
              <div class="award-badge">🎯</div>
              <h3 class="award-title">Participant</h3>
              <p class="award-event">Innovate with Ballerina 2025</p>
              <p class="award-description">Innovation competition focused on modern cloud-native development.</p>
            </div>
          </div>
        </section>

        <!-- Certifications -->
        <section class="certifications-section">
          <h2 class="section-title">📜 Certifications & Achievements</h2>
          <div class="cert-timeline">
            <div class="cert-item">
              <div class="cert-icon">🎓</div>
              <div class="cert-content">
                <h3>Diploma in Business Management</h3>
                <p class="cert-institution">IMBS Green Campus</p>
                <p class="cert-result">Final GPA: <strong>3.893 / 4.00</strong></p>
                <p class="cert-year">2024 - 2025</p>
              </div>
            </div>

            <div class="cert-item">
              <div class="cert-icon">🎓</div>
              <div class="cert-content">
                <h3>B.Sc. (Hons) IT & Management</h3>
                <p class="cert-institution">University of Moratuwa</p>
                <p class="cert-result">Current GPA: <strong>3.46 / 4.00</strong></p>
                <p class="cert-year">2023 - Present</p>
              </div>
            </div>

            <div class="cert-item">
              <div class="cert-icon">📜</div>
              <div class="cert-content">
                <h3>G.C.E Advanced Level</h3>
                <p class="cert-institution">Maliyadeva College - Kurunegala</p>
                <p class="cert-result">Physical Science Stream | Z-score: <strong>1.3533</strong></p>
                <p class="cert-details">Chemistry - B, Physics - B, Combined Mathematics - C</p>
                <p class="cert-year">2021</p>
              </div>
            </div>

            <div class="cert-item">
              <div class="cert-icon">📜</div>
              <div class="cert-content">
                <h3>G.C.E Ordinary Level</h3>
                <p class="cert-institution">Maliyadeva College - Kurunegala</p>
                <p class="cert-result"><strong>7 A's & 2 B's</strong> (English Medium)</p>
                <p class="cert-year">2017</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Contributions -->
        <section class="contributions-section">
          <h2 class="section-title">🤝 Community Contributions</h2>
          <div class="contributions-grid">
            <div class="contribution-card">
              <div class="contribution-icon">🤝</div>
              <h3>Axinom Company Coordinator</h3>
              <p>Representing Axinom as a company coordinator at the Faculty of IT Career Fair 2025.</p>
            </div>

            <div class="contribution-card">
              <div class="contribution-icon">🌱</div>
              <h3>DBM Group CSR Leader</h3>
              <p>Led DBM Group in a CSR project delivering school donations, tree planting, and an IoT workshop, blending leadership with real-world impact.</p>
            </div>

            <div class="contribution-card">
              <div class="contribution-icon">💼</div>
              <h3>Virtusa Industry Reconnaissance</h3>
              <p>Industry Reconnaissance with Virtusa, culminating in a successful CSR project that showcased collaboration and industry engagement.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .awards-container {
      min-height: 100vh;
      background: var(--bg-primary);
      transition: background-color 0.3s ease;
    }

    :host-context(.dark-mode) .awards-container {
      background: linear-gradient(to bottom, #0f172a 0%, #1e293b 100%);
    }

    .awards-hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 120px 20px 80px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    :host-context(.dark-mode) .awards-hero {
      background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
    }

    .awards-hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="rgba(255,255,255,0.05)"/></svg>');
      animation: float 20s infinite linear;
    }

    @keyframes float {
      0% { transform: translateY(0) translateX(0); }
      100% { transform: translateY(-100px) translateX(100px); }
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 1rem;
      position: relative;
      z-index: 1;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      opacity: 0.95;
      position: relative;
      z-index: 1;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .awards-section,
    .certifications-section,
    .contributions-section {
      padding: 60px 0;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 3rem;
      color: var(--text-heading);
      position: relative;
      transition: color 0.3s ease;
    }

    .section-title::after {
      content: '';
      display: block;
      width: 80px;
      height: 4px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      margin: 1rem auto 0;
      border-radius: 2px;
    }

    /* Awards Grid */
    .awards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .award-card {
      background: var(--card-bg);
      border-radius: 16px;
      padding: 2rem;
      box-shadow: var(--shadow-sm);
      transition: all 0.3s ease;
      border: 2px solid transparent;
      text-align: center;
    }

    .award-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-md);
      border-color: #667eea;
    }

    .award-card.highlight {
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
      border-color: #667eea;
    }

    :host-context(.dark-mode) .award-card {
      background: rgba(30, 41, 59, 0.5);
    }

    :host-context(.dark-mode) .award-card:hover {
      border-color: #a78bfa;
    }

    :host-context(.dark-mode) .award-card.highlight {
      background: linear-gradient(135deg, rgba(167, 139, 250, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
      border-color: #a78bfa;
    }

    .award-image-wrapper {
      width: 100%;
      height: 180px;
      margin-bottom: 1.5rem;
      border-radius: 12px;
      overflow: hidden;
      background: transparent;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      position: relative;
    }

    .award-image {
      width: 100%;
      min-height: 400px;
      object-fit: cover;
      object-position: center 15%;
      display: block;
      transition: transform 0.3s ease;
      clip-path: inset(0 0 50% 0);
    }

    .award-card:hover .award-image {
      transform: scale(1.05);
    }

    .award-badge {
      font-size: 4rem;
      margin-bottom: 1rem;
      animation: bounce 2s infinite;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    .award-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-heading);
      margin-bottom: 0.5rem;
      transition: color 0.3s ease;
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

    /* Certifications Timeline */
    .cert-timeline {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      padding-left: 40px;
    }

    .cert-timeline::before {
      content: '';
      position: absolute;
      left: 15px;
      top: 0;
      bottom: 0;
      width: 3px;
      background: linear-gradient(to bottom, #667eea, #764ba2);
    }

    .cert-item {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 3rem;
      position: relative;
      background: var(--card-bg);
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: var(--shadow-sm);
      transition: all 0.3s ease;
    }

    .cert-item:hover {
      box-shadow: var(--shadow-md);
      transform: translateX(5px);
    }

    :host-context(.dark-mode) .cert-item {
      background: rgba(30, 41, 59, 0.5);
    }

    .cert-icon {
      font-size: 2.5rem;
      flex-shrink: 0;
      position: absolute;
      left: -56px;
      top: 1.5rem;
      width: 40px;
      height: 40px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .cert-content h3 {
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--text-heading);
      margin-bottom: 0.5rem;
      transition: color 0.3s ease;
    }

    .cert-institution {
      color: #667eea;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    :host-context(.dark-mode) .cert-institution {
      color: #a78bfa;
    }

    .cert-result {
      color: var(--text-primary);
      margin-bottom: 0.25rem;
      transition: color 0.3s ease;
    }

    .cert-result strong {
      color: #10b981;
      font-size: 1.1rem;
    }

    :host-context(.dark-mode) .cert-result strong {
      color: #34d399;
    }

    .cert-details {
      color: var(--text-secondary);
      font-size: 0.95rem;
      transition: color 0.3s ease;
    }

    .cert-year {
      color: var(--text-secondary);
      font-size: 0.9rem;
      margin-top: 0.5rem;
      transition: color 0.3s ease;
    }

    /* Contributions */
    .contributions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .contribution-card {
      background: var(--card-bg);
      border-radius: 16px;
      padding: 2rem;
      box-shadow: var(--shadow-sm);
      transition: all 0.3s ease;
      border-left: 4px solid #667eea;
    }

    .contribution-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-md);
    }

    :host-context(.dark-mode) .contribution-card {
      background: rgba(30, 41, 59, 0.5);
      border-left-color: #a78bfa;
    }

    .contribution-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .contribution-card h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-heading);
      margin-bottom: 0.75rem;
      transition: color 0.3s ease;
    }

    .contribution-card p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin: 0;
      transition: color 0.3s ease;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2rem;
      }

      .section-title {
        font-size: 1.75rem;
      }

      .awards-grid,
      .contributions-grid {
        grid-template-columns: 1fr;
      }

      .cert-timeline {
        padding-left: 0;
      }

      .cert-timeline::before {
        display: none;
      }

      .cert-icon {
        position: static;
        margin-bottom: 1rem;
      }

      .cert-item {
        flex-direction: column;
      }
    }
  `]
})
export class AwardsComponent {}
