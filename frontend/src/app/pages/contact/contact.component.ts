import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ContactMessage } from '../../models/contact-message.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-container">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title">Get In Touch</h1>
          <p class="page-subtitle">I'd love to hear from you. Send me a message!</p>
        </div>

        <div class="contact-content">
          <!-- Contact Form -->
          <div class="contact-form-section">
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
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  [(ngModel)]="message.message" 
                  required 
                  rows="6"
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
            </form>
          </div>

          <!-- Contact Info -->
          <div class="contact-info-section">
            <div class="contact-info">
              <h3>Or reach out directly</h3>
              <p>I'm always interested in new opportunities. Feel free to reach out!</p>
              
              <div class="contact-methods">
                <a href="mailto:kalanam890@gmail.com" class="contact-method">
                  <div class="contact-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <div class="contact-details">
                    <h4>Email</h4>
                    <p>kalanam890&#64;gmail.com</p>
                  </div>
                </a>

                <a href="tel:+94702018278" class="contact-method">
                  <div class="contact-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="#34A853"/>
                    </svg>
                  </div>
                  <div class="contact-details">
                    <h4>Phone</h4>
                    <p>+94 70 201 8278</p>
                  </div>
                </a>

                <div class="contact-method">
                  <div class="contact-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#4285F4"/>
                    </svg>
                  </div>
                  <div class="contact-details">
                    <h4>Location</h4>
                    <p>Moratuwa, Sri Lanka</p>
                  </div>
                </div>

                <a href="https://www.linkedin.com/in/kalana-madhumalka-19b787334" target="_blank" class="contact-method">
                  <div class="contact-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
                    </svg>
                  </div>
                  <div class="contact-details">
                    <h4>LinkedIn</h4>
						<p>Connect with me on LinkedIn</p>
                  </div>
                </a>

                <a href="https://github.com/KalanaMW" target="_blank" class="contact-method">
                  <div class="contact-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" fill="#181717"/>
                    </svg>
                  </div>
                  <div class="contact-details">
                    <h4>GitHub</h4>
                    <p>github.com/KalanaMW</p>
                  </div>
                </a>
              </div>

              <div class="response-time">
                <h4>⏰ Response Time</h4>
                <p>I typically respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Success Message -->
        <div class="success-message" *ngIf="showSuccess">
          <div class="success-content">
            <div class="success-icon">✅</div>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
            <button (click)="resetForm()" class="btn-secondary">Send Another Message</button>
          </div>
        </div>

        <!-- Error Message -->
        <div class="error-message" *ngIf="showError">
          <div class="error-content">
            <div class="error-icon">❌</div>
            <h3>Oops! Something went wrong</h3>
            <p>Please try again or contact me directly via email.</p>
            <button (click)="hideError()" class="btn-secondary">Try Again</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      min-height: 100vh;
      padding: 120px 30px 60px;
      background: var(--bg-primary);
      position: relative;
      transition: background-color 0.3s ease;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .page-header {
      text-align: center;
      margin-bottom: 50px;
    }

    .page-title {
      font-size: 3rem;
      font-weight: 700;
      color: var(--text-heading);
      margin-bottom: 15px;
      transition: color 0.3s ease;
    }

    .page-subtitle {
      font-size: 1.25rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
      transition: color 0.3s ease;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      margin-bottom: 40px;
    }

    .contact-form-section {
      background: var(--card-bg);
      padding: 40px;
      border-radius: 15px;
      box-shadow: var(--shadow-md);
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-group label {
      font-weight: 600;
      color: var(--text-primary);
      font-size: 0.95rem;
      transition: color 0.3s ease;
    }

    .form-input,
    .form-textarea {
      padding: 15px;
      border: 2px solid var(--border-color);
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;
      font-family: inherit;
      background: var(--bg-primary);
      color: var(--text-primary);
    }

    .form-input:focus,
    .form-textarea:focus {
      outline: none;
      border-color: #667eea;
    }

    :host-context(.dark-mode) .form-input:focus,
    :host-context(.dark-mode) .form-textarea:focus {
      border-color: #a78bfa;
    }

    .form-textarea {
      resize: vertical;
      min-height: 120px;
    }

    .submit-btn {
      background: #2563eb;
      color: white;
      padding: 15px 30px;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      align-self: flex-start;
    }

    .submit-btn:hover:not(:disabled) {
      background: #1d4ed8;
      transform: translateY(-2px);
    }

    .submit-btn:disabled {
      background: #9ca3af;
      cursor: not-allowed;
      transform: none;
    }

    .contact-info-section {
      display: flex;
      align-items: center;
    }

    .contact-info {
      background: var(--card-bg);
      padding: 40px;
      border-radius: 15px;
      box-shadow: var(--shadow-md);
      width: 100%;
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }

    .contact-info h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-heading);
      margin-bottom: 15px;
      transition: color 0.3s ease;
    }

    .contact-info > p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 30px;
      transition: color 0.3s ease;
    }

    .contact-methods {
      margin-bottom: 30px;
    }

    .contact-method {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
      padding: 15px;
      background: rgba(102, 126, 234, 0.05);
      border-radius: 12px;
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
      border: 1px solid var(--border-color);
    }

    :host-context(.dark-mode) .contact-method {
      background: rgba(167, 139, 250, 0.1);
    }

    .contact-method:hover {
      background: rgba(102, 126, 234, 0.1);
      transform: translateX(5px);
    }

    :host-context(.dark-mode) .contact-method:hover {
      background: rgba(167, 139, 250, 0.15);
    }

    .contact-icon {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: white;
      border-radius: 12px;
      flex-shrink: 0;
    }

    .contact-details h4 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-heading);
      margin: 0 0 5px 0;
      transition: color 0.3s ease;
    }

    .contact-details p {
      color: var(--text-secondary);
      margin: 0;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .response-time {
      padding-top: 20px;
      border-top: 1px solid var(--border-color);
      transition: border-color 0.3s ease;
    }

    .response-time h4 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-heading);
      margin: 0 0 5px 0;
      transition: color 0.3s ease;
    }

    .response-time p {
      color: var(--text-secondary);
      margin: 0;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .success-message,
    .error-message {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--card-bg);
      padding: 40px;
      border-radius: 15px;
      box-shadow: var(--shadow-lg);
      text-align: center;
      z-index: 1000;
      max-width: 400px;
      width: 90%;
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }

    .success-content,
    .error-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }

    .success-icon,
    .error-icon {
      font-size: 3rem;
    }

    .success-content h3,
    .error-content h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0;
    }

    .success-content h3 {
      color: #059669;
    }

    .error-content h3 {
      color: #dc2626;
    }

    .success-content p,
    .error-content p {
      color: var(--text-secondary);
      margin: 0;
      transition: color 0.3s ease;
    }

    .btn-secondary {
      background: #6b7280;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 980px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .btn-secondary:hover {
      background: #4b5563;
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 2.5rem;
      }

      .contact-content {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .contact-form-section,
      .contact-info {
        padding: 25px;
      }

      .success-message,
      .error-message {
        padding: 30px 20px;
      }
    }
  `]
})
export class ContactComponent {
  message: ContactMessage = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting: boolean = false;
  showSuccess: boolean = false;
  showError: boolean = false;

  constructor(private contactService: ContactService) {}

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.showError = false;

    this.contactService.sendMessage(this.message).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.showSuccess = true;
        this.resetForm();
      },
      error: (error) => {
        console.error('Error sending message:', error);
        this.isSubmitting = false;
        this.showError = true;
      }
    });
  }

  resetForm() {
    this.message = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.showSuccess = false;
  }

  hideError() {
    this.showError = false;
  }
}
