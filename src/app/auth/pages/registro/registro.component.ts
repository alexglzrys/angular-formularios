import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/services/validators/email-validator.service';
import { ValidationsService } from 'src/app/shared/services/validators/validations.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    // campo: valor por defecto del campo, validaciones sincronas, validaciones asincronas (http requiere un proceso adicional el cual requiere de la intervención de un servicio y la implementación de una interfaz)

    // Validar campo contra validaciones de angular y contra expresiones regulares
    nombre: ['', [Validators.required, Validators.pattern(this.validationService.nombreApellidoPattern)]],
    // Angular cuenta con un validador integrado para email, pero no es muy seguro - Validators.email
    // Declarar el servicio (tercer argumento) que se encargará de realizar la validación http asincrona para verificar que el email no existe en el server
    email: ['', [Validators.required, Validators.pattern(this.validationService.emailPattern)], [this.emailValidator]],
    // Inyectar una función que nos provea de una validación personalizada
    // Solo la referencia, no su ejecución()
    // (esta pede estar declarada a nivel de componente, un archivo de funciones exportadas, o un servicio)
    username: ['', [Validators.required, this.validationService.noPuedeSerRoot]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password_confirmation: ['', Validators.required]
  }, {
    // Opciones de grupo de formulario:
    // Se pueden especificar Validaciones generales para el formulario, ya que validar contraseñas iguales, es una validación compuesta que involucra mas de un campo en particular
    // Aqui como tenemos que pasarle los campos que se desean validar, tenemos que invocar la función. Sin embargo eso no se puede hacer en funciones de validación
    //  por ello, en su definición retorna otra función
    validators: [this.validationService.camposNoIguales('password', 'password_confirmation')]
  });

  // Inyectar servicio de validaciones personalizadas
  // Inyectar servicios de validaciones asincronas personalizadas que requieren http
  constructor(private fb: FormBuilder,
              private validationService: ValidationsService,
              private emailValidator: EmailValidatorService) { }

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
