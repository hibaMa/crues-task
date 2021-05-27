import { Component, Input } from '@angular/core';

@Component({
  selector: 'crs-input-field-wrapper',
  templateUrl: './input-field-wrapper.component.html',
  styleUrls: ['./input-field-wrapper.component.scss']
})
export class InputFieldWrapperComponent {

  @Input()
  public labelText: string;

}
