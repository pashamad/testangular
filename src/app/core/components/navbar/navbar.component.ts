import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NavbarItem } from '@core/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  readonly navItems: NavbarItem[] = [
    { link: '/business', name: 'My business' },
    { link: '/places', name: 'core.menu.places' },
    { link: '/transactions', name: 'core.menu.transactions', disabled: true }
  ];
}
