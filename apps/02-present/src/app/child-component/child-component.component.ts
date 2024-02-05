import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DeepChildComponent, DirtyChecksComponent } from '@shared/components';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'present-child-component',
  templateUrl: './child-component.component.html',
  imports: [CommonModule, DirtyChecksComponent, DeepChildComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponentComponent {
  count$ = new BehaviorSubject(0);


  increment() {
    this.count$.next(this.count$.value + 1);
  }
}
