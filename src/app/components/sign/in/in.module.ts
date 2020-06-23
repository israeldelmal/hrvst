import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { InComponent } from './in.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: InComponent
    }
]

@NgModule({
    declarations: [
        InComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatRippleModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class InModule {}