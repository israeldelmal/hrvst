import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { ActivitiesComponent } from './activities.component';
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
    {
        path: '',
        component: ActivitiesComponent
    }
]

@NgModule({
    declarations: [
        ActivitiesComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule
    ]
})
export class ActivitiesModule {}