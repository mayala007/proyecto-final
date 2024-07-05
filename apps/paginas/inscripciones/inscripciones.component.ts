import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-inscripciones',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.css',
})
export class InscripcionesComponent implements OnInit {
  getRegistro!: FormGroup;

  enviar(event: Event) {
    event.preventDefault();
    console.log(this.getRegistro.value);
  }

  hasErrors(field: string, TypeError: string) {
    return (
      this.getRegistro.get(field)?.hasError(TypeError) &&
      this.getRegistro.get(field)?.touched
    );
  }

  constructor(private formBuilder: FormBuilder) {
    this.getRegistro = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      identification: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}
}
