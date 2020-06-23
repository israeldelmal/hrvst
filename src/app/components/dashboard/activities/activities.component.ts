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

export const PAYROLL_DATA: PayrollInterface[] = [
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
    selector: 'activities',
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
    payRollColumns: string[] = ['employee', 'area', 'name', 'phone', 'detail', 'salary', 'balance'];
    payRollData = new MatTableDataSource(PAYROLL_DATA);

    // Charts fake data
    chartOptions = {
        responsive: true
    };

    chartData = [
        { data: [18, 5, 15, 8, 14, 0], label: 'Opción A', backgroundColor: 'transparent', borderColor: '#18531c', pointBackgroundColor: '#18531c', pointBorderColor: '#18531c', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: '#18531c' },
        { data: [0, 15, 3, 20, 8, 3], label: 'Opción B', backgroundColor: 'transparent', borderColor: '#0c290e', pointBackgroundColor: '#0c290e', pointBorderColor: '#0c290e', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: '#0c290e' },
        { data: [7, 12, 15, 3, 20, 13], label: 'Opción C', backgroundColor: 'transparent', borderColor: '#8ba98d', pointBackgroundColor: '#8ba98d', pointBorderColor: '#8ba98d', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: '#8ba98d' }
    ];

    chartLabels = [1, 2, 3, 4, 5, 6];
    
    applyFilter(filterValue: string) {
        this.payRollData.filter = filterValue.trim().toLowerCase();
    }
}