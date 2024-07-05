import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent implements OnInit{

  getContacto!:FormGroup;

  enviar(event:Event)
  {
    event.preventDefault()
    console.log(this.getContacto.value)
  }

  hasErrors(field:string, TypeError:string)
  {
    return this.getContacto.get(field)?.hasError(TypeError)
    &&
    this.getContacto.get(field)?.touched
  }

  constructor(private formBuilder:FormBuilder)
  {
    this.getContacto = this.formBuilder.group
    ({

      email: ['', [Validators.required]],
      comment: ['', [Validators.required, Validators.minLength(10)]]

    })
  }

  ngOnInit(): void { }
  
}
