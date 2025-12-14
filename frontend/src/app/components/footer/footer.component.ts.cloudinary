import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Portfolio</h3>
          <p>Built with Angular, Spring Boot, and SQL Server</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/awards">Awards</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Connect</h4>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/kalana-madhumalka-19b787334" target="_blank" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/KalanaMW" target="_blank" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" fill="#181717"/>
              </svg>
              GitHub
            </a>
            <a href="mailto:kalanam890@gmail.com" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#EA4335"/>
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Kalana Warnakulasooriya. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #1f2937;
      color: #fff;
      margin-top: auto;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
    }

    .footer-section h3 {
      color: #2563eb;
      margin-bottom: 15px;
      font-size: 24px;
    }

    .footer-section h4 {
      margin-bottom: 15px;
      color: #e5e7eb;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
    }

    .footer-section ul li {
      margin-bottom: 8px;
    }

    .footer-section ul li a {
      color: #9ca3af;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-section ul li a:hover {
      color: #2563eb;
    }

    .social-links {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .social-link {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #9ca3af;
      text-decoration: none;
      transition: all 0.3s ease;
      padding: 8px 12px;
      border-radius: 8px;
    }

    .social-link:hover {
      color: #2563eb;
      background: rgba(37, 99, 235, 0.1);
      transform: translateX(5px);
    }

    .social-link svg {
      flex-shrink: 0;
    }

    .footer-bottom {
      border-top: 1px solid #374151;
      text-align: center;
      padding: 20px;
      color: #9ca3af;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .social-links {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {
}
