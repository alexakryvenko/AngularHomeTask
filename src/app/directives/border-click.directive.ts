import { Directive, ElementRef, Renderer2, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appBorderClick]"
})
export class BorderClickDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer2) {
  }

  @Input() color: string = "red";

  @HostListener("click") onClick() {
    this.renderer.setStyle(this.el.nativeElement, "border", `2px dashed ${this.color}`);
  }

}
