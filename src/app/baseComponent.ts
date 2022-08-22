import { ElementRef } from "@angular/core";

export class BaseComponent {
  constructor(_ElementRef: ElementRef) {
    _ElementRef.nativeElement.setAttribute("component-type", "ts-ng14");
  }
}
