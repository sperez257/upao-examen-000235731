import { Espacio } from './../../models/espacio';
import { EspacioService } from './../../services/espacio.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-espacio',
  templateUrl: './new-espacio.component.html',
  styleUrls: ['./new-espacio.component.css']
})
export class NewEspacioComponent implements OnInit {

  myForm!:FormGroup;
  color = "accent";

  constructor(
    private fb:FormBuilder,
    private espacioService:EspacioService,
    private router:Router,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:['',[Validators.required, Validators.maxLength(10)]],
      email:['',[Validators.required, Validators.email]],
      phone:['',[Validators.required]],
    })
  }

  saveEmploye(){
    
    const espacio: Espacio={
      id:0,
      name:this.myForm.get('name')?.value,
      piso:this.myForm.get('piso')?.value,
      numero:this.myForm.get('numero')?.value,
      estado:this.myForm.get('estado')?.value
    };

    this.espacioService.addEspacio(espacio)
        .subscribe({
          next: (data)=>{
            this.snackBar.open("Registro OK",'',{
              duration:3000,
            })
            this.router.navigate(['/employees']);
          },
          error:(err)=>{
            console.log(err);
          }
        })
  }
}
