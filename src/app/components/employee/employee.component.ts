import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { NgFor } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
      MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgFor,
    HttpClientModule,

  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  empForm:FormGroup;
  educations: string[] = [ "SSLC","PUC","Diploma","UG"];
  constructor(private _fb:FormBuilder,
    private _emp:EmployeeService,
    private _dialog:DialogRef<EmployeeComponent>,
  ){
    this.empForm = this._fb.group({
      firstname:'',
      lastname:'',
      email:'',
      dob:'',
      education:'',
      company:'',
      package:'',
      gender:'',
      exp:''
    })
  }

  onFormSubmit(){
    if(this.empForm.valid){
      this._emp.addEmployee(this.empForm.value).subscribe({
        next:(val:any)=>{
          alert('Added successfully');
          this._dialog.close();
        },error:(err:any)=>{
          console.error(err);
        }
      })
      // console.log(this.empForm.value);
    }
  }
}
