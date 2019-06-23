import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  private email: string;
  private password: string;
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

}
