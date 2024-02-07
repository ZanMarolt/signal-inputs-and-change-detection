import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'signal-inputs-default-example',
  template: `{{ isEven() ? 'Even' : 'Odd'}}`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalInputComponent {
  number = input(0, { alias: 'number' });
  isEven = computed(() => this.number() % 2 === 0);
}
