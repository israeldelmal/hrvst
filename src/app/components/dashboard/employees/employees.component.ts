import { Component } from "@angular/core";
import { MatTableDataSource } from '@angular/material';

export interface PayrollInterface {
    employee: string;
    area: string;
    name: string;
    phone: string;
    detail: string;
    salary: number;
    balance: number;
}

const PAYROLL_DATA: PayrollInterface[] = [
    {
        employee: 'T-001',
        area: 'Cats',
        name: 'Lexi Cunningham',
        phone: '(413) 248-6339',
        detail: 'NA',
        salary: 1500,
        balance: 1500
    },
    {
        employee: 'T-002',
        area: 'Fairy',
        name: 'Levi Cunningham',
        phone: '(487) 478-6391',
        detail: 'Detail info',
        salary: 1500,
        balance: 1500
    },
    {
        employee: 'T-003',
        area: 'Heroes',
        name: 'Lori Cunningham',
        phone: '(618) 800-4479',
        detail: 'NA',
        salary: 1500,
        balance: 1500
    },
    {
        employee: 'T-004',
        area: 'Duddley',
        name: 'Lowri Cunningham',
        phone: '(404) 915-4767',
        detail: 'NA',
        salary: 1500,
        balance: 1500
    },
    {
        employee: 'T-005',
        area: 'Teenage',
        name: 'Lili Cunningham',
        phone: '(382) 826-1443',
        detail: 'Detail info',
        salary: 1500,
        balance: 1500
    },
    {
        employee: 'T-006',
        area: 'Fairy',
        name: 'Lilli Cunningham',
        phone: '(661) 545-7264',
        detail: 'NA',
        salary: 1500,
        balance: 1500
    }
];

@Component({
    selector: 'employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
    payRollColumns: string[] = ['employee', 'area', 'name', 'phone', 'detail', 'salary', 'balance'];
    payRollData = new MatTableDataSource(PAYROLL_DATA);

    // Record Chart Data
    recordOptions = {
        responsive: true
    };

    recordData = [
        { data: [7, 5, 3, 6, 7, 5], label: 'Opción A', backgroundColor: '#18531c', borderColor: '#18531c' }
    ];

    recordLabels = ['Nombre #1', 'Nombre #2', 'Nombre #3', 'Nombre #4', 'Nombre #5', 'Nombre #6'];

    applyFilter(filterValue: string) {
        this.payRollData.filter = filterValue.trim().toLowerCase();
    }
}