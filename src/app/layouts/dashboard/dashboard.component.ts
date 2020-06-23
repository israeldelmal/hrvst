import { Component, OnInit } from "@angular/core";
import { NavRouting } from '../../routing/nav.routing';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardLayout implements OnInit {
    navRouting = NavRouting;
    currentUrl: any;
    activeNav: boolean;

    constructor(
        private router: Router
    ) {
        router.events.pipe(
            filter(ev => ev instanceof NavigationEnd)
        ).subscribe((ev: any) => {
            this.currentUrl = ev.url;
        });
    }

    ngOnInit() {}

    signOut() {
        sessionStorage.clear();
        this.router.navigate(['/sign-in']);
    }

    toggleNav(status?: boolean) {
        this.activeNav = status ? status : !this.activeNav;
    }
}