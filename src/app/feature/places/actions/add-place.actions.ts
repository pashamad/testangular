import { AddPlaceModel } from '@feature/places/models';

export class OpenModal {
  static readonly type = '[Places.Add] Open Modal';
}

export class CloseModal {
  static readonly type = '[Places.Add] Close Modal';
}

export class Add {
  static readonly type = '[Places.Add] Add';
  constructor(public payload: AddPlaceModel) { }
}
