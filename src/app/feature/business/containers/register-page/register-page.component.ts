import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';


import { UserBusinessState } from '@feature/shared/states';
import { UserBusiness } from '@feature/shared/models';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  @Select(UserBusinessState.userBusiness)
  business$: Observable<UserBusiness>;

  constructor(private store: Store, private router: Router) {
  }

  ngOnInit() {
  }
}
