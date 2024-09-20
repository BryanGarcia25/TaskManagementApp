import { Component, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatIconModule, MatButtonModule, MatDividerModule, RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  
  userForm!: FormGroup;

  user: User = {
    username: '',
    email: '',
    password: ''
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
      this.userForm = this.formBuilder.group({
        username: [this.user.username, Validators.required],
        email: [this.user.email, Validators.required],
        password: [this.user.password, Validators.required],
      })
  }

  onSubmitUserForm() {
    if (this.userForm.valid) {
      const userValues = this.userForm.value as User;
      this.authService.registerUser(userValues).subscribe({
        next: (response) => {
          alert('El usuario se registro con éxito')
          this.router.navigate(['/login'])
        },
        error: (error) => {
          alert("Al parecer se genero un error al capturar sus datos")
          console.log(error);
        }
      });
    }
  }
  
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  protected readonly value = signal('');

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }
}
