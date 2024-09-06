import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-management',
  standalone: true,
  imports: [RouterModule, MatCard, MatCardContent, MatIcon, MatDivider],
  templateUrl: './task-management.component.html',
  styleUrl: './task-management.component.css'
})
export class TaskManagementComponent {
  public titleCard: string = "Task Management";
}
