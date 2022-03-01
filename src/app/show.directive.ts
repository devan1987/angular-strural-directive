import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[show]',
})
export class AppShow {
  renedered = false;
  @Input() set show(value: any) {
     if(value && !this.renedered) {
         this.container.createEmbeddedView(this.template);
   } else if (!value && this.renedered) {
        this.container.clear();
      }
  }

  constructor(public template:TemplateRef<any>, public container:ViewContainerRef) {}
}
