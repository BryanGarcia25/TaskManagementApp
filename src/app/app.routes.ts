import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
import { TasksScreenComponent } from './features/tasks/pages/tasks-screen/tasks-screen.component';

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
        path: 'register',
        component: RegisterComponent,
        title: 'Registro de usuario'
    },
    {
        path: 'main',
        component: TasksScreenComponent,
        title: 'Task Management'
    }
];
