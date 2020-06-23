import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignLaout } from '../layouts/sign/sign.layout';
import { AuthGuard } from '../components/sign/in/in.guard';
import { DashboardLayout } from '../layouts/dashboard/dashboard.component';
import { AppRoutes } from './routes.routing';

const routes: Routes = [
    {
        path: AppRoutes.signIn.path,
        component: SignLaout,
        loadChildren: '../components/sign/in/in.module#InModule'
    },
    {
        path: AppRoutes.home.path,
        component: DashboardLayout,
        canActivate: [AuthGuard],
        children: [
            {
                path: AppRoutes.home.path,
                loadChildren: '../components/dashboard/home/home.module#HomeModule'
            },
            {
                path: AppRoutes.employees.path,
                loadChildren: '../components/dashboard/employees/employees.module#EmployeesModule'
            },
            {
                path: AppRoutes.activities.path,
                loadChildren: '../components/dashboard/activities/activities.module#ActivitiesModule'
            },
            {
                path: AppRoutes.components.path,
                loadChildren: '../components/dashboard/components/components.module#ComponentsModule'
            },
            {
                path: AppRoutes.settings.path,
                loadChildren: '../components/dashboard/settings/settings.module#SettingsModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }