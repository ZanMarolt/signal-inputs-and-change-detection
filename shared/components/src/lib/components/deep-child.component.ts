import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DirtyChecksComponent } from './dirty-check.component';

@Component({
  selector: 'shared-deep-child',
  imports: [DirtyChecksComponent],
  template: `<div class="container"><shared-dirty-checks /> <p>Just a deep child comonent!</p></div>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeepChildComponent {}