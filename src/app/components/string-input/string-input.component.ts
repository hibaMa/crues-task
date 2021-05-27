import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractFormControlComponent } from '../abstract-form-control/abstract-form-control.component';

@Component({
  selector: 'crs-string-input',
  templateUrl: './string-input.component.html',
  styleUrls: ['./string-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StringInputComponent),
      multi: true
    }
  ]
})
export class StringInputComponent extends AbstractFormControlComponent<string> {
  private _isDisabled: boolean = false;
  private _fullWidth: boolean = false;
  private _hasError: boolean = false;
  public ngClass: any;

  @ViewChild('input', {static: true})
  public input: ElementRef;

  @Input()
  public type = 'text';

  @Input()
  public get fullWidth(): boolean {
    return this._fullWidth;
  }

  public set fullWidth(value: boolean) {
    this._fullWidth = value;

    this._update();
  }


  @Input()
  public get hasError(): boolean {
    return this._hasError;
  }

  public set hasError(value: boolean) {
    this._hasError = value;

    this._update();
  }

  @Input()
  public get isDisabled(): boolean {
    return this._isDisabled;
  }

  public set isDisabled(value: boolean) {
    this._isDisabled = value;

    this._update();
  }

  @Input()
  public placeholder: string;

  public setFocus(): void {
    if (this.isDisabled) {
      return;
    }

    this.input.nativeElement.select();
    this._update();
  }

  public onBlur() {
    this._update();
  }

  protected _update(): void {
    this.ngClass = {
      'StringInput': true,
      'StringInput--fullWidth': this.fullWidth,
      'has-error': this.hasError,
      'is-disabled': this.isDisabled,
    };
  }
}
