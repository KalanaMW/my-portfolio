import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactMessage } from '../models/contact-message.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // Use relative path for both dev and prod - works with Vercel dev and production
  private apiUrl = '/api/contact';

  constructor(private http: HttpClient) { }

  sendMessage(message: ContactMessage): Observable<any> {
    return this.http.post<any>(this.apiUrl, message);
  }

  getAllMessages(): Observable<ContactMessage[]> {
    return this.http.get<ContactMessage[]>(this.apiUrl);
  }

  getUnreadMessages(): Observable<ContactMessage[]> {
    return this.http.get<ContactMessage[]>(`${this.apiUrl}/unread`);
  }

  getUnreadMessageCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count`);
  }

  getMessageById(id: number): Observable<ContactMessage> {
    return this.http.get<ContactMessage>(`${this.apiUrl}/${id}`);
  }

  markAsRead(id: number): Observable<ContactMessage> {
    return this.http.put<ContactMessage>(`${this.apiUrl}/${id}/read`, {});
  }

  getMessagesByEmail(email: string): Observable<ContactMessage[]> {
    return this.http.get<ContactMessage[]>(`${this.apiUrl}/email/${email}`);
  }

  deleteMessage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
