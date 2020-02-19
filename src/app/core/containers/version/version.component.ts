import { Component } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent {
  version = environment.appVersion;
}
