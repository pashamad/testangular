import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { LoginState } from '@auth/states';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Select(LoginState.isAuthenticated)
  isAuthenticated$: Observable<boolean>;

  constructor(private translate: TranslateService) {

    this.translate.setDefaultLang('en');

    this.translate.onLangChange.subscribe(() => {
      translate.get('core.site_title').subscribe((s: string) => {
        // TODO: dynamic title
        // titleService.setTitle(s);
      });
    });
  }
}
