import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-gradient"></div>
      <div class="footer-content">
        <div class="footer-main">
          <div class="footer-brand">
            <h2 class="brand-title">Kalana Warnakulasooriya</h2>
            <p class="brand-tagline">Software Engineering Intern</p>
            <p class="brand-description">
              Crafting high-performance digital experiences with precision engineering.
            </p>
          </div>
          
          <div class="footer-grid">
            <div class="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#awards">Awards</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="mailto:kalanam890@gmail.com" class="contact-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    kalanam890&#64;gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kalana-madhumalka-19b787334" target="_blank" class="contact-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/KalanaMW" target="_blank" class="contact-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p>&copy; {{currentYear}} Kalana Warnakulasooriya. All rights reserved.</p>
          <p class="footer-tagline">Built with <span class="heart">♥</span> using Angular</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      position: relative;
      background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
      color: #e2e8f0;
      overflow: hidden;
    }

    .footer-gradient {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, 
        transparent 0%,
        #a855f7 20%,
        #3b82f6 50%,
        #a855f7 80%,
        transparent 100%
      );
      animation: shimmer 3s ease-in-out infinite;
    }

    @keyframes shimmer {
      0%, 100% {
        opacity: 0.5;
      }
      50% {
        opacity: 1;
      }
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 20px 30px;
    }

    .footer-main {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 60px;
      margin-bottom: 40px;
    }

    .footer-brand {
      max-width: 400px;
    }

    .brand-title {
      font-size: 28px;
      font-weight: 700;
      background: linear-gradient(135deg, #fff 0%, #a855f7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 8px;
    }

    .brand-tagline {
      color: #a855f7;
      font-size: 14px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 16px;
    }

    .brand-description {
      color: #94a3b8;
      line-height: 1.6;
      font-size: 15px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
    }

    .footer-section h4 {
      color: #f1f5f9;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 20px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-section ul li {
      margin-bottom: 12px;
    }

    .footer-section ul li a {
      color: #cbd5e1;
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-block;
      font-size: 14px;
      position: relative;
    }

    .footer-section ul li a::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #a855f7, #3b82f6);
      transition: width 0.3s ease;
    }

    .footer-section ul li a:hover {
      color: #fff;
      transform: translateX(5px);
    }

    .footer-section ul li a:hover::after {
      width: 100%;
    }

    .contact-link {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 0;
    }

    .contact-link svg {
      flex-shrink: 0;
      transition: transform 0.3s ease;
    }

    .contact-link:hover svg {
      transform: scale(1.1);
    }

    .footer-bottom {
      border-top: 1px solid rgba(148, 163, 184, 0.1);
      padding: 24px 0;
    }

    .footer-bottom-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }

    .footer-bottom p {
      color: #94a3b8;
      font-size: 14px;
      margin: 0;
    }

    .footer-tagline {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .heart {
      color: #ef4444;
      animation: heartbeat 1.5s ease-in-out infinite;
    }

    @keyframes heartbeat {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }

    /* Mobile Responsive */
    @media (max-width: 1024px) {
      .footer-main {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .footer-brand {
        max-width: none;
      }
    }

    @media (max-width: 768px) {
      .footer-content {
        padding: 40px 20px 20px;
      }

      .footer-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .footer-bottom-content {
        flex-direction: column;
        text-align: center;
      }

      .brand-title {
        font-size: 24px;
      }
    }

    @media (max-width: 480px) {
      .footer-section h4 {
        font-size: 14px;
      }

      .footer-section ul li a {
        font-size: 13px;
      }

      .brand-title {
        font-size: 20px;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
