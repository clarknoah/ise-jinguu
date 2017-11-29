import { Directive } from '@angular/core';

@Directive({
  selector: '[popup]',
  exportAs:'popup'
})
export class PopupDirective {

  constructor() { }

}
