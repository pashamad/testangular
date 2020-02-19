import { Injectable, TemplateRef, NgZone } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class MatDialogService {

  constructor(private dialog: MatDialog, private zone: NgZone) { }

  open<T, D = any, R = any>(
    componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
    config: MatDialogConfig<D> = {}
  ): MatDialogRef<T, R> {

    // prevent "dialog exists" error
    if (config.id && this.getDialogById(config.id)) {
      return undefined;
    }

    config.autoFocus = false;
    config.disableClose = false;
    if (config.maxWidth === undefined) {
      config.maxWidth = 'calc(100% - 2px)';
    }

    return this.zone.run<MatDialogRef<T, R>>(() => {
      return this.dialog.open(componentOrTemplateRef, config);
    });
  }

  getDialogById(id: string): MatDialogRef<any> | undefined {
    return this.dialog.getDialogById(id);
  }

  close(id: string): void {
    const ref = this.dialog.getDialogById(id);
    if (ref) {
      ref.close();
    }
  }
}
