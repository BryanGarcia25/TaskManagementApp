import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-management',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [RouterModule, MatCard, MatCardContent, MatIcon, MatDivider, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule],
  templateUrl: './task-management.component.html',
  styleUrl: './task-management.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskManagementComponent {
  public titleCard: string = "Task Management";
  items = [1,2,3,4,5,6]
}
