import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

import { Logout } from '@auth/actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {

  constructor(private store: Store, private router: Router) { }

  navigate(path: string): void {
    this.router.navigateByUrl(path);
  }

  signout(): void {
    this.store.dispatch(new Logout());
  }
}
