import { OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OAuth2ClientLoginInfo } from '@shared/models/oauth2.models';
import { PageComponent } from '@shared/components/page.component';
import * as i0 from "@angular/core";
export declare class LoginComponent extends PageComponent implements OnInit {
    private authService;
    fb: UntypedFormBuilder;
    private router;
    passwordViolation: boolean;
    isLoading: boolean;
    loginFormGroup: import("@angular/forms").UntypedFormGroup;
    oauth2Clients: Array<OAuth2ClientLoginInfo>;
    constructor(authService: AuthService, fb: UntypedFormBuilder, router: Router);
    ngOnInit(): void;
    login(): void;
    getOAuth2Uri(oauth2Client: OAuth2ClientLoginInfo): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginComponent, "tb-login", never, {}, {}, never, never, false, never>;
}
