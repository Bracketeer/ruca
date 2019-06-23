import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/authentication/auth.service';

@Component({
  selector: 'app-profile-badge',
  templateUrl: './profile-badge.component.html',
  styleUrls: ['./profile-badge.component.sass']
})
export class ProfileBadgeComponent implements OnInit {

  constructor (
    private auth: AuthService,
  ) {
  }
  
  ngOnInit() {

  }

}
