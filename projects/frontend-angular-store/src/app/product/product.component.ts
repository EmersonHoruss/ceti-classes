import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LayoutI } from '../shared/models/interfaces/layout-interface';
import { ProductService } from './services/product.service';
import { ProductI } from './interfaces/product.interface';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  keyColumns: string[] = ['_name', '_amount', '_price', 'Add'];
  dataSource: Array<ProductI> = [];
  layout: LayoutI = {
    title: 'Products',
    button: {
      url: '/product/new',
      icon: 'add',
    },
  };

  constructor(
    private router: Router,
    private productS: ProductService,
    private dialog: MatDialog
  ) {
    this.loadData();
  }

  loadData() {
    this.productS.getProducts().subscribe((e: Array<ProductI>) => {
      this.dataSource = e;
    });
  }

  navigate(page: string) {
    this.router.navigateByUrl(`${this.router.url}/${page}`);
  }

  matchColumn(keyColumn: string): string {
    if (keyColumn === '_name') {
      return 'Name';
    }
    if (keyColumn === '_amount') {
      return 'Amount';
    }
    if (keyColumn === '_price') {
      return 'Price';
    }
    return keyColumn;
  }

  openAddProductModal(product: ProductI) {
    this.dialog.open(AddComponent, { data: product, disableClose: true });
  }
}
