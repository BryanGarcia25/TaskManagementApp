import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-tasks-screen',
  providers: [provideNativeDateAdapter()],
  standalone: true,
  imports: [
    RouterModule,
    MatCard,
    MatCardContent,
    MatIcon,
    MatDivider,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './tasks-screen.component.html',
  styleUrl: './tasks-screen.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksScreenComponent {
  public titleCard: string = "Task Management";
  items = [1,2,3,4,5]

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
