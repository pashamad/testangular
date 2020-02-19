import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Injectable()
export class IconRegistryService {

  readonly ICONS_PATH = 'assets/icons/';

  readonly ICONS_MAPS = [
    { class: 'visibility_off', icon: 'baseline-visibility_off-24px.svg' },
    { class: 'visibility', icon: 'baseline-visibility-24px.svg' },
    { class: 'keyboard_arrow_down', icon: 'baseline-keyboard_arrow_down-24px.svg' }
  ];

  constructor(private matRegistry: MatIconRegistry, private sanitizer: DomSanitizer) { }

  init(): Promise<void> {
    this.ICONS_MAPS.forEach(map => {
      const iconPath = `${this.ICONS_PATH}${map.icon}`;
      this.matRegistry.addSvgIcon(map.class, this.sanitizer.bypassSecurityTrustResourceUrl(iconPath));
    });
    return new Promise<any>((resolve) => {
      resolve();
    });
  }
}

export function iconsInitFactory(service: IconRegistryService): () => Promise<void> {
  return () => service.init();
}
