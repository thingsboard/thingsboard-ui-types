import { AuthService } from '@core/auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPasswordPolicy } from '@shared/models/settings.models';
import * as i0 from "@angular/core";
export declare class ResetPasswordComponent {
    private route;
    private router;
    private authService;
    private fb;
    isExpiredPassword: boolean;
    isLoading: boolean;
    resetPassword: FormGroup;
    passwordPolicy: UserPasswordPolicy;
    private resetToken;
    constructor(route: ActivatedRoute, router: Router, authService: AuthService, fb: FormBuilder);
    private buildResetPasswordForm;
    onResetPassword(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResetPasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ResetPasswordComponent, "tb-reset-password", never, {}, {}, never, never, false, never>;
}
