import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {} //private makes it a property of the class and assigns this.

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'gray'; //Not a good practice.
  }
}
