import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { UserBusiness } from '@feature/shared/models';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessDetailsComponent {

  @Input()
  business: UserBusiness;
}
