import { NativeDateAdapter } from '@angular/material';
import { Injectable } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

import { DateFormatService } from '@shared/services';

@Injectable()
export class AppDateAdapter extends NativeDateAdapter {

  constructor(platform: Platform, private formatService: DateFormatService) {
    super('en', platform);
  }

  getFirstDayOfWeek(): number {
    return 1;
  }

  format(date: Date, displayFormat: object): string {
    return this.formatService.format(date, 'date');
  }
}
