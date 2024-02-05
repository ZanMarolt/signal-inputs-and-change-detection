import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  signal,
} from '@angular/core';
import { DeepChildComponent, DirtyChecksComponent } from '@shared/components';

@Component({
  selector: 'future-child-component',
  templateUrl: './child-component.component.html',
  imports: [CommonModule, DirtyChecksComponent, DeepChildComponent],
  standalone: true,
  // 👇 Proposed syntax to tell angular to treat the component as a signal based component
  // signals: true
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponentComponent {
  signalCount = signal(0);

  private readonly cdr = inject(ChangeDetectorRef);

  incrementSignal() {
    this.signalCount.set(this.signalCount() + 1);

    // 👇 Will not be necessary in the future as it will be handled automatically :)
    this.cdr.detectChanges();
  }
}
