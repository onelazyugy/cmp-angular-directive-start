import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    // this is an attribute directive
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    // inject the element that this directive sit on
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}