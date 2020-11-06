import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[click.long]'
})
export class LongClickDirective {
  private _clickTimer: number;

  @Output('click.long')
  longClickEvent = new EventEmitter();

  @HostListener('mousedown')
  startTimer() {
    this._clickTimer = window.setTimeout(
        () => this.longClickEvent.emit(),
        3000)
  }

  @HostListener('mouseup')
  cancelTimer(){
    clearTimeout(this._clickTimer);
  }

}
