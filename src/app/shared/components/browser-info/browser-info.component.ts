import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DeviceInfo, DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-browser-info',
  templateUrl: './browser-info.component.html',
  styleUrls: ['./browser-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrowserInfoComponent {

  deviceInfo: DeviceInfo = this.deviceDetector.getDeviceInfo();

  constructor(private deviceDetector: DeviceDetectorService) { }

  get isSupported(): boolean {

    const i = this.deviceInfo;

    switch (i.browser) {

      case 'Chrome': {
        if (Number(i.browser_version.substr(0, 2)) >= 55) {
          return true;
        }
        break;
      }

      case 'Firefox': {
        if (Number(i.browser_version.substr(0, 2)) >= 55) {
          return true;
        }
        break;
      }

      case 'Safari': {
        if (Number(i.browser_version.substr(0, 2)) >= 10) {
          return true;
        }
        break;
      }

      case 'MS-Edge': {
        if (Number(i.browser_version.substr(0, 2)) >= 13) {
          return true;
        }
        break;
      }

      case 'Opera': {
        if (Number(i.browser_version.substr(0, 2)) >= 55) {
          return true;
        }
        break;
      }
    }

    return false;
  }
}
