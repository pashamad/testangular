import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PoiPlace } from '@feature/shared/models';

@Component({
  selector: 'app-place-item-page',
  templateUrl: './place-item-page.component.html',
  styleUrls: ['./place-item-page.component.scss']
})
export class PlaceItemPageComponent {

  place$: Observable<PoiPlace>;
}
