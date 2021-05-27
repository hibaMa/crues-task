import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldWrapperComponent } from './input-field-wrapper.component';
import { LabelModule } from '../label/label.module';
import { StringInputModule } from '../string-input/string-input.module';

@NgModule({
  declarations: [InputFieldWrapperComponent],
  imports: [
    CommonModule,
    LabelModule,
    StringInputModule
  ],
  exports: [InputFieldWrapperComponent]
})
export class InputFieldWrapperModule { }
