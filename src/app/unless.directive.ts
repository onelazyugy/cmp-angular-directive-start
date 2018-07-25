import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// this directive is the opposite of *ngIf directive
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // a setter method of a property. The method name has to the the same name as the selector
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // remove this place on the DOM
      this.vcRef.clear();
    }
  }
  // templateRef - get access to the template (what)
  // vcRef - get access to the place in the document where we want to render it (where)
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
