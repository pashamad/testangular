import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

import { PoiPlace } from '@feature/shared/models';
import { PaginatorStrings } from '@shared/models';

@Component({
  selector: 'app-places-table',
  templateUrl: './places-table.component.html',
  styleUrls: ['./places-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlacesTableComponent implements OnInit {

  @Output()
  readonly ticketClick = new EventEmitter<PoiPlace>();

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  readonly displayedColumns: string[] = ['Name', 'Address', 'Rating', 'Status', 'Actions'];

  dataSource: MatTableDataSource<PoiPlace>;

  @Input()
  set data(data: PoiPlace[]) {
    this.dataSource = new MatTableDataSource<PoiPlace>(data || []);
    this.dataSource.paginator = this.paginator;
  }

  constructor(private translate: TranslateService, private router: Router) { }

  ngOnInit(): void {
    this.translate.stream('shared.paginator').subscribe((t: PaginatorStrings) => {
      const intl = this.paginator._intl;
      intl.itemsPerPageLabel = t.per_page;
      intl.firstPageLabel = t.first;
      intl.lastPageLabel = t.last;
      intl.nextPageLabel = t.next;
      intl.previousPageLabel = t.prev;
      intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
        const shown = length === 0 ? '0' : `${page === 0 ? 1 : page * pageSize} - ${Math.min((page + 1) * pageSize, length)}`;
        return t.sum
          .replace('{{ shown }}', shown)
          .replace('{{ total }}', length.toString());
      };
    });
  }
}
