import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { MatRadioChange, MatSelectChange } from '@angular/material';
import { Subject } from 'rxjs';

import {
  businessExtForms,
  FormGroupDesc,
  FormControlDesc
} from '@feature/business/forms';

@Component({
  selector: 'app-biz-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  readonly regions = [
    { code: 'eu', name: 'EU' },
    { code: 'ru', name: 'RU' }
  ];

  readonly form = new FormGroup({
    common: new FormGroup({
      compName: new FormControl('', []),
      personType: new FormControl('', []),
      region: new FormControl('', [])
    })
  });

  extForm: FormGroup;

  commonGroup: FormGroupDesc;
  regionGroup: FormGroupDesc;

  commonControls: FormControlDesc[];
  regionControls: FormControlDesc[];

  private readonly extForm$ = new Subject<FormGroup>();

  constructor() { }

  get extCommon(): AbstractControl[] {
    if (!this.extForm) {
      return [];
    }
    const controls = (this.extForm.get('common') as FormGroup).controls;
    return Object.values(controls);
  }

  ngOnInit() {
    // TODO: optimize
    // TODO: use factory to prevent memory overflow
    this.form.get('common.personType').setValue('private');
    this.form.get('common.region').setValue(this.regions[0].code);
    this.extForm$.subscribe(f => {
      this.extForm = f;
      this.form.setControl('ext', f);
    });
    setTimeout(() => {
      this.updateExtForm();
    }, 1000);
  }

  onPersonTypeChange(event: MatRadioChange): void {
    this.updateExtForm();
  }

  onRegionChange(event: MatSelectChange): void {
    this.updateExtForm();
  }

  /**
   * TODO: this is not an optimal approach since this method is called many times for every field
   * TODO: add input mask validatation
   */
  getErrors(control: FormControlDesc): string[] {
    const errors = control.control.errors;
    if (!errors) {
      return [];
    }
    return Object.keys(errors).map((key) => {
      return control.errors[key];
    });
  }

  private updateExtForm(): void {

    const person = this.form.get('common.personType').value as string;
    const region = this.form.get('common.region').value as string;
    const forms = businessExtForms;

    const form = new FormGroup({
      common: this.mapGroupDesc(forms.common[person]),
      region: this.mapGroupDesc(forms[region][person])
    });

    this.extForm$.next(form);

    this.commonGroup = forms.common[person];
    this.regionGroup = forms[region][person];

    this.commonControls = Object.values(this.commonGroup);
    this.regionControls = Object.values(this.regionGroup);
  }

  private mapGroupDesc(desc: FormGroupDesc): FormGroup {
    const controls = {};
    Object.keys(desc).map((key) => {
      controls[key] = desc[key].control;
    });
    return new FormGroup(controls);
  }
}
