import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this._fb.group({
    region: ['', Validators.required],
    // pais: ['', Validators.required],
  });

  constructor( private _fb: FormBuilder ) { }

  ngOnInit(): void {
    console.log(this.miFormulario);
  }

  guardar() {
    console.log(this.miFormulario.controls.region.value);
  }

}
