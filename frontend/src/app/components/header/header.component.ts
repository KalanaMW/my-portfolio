import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <nav class="navbar">
        <div class="nav-brand">
          <a routerLink="/" class="brand-link" (click)="scrollTo('home')">
            <img src="assets/logo.png" alt="KW Logo" class="brand-logo">
            <span class="brand-name">Kalana Warnakulasooriya</span>
          </a>
        </div>
        <div class="nav-menu" [class.active]="isMenuOpen">
          <a href="#home" class="nav-link" (click)="scrollTo('home')">Home</a>
          <a href="#about" class="nav-link" (click)="scrollTo('about')">About</a>
          <a href="#education" class="nav-link" (click)="scrollTo('education')">Education</a>
          <a href="#projects" class="nav-link" (click)="scrollTo('projects')">Projects</a>
          <a href="#skills" class="nav-link" (click)="scrollTo('skills')">Skills</a>
          <a href="#awards" class="nav-link" (click)="scrollTo('awards')">Awards</a>
          <a href="#activities" class="nav-link" (click)="scrollTo('activities')">Activities</a>
          <a href="#contact" class="nav-link" (click)="scrollTo('contact')">Contact</a>
          <button class="theme-toggle" (click)="toggleTheme()" [attr.aria-label]="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'">
            <svg *ngIf="!isDarkMode" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <svg *ngIf="isDarkMode" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>
        </div>
        <div class="nav-toggle" (click)="toggleMenu()">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(40px) saturate(180%);
      -webkit-backdrop-filter: blur(40px) saturate(180%);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      transition: all 0.3s ease;
      border-bottom: 1px solid rgba(var(--charcoal-rgb), 0.08);
      box-shadow: 0 2px 20px rgba(var(--charcoal-rgb), 0.05);
    }

    .header.scrolled {
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(50px) saturate(180%);
      -webkit-backdrop-filter: blur(50px) saturate(180%);
      box-shadow: 0 4px 30px rgba(var(--charcoal-rgb), 0.1);
    }

    :host-context(.dark-mode) .header {
      background: rgba(var(--charcoal-rgb), 0.7);
      border-bottom: 1px solid rgba(var(--cream-rgb), 0.12);
    }

    :host-context(.dark-mode) .header.scrolled {
      background: rgba(var(--charcoal-rgb), 0.85);
      box-shadow: 0 4px 30px rgba(var(--charcoal-rgb), 0.6);
    }

    .navbar {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 75px;
    }

    .brand-link {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      transition: all 0.3s ease;
      outline: none;
    }

    .brand-link:focus {
      outline: none;
    }

    .brand-link:hover {
      transform: translateY(-2px);
    }

    .brand-logo {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(var(--charcoal-rgb), 0.18);
      transition: transform 0.3s ease;
    }

    .brand-logo:hover {
      transform: scale(1.05);
    }

    .brand-name {
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--palette-orange);
      transition: color 0.3s ease;
    }

    .brand-name:hover {
      color: rgba(var(--orange-rgb), 0.85);
    }

    :host-context(.dark-mode) .brand-name {
      color: var(--palette-orange);
    }

    :host-context(.dark-mode) .brand-name:hover {
      color: rgba(var(--orange-rgb), 0.9);
    }

    .nav-menu {
      display: flex;
      gap: 35px;
      align-items: center;
    }

    .nav-link {
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.3s ease;
      position: relative;
      padding: 8px 0;
      border: none;
      outline: none;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--accent);
      transition: width 0.3s ease;
    }

    .nav-link:hover::after {
      width: 100%;
    }

    .nav-link.active {
      color: var(--accent);
    }

    .nav-link.active::after {
      width: 100%;
    }

    :host-context(.dark-mode) .nav-link {
      color: var(--text-secondary);
    }

    :host-context(.dark-mode) .nav-link:hover,
    :host-context(.dark-mode) .nav-link.active {
      color: var(--accent);
    }

    :host-context(.dark-mode) .nav-link::after {
      background: var(--accent);
    }

    .theme-toggle {
      background: rgba(var(--orange-rgb), 0.12);
      border: none;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 0;
      margin-left: 10px;
    }

    .theme-toggle:hover {
      background: rgba(var(--orange-rgb), 0.18);
      transform: rotate(20deg) scale(1.05);
    }

    .theme-toggle svg {
      width: 22px;
      height: 22px;
      transition: transform 0.3s ease;
    }

    :host-context(.dark-mode) .theme-toggle {
      background: rgba(var(--orange-rgb), 0.14);
    }

    :host-context(.dark-mode) .theme-toggle:hover {
      background: rgba(var(--orange-rgb), 0.2);
    }

    .nav-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
      padding: 5px;
    }

    .bar {
      width: 28px;
      height: 3px;
      background: var(--accent);
      margin: 4px 0;
      transition: 0.3s;
      border-radius: 2px;
    }

    @media (max-width: 968px) {
      .brand-name {
        display: none;
      }

      .nav-menu {
        position: fixed;
        left: -100%;
        top: 75px;
        flex-direction: column;
        background: rgba(var(--white-rgb), 0.98);
        backdrop-filter: blur(10px);
        width: 100%;
        text-align: center;
        transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        box-shadow: 0 10px 40px rgba(var(--charcoal-rgb), 0.14);
        padding: 30px 0;
        gap: 25px;
      }

      :host-context(.dark-mode) .nav-menu {
        background: rgba(var(--charcoal-rgb), 0.98);
      }

      .nav-menu.active {
        left: 0;
      }

      .nav-toggle {
        display: flex;
      }

      .nav-link {
        font-size: 1.1rem;
        padding: 12px 0;
      }
    }

    @media (max-width: 480px) {
      .navbar {
        padding: 0 20px;
      }

      .brand-logo {
        width: 45px;
        height: 45px;
      }

      .theme-toggle {
        width: 38px;
        height: 38px;
      }

      .theme-toggle svg {
        width: 20px;
        height: 20px;
      }
    }
  `]
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  isScrolled = false;
  isDarkMode = false;
  private themeSubscription?: any;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeSubscription = this.themeService.darkMode$.subscribe(
      isDark => this.isDarkMode = isDark
    );
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollTo(sectionId: string) {
    this.closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
