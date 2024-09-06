import { Routes } from '@angular/router';
import { TaskManagementComponent } from './features/task-management/task-management.component';
import { AuthComponent } from './features/auth/auth.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        title: 'Autenticación'
    },
    {
        path: 'main',
        component: TaskManagementComponent,
        title: 'Task Management'
    }
];
