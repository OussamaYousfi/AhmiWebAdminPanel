import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './page-login/page-login.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { routing } from './authentication.routing';
import { PageForgotPasswordComponent } from './page-forgot-password/page-forgot-password.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [PageLoginComponent, AuthenticationComponent, PageForgotPasswordComponent],
	imports: [
		CommonModule,
		routing,
        RouterModule,
        FormsModule
	]
})
export class AuthenticationModule { }
