import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { UserBusinessState } from '@feature/shared/states';
import { UserBusiness } from '@feature/shared/models';

@Component({
  selector: 'app-business-page',
  templateUrl: './business-page.component.html',
  styleUrls: ['./business-page.component.scss']
})
export class BusinessPageComponent implements OnInit {

  @Select(UserBusinessState.userBusiness)
  business$: Observable<UserBusiness>;

  constructor() { }

  ngOnInit() {
  }
}
