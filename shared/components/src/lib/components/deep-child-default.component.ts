import { Component } from '@angular/core';
import { DirtyChecksComponent } from './dirty-check.component';

@Component({
  selector: 'shared-deep-child-default',
  imports: [DirtyChecksComponent],
  template: `<div class="container"><shared-dirty-checks /> <p>Just a deep child comonent!</p></div>`,
  standalone: true,
})
export class DeepChildDefaultComponent {}