import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkillService } from '../../services/skill.service';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="skills-container">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title">Technical Skills</h1>
          <p class="page-subtitle">My expertise across different technologies and tools</p>
        </div>

        <!-- Filter Section -->
        <div class="filter-section">
          <div class="filter-tabs">
            <button 
              *ngFor="let skillType of skillTypes" 
              [class.active]="selectedSkillType === skillType"
              (click)="filterByType(skillType)"
              class="filter-tab">
              {{ skillType }}
            </button>
            <button 
              [class.active]="selectedSkillType === 'All'"
              (click)="filterByType('All')"
              class="filter-tab">
              All Skills
            </button>
          </div>
        </div>

        <!-- Skills Grid -->
        <div class="skills-grid" *ngIf="filteredSkills.length > 0; else noSkills">
          <div class="skill-card" *ngFor="let skill of filteredSkills">
            <div class="skill-header">
              <h3 class="skill-name">{{ skill.name }}</h3>
              <span class="skill-level">{{ skill.proficiencyLevel }}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" [style.width.%]="skill.proficiencyLevel"></div>
            </div>
            <div class="skill-meta">
              <span class="skill-type">{{ skill.skillType }}</span>
            </div>
          </div>
        </div>

        <ng-template #noSkills>
          <div class="no-skills">
            <div class="no-skills-content">
              <h3>No skills found</h3>
              <p>Skills will appear here once they're added</p>
            </div>
          </div>
        </ng-template>

        <!-- Loading State -->
        <div class="loading" *ngIf="isLoading">
          <div class="loading-spinner"></div>
          <p>Loading skills...</p>
        </div>

        <!-- Skills Summary -->
        <div class="skills-summary" *ngIf="skills.length > 0 && !isLoading">
          <h2>Skills Summary</h2>
          <div class="summary-grid">
            <div class="summary-item" *ngFor="let skillType of skillTypes">
              <div class="summary-header">
                <h3>{{ skillType }}</h3>
                <span class="skill-count">{{ getSkillsByType(skillType).length }} skills</span>
              </div>
              <div class="summary-skills">
                <span class="skill-tag" *ngFor="let skill of getSkillsByType(skillType)">
                  {{ skill.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .skills-container {
      min-height: 100vh;
      padding: 120px 30px 60px;
      background: var(--bg-primary);
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
    }

    .filter-section {
      margin-bottom: 40px;
    }

    .filter-tabs {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
    }

    .filter-tab {
      padding: 10px 20px;
      border: 2px solid var(--border-color);
      background: var(--card-bg);
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;
      color: var(--text-primary);
    }

    .filter-tab:hover {
      border-color: #667eea;
      color: #667eea;
    }

    .filter-tab.active {
      background: #667eea;
      border-color: #667eea;
      color: white;
    }

    :host-context(.dark-mode) .filter-tab:hover {
      border-color: #a78bfa;
      color: #a78bfa;
    }

    :host-context(.dark-mode) .filter-tab.active {
      background: #a78bfa;
      border-color: #a78bfa;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
      margin-bottom: 60px;
    }

    .skill-card {
      background: var(--card-bg);
      padding: 25px;
      border-radius: 12px;
      box-shadow: var(--shadow-sm);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .skill-card:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
    }

    :host-context(.dark-mode) .skill-card {
      background: rgba(30, 41, 59, 0.5);
    }

    .skill-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }

    .skill-name {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-heading);
      margin: 0;
      transition: color 0.3s ease;
    }

    .skill-level {
      font-size: 1.1rem;
      font-weight: 700;
      color: #667eea;
    }

    :host-context(.dark-mode) .skill-level {
      color: #a78bfa;
    }

    .skill-bar {
      height: 8px;
      background: var(--border-color);
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 15px;
      transition: background 0.3s ease;
    }

    .skill-progress {
      height: 100%;
      background: linear-gradient(90deg, #667eea, #764ba2);
      transition: width 0.8s ease;
    }

    :host-context(.dark-mode) .skill-progress {
      background: linear-gradient(90deg, #a78bfa, #ec4899);
    }

    .skill-meta {
      text-align: right;
    }

    .skill-type {
      font-size: 0.9rem;
      color: var(--text-secondary);
      background: var(--bg-secondary);
      padding: 4px 12px;
      border-radius: 12px;
      transition: all 0.3s ease;
    }

    .no-skills {
      text-align: center;
      padding: 80px 20px;
    }

    .no-skills-content h3 {
      font-size: 1.5rem;
      color: var(--text-heading);
      margin-bottom: 10px;
      transition: color 0.3s ease;
    }

    .no-skills-content p {
      color: var(--text-secondary);
      transition: color 0.3s ease;
    }

    .loading {
      text-align: center;
      padding: 40px;
    }

    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 4px solid var(--border-color);
      border-top: 4px solid #667eea;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 20px;
    }

    :host-context(.dark-mode) .loading-spinner {
      border-top-color: #a78bfa;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .skills-summary {
      background: white;
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .skills-summary h2 {
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 30px;
    }

    .summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 25px;
    }

    .summary-item {
      border: 1px solid #e5e7eb;
      border-radius: 10px;
      padding: 20px;
    }

    .summary-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }

    .summary-header h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1f2937;
      margin: 0;
    }

    .skill-count {
      font-size: 0.9rem;
      color: #6b7280;
      background: #f3f4f6;
      padding: 4px 8px;
      border-radius: 8px;
    }

    .summary-skills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .skill-tag {
      background: #2563eb;
      color: white;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.85rem;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 2.5rem;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }

      .filter-tabs {
        justify-content: flex-start;
        overflow-x: auto;
        padding-bottom: 10px;
      }

      .summary-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  filteredSkills: Skill[] = [];
  skillTypes: string[] = [];
  selectedSkillType: string = 'All';
  isLoading: boolean = true;

  constructor(private skillService: SkillService) {}

  ngOnInit() {
    this.loadSkills();
  }

  loadSkills() {
    this.isLoading = true;
    this.skillService.getAllSkills().subscribe({
      next: (skills) => {
        this.skills = skills.filter(s => s.active !== false);
        this.filteredSkills = [...this.skills];
  this.skillTypes = [...new Set(this.skills.map(s => s.skillType).filter((type): type is string => typeof type === 'string'))];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading skills:', error);
        this.isLoading = false;
      }
    });
  }

  filterByType(skillType: string) {
    this.selectedSkillType = skillType;
    if (skillType === 'All') {
      this.filteredSkills = [...this.skills];
    } else {
      this.filteredSkills = this.skills.filter(skill => skill.skillType === skillType);
    }
  }

  getSkillsByType(skillType: string): Skill[] {
    return this.skills.filter(skill => skill.skillType === skillType);
  }
}
