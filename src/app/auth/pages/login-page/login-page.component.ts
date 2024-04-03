import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    const email = 'sergiobg.isc@gmail.com';
    const password = '123456';

    this.authService.login(email, password).subscribe((user) => {
      this.router.navigate(['/']);
    });
  }
}
