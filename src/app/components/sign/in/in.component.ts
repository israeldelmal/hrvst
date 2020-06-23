import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'sign-in',
    templateUrl: './in.component.html',
    styleUrls: ['./in.component.scss']
})
export class InComponent implements OnInit {
    formSignIn: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.formSignIn = this.formBuilder.group({
            email: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(8)
            ])
        });
    }

    signIn() {
        let params = {
            auth: true
        }

        sessionStorage.setItem('auth', JSON.stringify(params));
        
        this.router.navigate(['/']);
    }
}