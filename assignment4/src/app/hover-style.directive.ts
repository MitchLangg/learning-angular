import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective implements OnInit {

  constructor(private elm: ElementRef) { }

  @HostListener('hoverOn') onEnter(): void {
    this.elementOn();
  }
  @HostListener('hoverOff') onExit(): void {
    this.elementOff();
  }
  private elementOn(): void {
    switch (this.elm.nativeElement.id) {
      case 'title':
        this.elm.nativeElement.style.textDecoration = 'underline';
        break;
      case 'tags':
        this.elm.nativeElement.style.fontWeight = 'bold';
        break;
      default:
        break;
    }
  }
  private elementOff(): void {
    switch (this.elm.nativeElement.id) {
      case 'title':
        this.elm.nativeElement.style.textDecoration = 'none';
        break;
      case 'tags':
        this.elm.nativeElement.style.fontWeight = 'normal';
        break;
      default:
        break;
    }
  }
ngOnInit(): void {
}
}
