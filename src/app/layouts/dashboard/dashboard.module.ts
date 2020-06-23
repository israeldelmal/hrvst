import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardLayout } from './dashboard.component';
import { MaterialModule } from 'src/app/material/material.module';

const routes: Routes = [
    {
        path: '',
        component: DashboardLayout
    }
]

@NgModule({
    declarations: [
        DashboardLayout
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class DashboardModule {}