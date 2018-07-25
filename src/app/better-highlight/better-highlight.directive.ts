import { Directive,
    Renderer2,
    ElementRef,
    OnInit,
    HostListener,
    HostBinding,
    Input
  } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlighColor: string = 'blue';

  // tell angular that on this element which the directive sit on, please access the style property
  @HostBinding('style.backgroundColor') backgroundColor: string;

  // Renderer2 to better access the DOM
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  // listen for event on that element that the directive sit on
  // the event here is mouseenter
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlighColor;
  }

  // @HostListener('click') mouseleave(eventData: Event) {
  //   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  // }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
