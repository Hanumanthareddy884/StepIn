import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeComponent } from './components/employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';


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
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule,

    MatPaginatorModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'StepIn';
  displayedColumns: string[] = ['id', 'dob', 'firstname', 'lastname', 'email', 'gender', 'package', 'education', 'company', 'exp','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, private _empSer: EmployeeService) { }

  ngOnInit(): void {
    this.getEmp();
  }

  getEmp() {
    this._empSer.getEmployee().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteEmp(id:string){
    this._empSer.deleteEmployee(id).subscribe({
      next:(res)=>{
        alert("Deleted Successfully")
        this.getEmp();
      },error:(err)=>{
        console.log(err);
      }
    })
  }
  openAddEditForm() {
   const dialogRef =  this._dialog.open(EmployeeComponent);
   dialogRef.afterClosed().subscribe({
    next:(val)=>{
      if(val){
        this.getEmp()
      }
    }
   })
  }

  openEditForm(data:any){
    const dialogRef =  this._dialog.open(EmployeeComponent,{data});
   dialogRef.afterClosed().subscribe({
    next:(val)=>{
      if(val){
        this.getEmp()
      }
    }
   })


  }
}
