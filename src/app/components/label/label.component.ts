import { Component, Input, OnInit } from '@angular/core';

export enum LabelSize {
  Medium = 'medium'
}

@Component({
  selector: 'crs-label',
  styleUrls: ['./label.component.scss'],
  templateUrl: './label.component.html'
})
export class LabelComponent implements OnInit {

  private _size: LabelSize = LabelSize.Medium;

  public ngClass: any;

  @Input()
  public get size(): LabelSize {
    return this._size;
  }

  public set size(value: LabelSize) {
    this._size = value;

    this._update();
  }

  protected _update(): void {
    this.ngClass = {
      [`Label--${this.size}Size`]: true
    };
  }

  public ngOnInit() {
    this._update();
  }

}
