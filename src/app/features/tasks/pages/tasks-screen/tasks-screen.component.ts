import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
import { TaskService } from '../../services/task.service';
import { Task } from '../../model/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks-screen',
  providers: [provideNativeDateAdapter()],
  standalone: true,
  imports: [
    CommonModule,
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
export class TasksScreenComponent implements OnInit {
  public titleCard: string = "Task Management";
  taskList: Task[] = []
  
  constructor(private authService: AuthService, private taskService: TaskService, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe({
      next: (response) => {
        this.taskList = response;
        this.cdr.detectChanges()
      },
      error: (error) => {
        console.error(`Error en el servidor ${error}`)
      }
    });
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }

  deleteTask(id: any) {
    this.taskService.deleteTask(id).subscribe({
      next: (response) => {
        alert(response.message)
      },
      error: (error) => {
        alert(error.message)
      }
    });
  }
}
