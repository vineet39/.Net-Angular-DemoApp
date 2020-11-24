import { Component, OnInit } from '@angular/core';
import { AuthService } from '_services/auth.service';
import { AlertifyService } from '_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  photoUrl: string;
  constructor(public authService: AuthService, private alerify: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.authService.photoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Success');
      this.model = '';
      this.alerify.success('Success');
      this.router.navigate(['/members']);
    }, error => {
      console.log('Failure');
      console.log(this.model);
      this.alerify.error('Login Failed');
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.currentUser = null;
    this.authService.decodedToken = null;
    this.router.navigate(['']);
  }
}
