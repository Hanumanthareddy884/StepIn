import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import { EmployeeComponent } from './components/employee/employee.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    ProductListComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    EmployeeComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StepIn';

  constructor(private _dialog: MatDialog){}


  openAddEditForm(){
    this._dialog.open(EmployeeComponent);
  }
}
