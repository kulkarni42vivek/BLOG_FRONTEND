import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
    block1: string = `
<div class="grid grid-nogutter surface-section text-800">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span class="block text-6xl font-bold mb-1">Create the screens your</span>
            <div class="text-6xl text-primary font-bold mb-3">visitors deserve to see</div>
            <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <button pButton pRipple label="Learn More" type="button" class="mr-3 p-button-raised"></button>
            <button pButton pRipple label="Live Demo" type="button" class="p-button-outlined"></button>
        </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
        <img src="assets/demo/images/blocks/hero/hero-1.png" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
    </div>
</div>`;

    constructor(private router: Router) {}

    redirectToRegister() {
        this.router.navigate(['./register']);
    }

    redirectToLogin() {
        this.router.navigate(['./login']);
    }
}
