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

  miFormulario: FormGroup = this.fb.group({
    // Validar campo contra validaciones de angular y contra expresiones regulares
    nombre: ['', [Validators.required, Validators.pattern(this.nombreApellidoPattern)]]
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
