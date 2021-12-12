import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // Expresión regular a validar
  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miFormulario: FormGroup = this.fb.group({
    // Validar campo contra validaciones de angular y contra expresiones regulares
    nombre: ['', [Validators.required, Validators.pattern(this.nombreApellidoPattern)]],
    // Angular cuenta con un validador integrado para email, pero no es muy seguro - Validators.email
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoEsInvalido(nombreCampo: string): boolean | undefined {
    // En formularios reactivos podemos acceder facilmente a la instancia de un control mediante el método get()
    return this.miFormulario.get(nombreCampo)?.invalid && this.miFormulario.get(nombreCampo)?.touched;
  }

  registrar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return;
    }

    console.log(this.miFormulario.value)
  }

}
