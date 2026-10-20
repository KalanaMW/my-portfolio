import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

type PhotoCategory = 'Workplace' | 'Field' | 'Milestone';
type HighlightIcon = 'erp' | 'fleet' | 'plantation' | 'reporting' | 'production';

interface ExperiencePhoto {
  title: string;
  /** Local asset path, or null to show the designed placeholder. */
  src: string | null;
  alt: string;
  caption: string;
  category: PhotoCategory;
  objectPosition?: string;
  objectFit?: 'cover' | 'contain';
  bg?: string;
}

interface ExperienceRole {
  title: string;
  type: string;
  start: string;
  startIso: string;
  end: string;
  endIso: string | null;
  current: boolean;
  summary: string;
}

interface ProjectHighlight {
  client: string;
  title: string;
  description: string;
  tags: string[];
  icon: HighlightIcon;
  /** Marks the primary project; rendered as a full-width featured card. */
  featured?: boolean;
  /** Tag to visually emphasise (e.g. field deployment). */
  emphasis?: string;
  /** Optional approved client logo path. Leave null to use the icon tile. */
  logo?: string | null;
  tier?: 'flagship' | 'deployment' | 'client';
  tierLabel?: string;
}

@Component({
  selector: 'app-professional-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.scss']
})
export class ProfessionalExperienceComponent implements AfterViewInit, OnDestroy {
  @ViewChild('lightbox') lightbox!: ElementRef<HTMLDialogElement>;

  readonly technologies = [
    '.NET',
    'C#',
    'Clean Architecture',
    'RabbitMQ',
    'Dapper',
    'SQL Server',
    'React',
    'REST APIs'
  ];

  readonly roles: ExperienceRole[] = [
    {
      title: 'Associate Software Engineer',
      type: 'Full-time',
      start: 'Aug 2026',
      startIso: '2026-08',
      end: 'Present',
      endIso: null,
      current: true,
      summary: 'Engineering core modules for the Lankem ERP system using Clean Architecture, .NET, RabbitMQ, Dapper, SQL Server, and React, alongside on-site client field deployments.'
    },
    {
      title: 'Software Engineer Intern',
      type: 'Internship',
      start: 'Feb 2026',
      startIso: '2026-02',
      end: 'Aug 2026',
      endIso: '2026-08',
      current: false,
      summary: 'Hands-on enterprise engineering across .NET backends, Dapper data access, RabbitMQ messaging, database development, bug fixing, and on-site plantation deployments.'
    }
  ];

  readonly responsibilities = [
    'Enterprise ERP architecture & development with .NET, C#, Clean Architecture and React',
    'Asynchronous event-driven messaging and message queues with RabbitMQ',
    'High-performance data access and database development with Dapper & SQL Server',
    'Direct on-site client engagement, field deployment, and user training on plantation estates',
    'Enterprise debugging, bug fixing, software testing, and production deployment'
  ];

  readonly flagshipProject: ProjectHighlight = {
    client: 'Lankem',
    title: 'Enterprise Resource Planning (ERP) System',
    description: "Engineered core modules for Lankem's enterprise ERP system across domain models, business logic, and UI. Architected with Clean Architecture, RabbitMQ message queues, high-performance Dapper data access, SQL Server, and React. Handled business logic, performance optimization, debugging, and production releases.",
    tags: ['.NET', 'Clean Architecture', 'RabbitMQ', 'Dapper', 'SQL Server', 'React'],
    icon: 'erp',
    featured: true,
    tier: 'flagship',
    tierLabel: 'Primary Enterprise Project'
  };

  readonly deploymentProject: ProjectHighlight = {
    client: 'SLSPC (Sri Lanka State Plantations Corporation)',
    title: 'Plantation Management & On-Site Field Deployment',
    description: 'On-site deployment and client training across plantation estates. Led live system onboarding and interactive training sessions for estate supervisors and managers on the mobile app and web dashboard to ensure smooth operational rollout.',
    tags: ['On-Site Deployment', 'Client Training', 'Plantation Operations', 'Mobile & Web Rollout'],
    emphasis: 'On-Site Deployment',
    icon: 'plantation',
    tier: 'deployment',
    tierLabel: 'Client Engagement & Deployment'
  };

  readonly secondaryProjects: ProjectHighlight[] = [
    {
      client: 'CTG',
      title: 'Fleet Management System',
      description: 'Contributed module development, vehicle tracking features, and bug fixes to an enterprise fleet management platform.',
      tags: ['Fleet operations', 'Web application', 'Bug fixing'],
      icon: 'fleet',
      tier: 'client'
    },
    {
      client: 'Ispahani',
      title: 'Production Systems',
      description: 'Maintained and enhanced software modules supporting factory operations and production workflows.',
      tags: ['Production', 'Factory operations', 'Enhancements'],
      icon: 'production',
      tier: 'client'
    },
    {
      client: 'Browns Agri',
      title: 'Reporting Systems',
      description: 'Developed and maintained reporting modules that transform agricultural operational data into business intelligence.',
      tags: ['Reporting', 'Business Intelligence', 'Data'],
      icon: 'reporting',
      tier: 'client'
    }
  ];

  readonly photos: ExperiencePhoto[] = [
    {
      title: 'SLSPC Field Deployment & Training',
      src: 'assets/professional-experience/slspc-field-deployment-training.jpg',
      alt: 'Training estate supervisors during SLSPC deployment',
      caption: 'Training estate supervisors on the mobile app and web dashboard',
      category: 'Field',
      objectPosition: 'center 26%'
    },
    {
      title: 'Agrithmics / Cultive8 HQ',
      src: 'assets/professional-experience/agrithmics-office.jpg',
      alt: 'Agrithmics (Cultive8) headquarters',
      caption: 'At the Agrithmics (Cultive8) office',
      category: 'Workplace',
      objectPosition: 'center 18%'
    },
    {
      title: 'SLSPC Plantation Site',
      src: 'assets/professional-experience/slspc-field-deployment-site.jpg',
      alt: 'On-site during SLSPC plantation deployment',
      caption: 'On-site during the SLSPC plantation rollout',
      category: 'Field',
      objectPosition: 'center 22%'
    }
  ];

  activeIndex: number | null = null;
  private previousOverflow = '';
  private triggerElement: HTMLElement | null = null;
  private scrollLocked = false;
  private touchStartX: number | null = null;
  private revealObserver?: IntersectionObserver;

  constructor(private host: ElementRef<HTMLElement>) {}

  get activePhoto(): ExperiencePhoto | null {
    return this.activeIndex === null ? null : this.photos[this.activeIndex];
  }

  get hasPhotos(): boolean {
    return this.photos.some(photo => photo.src !== null);
  }

  get allProjects(): ProjectHighlight[] {
    return [this.flagshipProject, this.deploymentProject, ...this.secondaryProjects];
  }

  get totalProjectsCount(): number {
    return this.allProjects.length;
  }

  ngAfterViewInit(): void {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || typeof IntersectionObserver === 'undefined') return;

    const root = this.host.nativeElement;
    root.classList.add('reveal-ready');
    this.revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          this.revealObserver?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    root.querySelectorAll('.reveal').forEach(el => this.revealObserver!.observe(el));
  }

  openPhoto(index: number): void {
    if (!this.photos[index]) return;
    this.triggerElement = document.activeElement as HTMLElement | null;
    this.activeIndex = index;
    this.lightbox.nativeElement.showModal();
    this.previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    this.scrollLocked = true;
  }

  closePhoto(): void {
    this.lightbox.nativeElement.close();
  }

  onDialogClosed(): void {
    this.activeIndex = null;
    this.restoreScroll();
    this.triggerElement?.focus({ preventScroll: true });
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === this.lightbox.nativeElement) this.closePhoto();
  }

  movePhoto(direction: number): void {
    if (this.activeIndex !== null) {
      this.activeIndex = (this.activeIndex + direction + this.photos.length) % this.photos.length;
    }
  }

  goToPhoto(index: number): void {
    if (this.photos[index]) this.activeIndex = index;
  }

  onGalleryKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      this.movePhoto(event.key === 'ArrowRight' ? 1 : -1);
    }
    // Native dialog handles Escape, focus trapping and background inertness.
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0]?.clientX ?? null;
  }

  onTouchEnd(event: TouchEvent): void {
    if (this.touchStartX === null) return;
    const deltaX = (event.changedTouches[0]?.clientX ?? this.touchStartX) - this.touchStartX;
    if (Math.abs(deltaX) > 50) this.movePhoto(deltaX < 0 ? 1 : -1);
    this.touchStartX = null;
  }

  onPhotoError(photo: ExperiencePhoto): void {
    photo.src = null;
  }

  onLogoError(highlight: ProjectHighlight): void {
    highlight.logo = null;
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
    if (this.lightbox?.nativeElement.open) this.lightbox.nativeElement.close();
    this.restoreScroll();
  }

  private restoreScroll(): void {
    if (this.scrollLocked) {
      document.body.style.overflow = this.previousOverflow;
      this.scrollLocked = false;
    }
  }
}
