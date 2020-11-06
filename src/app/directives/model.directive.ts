import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appModel]'
})
export class ModelDirective {
  @Input('appModel')
  dynamicValue: string;

  @Output('appModelChange')
  emitUpdates = new EventEmitter<string>()

  @HostBinding('value')
  get value() {
    return this.dynamicValue
  }

  @HostListener('change', ['$event'])
  updateValue(event) {
    this.dynamicValue = event.target.value;
    this.emitUpdates.emit(this.dynamicValue);
  }

}
