import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {
  @Input('appIf')
  set isHidden(shouldHide: boolean) {
    if(shouldHide) {
      this.container.clear();
    } else {
      this.container.createEmbeddedView(this.template);
    }
  }

  constructor(private template: TemplateRef<any>,
              private container: ViewContainerRef) {}
}
