import { Routes } from '@angular/router';
import { TaskManagementComponent } from './features/task-management/task-management.component';
import { LoginComponent } from './features/auth/pages/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Inicio de Sesión'
    },
    {
        path: 'main',
        component: TaskManagementComponent,
        title: 'Task Management'
    }
];
