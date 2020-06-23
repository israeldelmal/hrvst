import { Component } from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
}