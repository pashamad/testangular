import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent {

  private _code: string;

  constructor(@Inject(MAT_SNACK_BAR_DATA) private data: { code: string }) {
    this._code = this.data.code;
  }

  get code(): string {
    return this._code;
  }
}
