import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';


@Component({
  selector: 'crs-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges, OnInit {

  // @Input() these should be input with enum type
  public appearance = 'primary';
  public size = 'medium';

  public ngClass: any;

  @Output()
  public click: EventEmitter<MouseEvent> = new EventEmitter();

  @Input()
  public isDisabled: boolean;

  @Input()
  public fullWidth: boolean;

  @Input()
  public value: any;

  public ngOnChanges(): void {
    this.update();
  }

  public ngOnInit(): void {
    this.update();
  }

  public onClick(event: MouseEvent) {
    event.stopPropagation();

    if (!this.isDisabled) {
      this.click.emit(event);
    }
  }

  public update(): void {
    this.ngClass = {
      'Button': true,
      [`Button--${this.appearance}Appearance`]: true,
      [`Button--${this.size}Size`]: true,
      [`Button--fullWidth`]: this.fullWidth,
      'is-disabled': this.isDisabled,
    };
  }
}
