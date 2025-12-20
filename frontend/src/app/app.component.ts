import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  template: `
    <div class="loading-screen" [class.hidden]="!isLoading">
      <div class="spinner-container">
        <div class="spinner"></div>
      </div>
      <p class="loading-text">{{ loadingMessage }}</p>
    </div>
    <div class="fireflies">
      <div class="firefly" *ngFor="let fly of fireflies" [style]="fly.style"></div>
    </div>
    <div class="app-container" [class.hidden]="isLoading">
      <app-header></app-header>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .loading-screen {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: var(--bg-primary);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      transition: opacity 0.5s ease, visibility 0.5s ease;
    }

    .loading-screen.hidden {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .spinner-container {
      position: relative;
      width: 80px;
      height: 80px;
    }

    .spinner {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 4px solid rgba(var(--charcoal-rgb), 0.12);
      border-top: 4px solid var(--accent);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    :host-context(.dark-mode) .spinner {
      border: 4px solid rgba(var(--cream-rgb), 0.14);
      border-top: 4px solid var(--accent);
    }

    .spinner::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      height: 60%;
      border: 3px solid rgba(var(--charcoal-rgb), 0.16);
      border-top: 3px solid var(--accent);
      border-radius: 50%;
      animation: spin 0.8s linear infinite reverse;
    }

    :host-context(.dark-mode) .spinner::before {
      border: 3px solid rgba(var(--cream-rgb), 0.2);
      border-top: 3px solid var(--accent);
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .loading-text {
      color: var(--text-heading);
      font-size: 1.2rem;
      font-weight: 600;
      margin-top: 25px;
      letter-spacing: 2px;
      animation: pulse 1.5s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.6; }
    }

    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      opacity: 1;
      transition: opacity 0.5s ease;
    }
    
    .app-container.hidden {
      opacity: 0;
    }
    
    .main-content {
      flex: 1;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  isLoading = true;
  loadingMessage = 'Getting things ready...';
  fireflies: { style: string }[] = [];
  
  private messages = [
    'Getting things ready...',
    'Nearly there...',
    'Almost done...',
    'Just a moment...'
  ];
  private messageIndex = 0;

  ngOnInit() {
    // Generate fireflies
    this.generateFireflies();
    
    // Cycle through messages
    const messageInterval = setInterval(() => {
      this.messageIndex = (this.messageIndex + 1) % this.messages.length;
      this.loadingMessage = this.messages[this.messageIndex];
    }, 400);

    // Hide loading screen after 1.5 seconds
    setTimeout(() => {
      clearInterval(messageInterval);
      this.isLoading = false;
    }, 1500);
  }

  private generateFireflies() {
    // Generate x / count number of fireflies with random positions and delays
    const count = 100;
    for (let i = 0; i < count; i++) {
      const left = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = 15 + Math.random() * 10;
      const tx = (Math.random() - 0.5) * 400;
      const size = 3 + Math.random() * 5;
      
      this.fireflies.push({
        style: `
          left: ${left}%;
          animation-delay: ${delay}s;
          animation-duration: ${duration}s;
          --tx: ${tx};
          width: ${size}px;
          height: ${size}px;
        `
      });
    }
  }
}
