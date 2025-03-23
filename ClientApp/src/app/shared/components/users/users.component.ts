import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: any;
  private http = inject(HttpClient);

  ngOnInit() {
    this.http.get('https://localhost:8000/api/users').subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('success!');
      }
    });
  }  
}
