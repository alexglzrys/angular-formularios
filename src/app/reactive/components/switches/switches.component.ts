import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  persona = {
    genero: 'F',
    notificaciones: true
  }

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue] // Necesitamos que acepte las condiciones (required - pasa si hay un valor. false es un valor)
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.miFormulario.reset(this.persona)
    // Como el objeto persona no tiene las condiciones, por defecto se establecen en NULL

    // Una forma de colocar un valor por defecto al momento de inicializar mi formulario reactivo
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false
    })

    // Al trabajar con formularios reactivos, puede suscribirme a todo el formulario o a uno de sus campos para escuchar cambios y proceder ante ello
    this.miFormulario.valueChanges.subscribe(newValues => {
      console.log(newValues);
      // Por si se llegara a necesitar:
      // En este punto puedo igualar el objeto persona al nuevo valor que viene desde el formulario reactivo
      const personaRegistrada = newValues
      delete personaRegistrada.condiciones; // no me interesa guardar una referencia hacia las condiciones
      this.persona = personaRegistrada
    })

    // Esta es una suscripción cuando cambia el valor de un control especifico de formulario reactivo
    this.miFormulario.get('condiciones')?.valueChanges.subscribe(newValueConditions => {
      console.log('Las condiciones han cambiado', newValueConditions)
    })
  }

  guardar() {
    if (this.miFormulario.invalid) return;

    console.log(this.miFormulario.value)

    // Por si se llegara a necesitar:
    // En este punto puedo igualar el objeto persona al valor que viene desde el formulario reactivo
    const personaRegistrada = this.miFormulario.value
    delete personaRegistrada.condiciones; // no me interesa guardar una referencia hacia las condiciones
    this.persona = personaRegistrada
  }

}
