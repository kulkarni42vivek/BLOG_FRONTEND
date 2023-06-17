import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { BlockViewerComponent } from './block-viewer/block-viewer.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ChangePasswordComponent,
        LandingComponent,
        BlockViewerComponent,
    ],
    imports: [
        CommonModule,
        LandingRoutingModule,
        CommonModule,
        ButtonModule,
        RippleModule,
        ChipModule,
        CheckboxModule,
        FormsModule,
        InputTextModule,
        PasswordModule,
        TooltipModule,
    ],
    exports: [BlockViewerComponent],
})
export class LandingModule {}
