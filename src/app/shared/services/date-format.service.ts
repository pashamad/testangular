import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { LangState } from '@shared/states';
import { Lang } from '@shared/models';

export const DATE_FORMAT_DATE = 'date';
export const DATE_FORMAT_FULL = 'full';

@Injectable()
export class DateFormatService {

  @Select(LangState.selected) readonly lang$: Observable<Lang | null>;

  private langCode = 'en';

  constructor(private store: Store) {
    this.lang$.subscribe(lang => this.langCode = lang.code);
  }

  format(date: Date | string, format: string = DATE_FORMAT_FULL, timezone?: string): string {
    let formatData = environment.locale.dateFormats[this.langCode];
    if (!formatData) {
      formatData = environment.locale.dateFormats[environment.locale.fallbackLang];
    }
    const formatString = formatData[format];
    return timezone
      ? formatDate(date, formatString, 'en-US', timezone)
      : formatDate(date, formatString, 'en-US');
  }
}
