import {Directive, DoCheck, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMap]'
})
export class MapDirective implements DoCheck{
  @Input('appMapIn') map;

  ngDoCheck(): void {
    this.container.clear();

    Object.keys(this.map).forEach( key => {
      this.container.createEmbeddedView(this.template, {
        $implicit: { key, value: this.map[key]},
      })
    })
  }

  constructor(private template: TemplateRef<any>,
              private container: ViewContainerRef) {}

}
