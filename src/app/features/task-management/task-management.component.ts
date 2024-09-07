import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-task-management',
  standalone: true,
  imports: [RouterModule, MatCard, MatCardContent, MatIcon, MatDivider, MatCheckboxModule],
  templateUrl: './task-management.component.html',
  styleUrl: './task-management.component.css'
})
export class TaskManagementComponent {
  public titleCard: string = "Task Management";
  items = [1,2,3,4,5,6]
}
