import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { NavbarItem } from '@core/models';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavItemComponent {

  @Input()
  item: NavbarItem;
}
