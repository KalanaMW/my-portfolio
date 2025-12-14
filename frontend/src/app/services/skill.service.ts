import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiUrl = 'http://localhost:8080/api/skills';

  // Mock skills data from CV
  private mockSkills: Skill[] = [
    // Programming Languages
    { id: 1, name: 'C', proficiencyLevel: 85, skillType: 'Programming Languages', active: true },
    { id: 2, name: 'C++', proficiencyLevel: 85, skillType: 'Programming Languages', active: true },
    { id: 3, name: 'JavaScript', proficiencyLevel: 95, skillType: 'Programming Languages', active: true },
    { id: 4, name: 'TypeScript', proficiencyLevel: 90, skillType: 'Programming Languages', active: true },
    { id: 5, name: 'PHP', proficiencyLevel: 85, skillType: 'Programming Languages', active: true },
    { id: 6, name: 'Java', proficiencyLevel: 88, skillType: 'Programming Languages', active: true },
    
    // Web Development
    { id: 7, name: 'Tailwind CSS', proficiencyLevel: 95, skillType: 'Web Development', active: true },
    { id: 8, name: 'Next.js', proficiencyLevel: 92, skillType: 'Web Development', active: true },
    { id: 9, name: 'React.js', proficiencyLevel: 90, skillType: 'Web Development', active: true },
    { id: 10, name: 'Angular', proficiencyLevel: 88, skillType: 'Web Development', active: true },
    { id: 11, name: 'Inertia.js', proficiencyLevel: 85, skillType: 'Web Development', active: true },
    { id: 12, name: 'ASP.NET', proficiencyLevel: 87, skillType: 'Web Development', active: true },
    { id: 13, name: 'Spring Boot', proficiencyLevel: 85, skillType: 'Web Development', active: true },
    { id: 14, name: 'Express.js', proficiencyLevel: 90, skillType: 'Web Development', active: true },
    { id: 15, name: 'Laravel', proficiencyLevel: 88, skillType: 'Web Development', active: true },
    
    // Database
    { id: 16, name: 'MongoDB', proficiencyLevel: 88, skillType: 'Database', active: true },
    { id: 17, name: 'MySQL', proficiencyLevel: 90, skillType: 'Database', active: true },
    { id: 18, name: 'MSSQL', proficiencyLevel: 87, skillType: 'Database', active: true },
    { id: 19, name: 'PostgreSQL', proficiencyLevel: 85, skillType: 'Database', active: true },
    
    // Version Control
    { id: 20, name: 'Git', proficiencyLevel: 92, skillType: 'Version Control', active: true },
    
    // Cloud Services
    { id: 21, name: 'Cloudinary', proficiencyLevel: 85, skillType: 'Cloud Services', active: true },
    { id: 22, name: 'Stripe', proficiencyLevel: 88, skillType: 'Cloud Services', active: true },
    { id: 23, name: 'Firebase', proficiencyLevel: 85, skillType: 'Cloud Services', active: true },
    
    // Design Tools
    { id: 24, name: 'Figma', proficiencyLevel: 90, skillType: 'Design Tools', active: true },
    { id: 25, name: 'Blender', proficiencyLevel: 75, skillType: 'Design Tools', active: true },
    { id: 26, name: 'Canva', proficiencyLevel: 85, skillType: 'Design Tools', active: true },
    { id: 27, name: 'GIMP', proficiencyLevel: 80, skillType: 'Design Tools', active: true },
    
    // Operating Systems
    { id: 28, name: 'Windows', proficiencyLevel: 95, skillType: 'Operating Systems', active: true },
    { id: 29, name: 'macOS', proficiencyLevel: 92, skillType: 'Operating Systems', active: true },
    { id: 30, name: 'Linux', proficiencyLevel: 85, skillType: 'Operating Systems', active: true },
    
    // Project Management
    { id: 31, name: 'GitHub', proficiencyLevel: 92, skillType: 'Project Management', active: true }
  ];

  constructor(private http: HttpClient) { }

  getAllSkills(): Observable<Skill[]> {
    // Try to fetch from backend, fallback to mock data if it fails
    return this.http.get<Skill[]>(this.apiUrl).pipe(
      catchError(() => of(this.mockSkills))
    );
  }

  getSkillById(id: number): Observable<Skill> {
    return this.http.get<Skill>(`${this.apiUrl}/${id}`);
  }

  getSkillsByType(skillType: string): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/type/${skillType}`);
  }

  createSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(this.apiUrl, skill);
  }

  updateSkill(id: number, skill: Skill): Observable<Skill> {
    return this.http.put<Skill>(`${this.apiUrl}/${id}`, skill);
  }

  deleteSkill(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  searchSkillsByName(name: string): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/search?name=${name}`);
  }
}
