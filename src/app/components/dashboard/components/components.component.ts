import { Component } from "@angular/core";
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PAYROLL_DATA } from '../activities/activities.component';
import { EmployeeDialog } from './dialogs/employee/employee.dialog';

@Component({
    selector: 'components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {
    payRollColumns: string[] = ['employee', 'area', 'name', 'phone', 'detail', 'salary', 'balance'];
    payRollData = new MatTableDataSource(PAYROLL_DATA);

    constructor(
        private dialog: MatDialog
    ) {}

    addEmployee(): void {
        this.dialog.open(EmployeeDialog);
    }

    applyFilter(filterValue: string) {
        this.payRollData.filter = filterValue.trim().toLowerCase();
    }
}