import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignLaout } from './layouts/sign/sign.layout';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
// NG2 Charts
import { ChartsModule } from 'ng2-charts';
import { EmployeeDialog } from './components/dashboard/components/dialogs/employee/employee.dialog';
import { MaterialModule } from './material/material.module';

@NgModule({
    declarations: [
        AppComponent,
        SignLaout,
        // Dialogs
        EmployeeDialog
    ],
    entryComponents: [
        EmployeeDialog
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        DashboardModule,
        ChartsModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}