import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormMessageComponent {

  @Input()
  message: string;
}
