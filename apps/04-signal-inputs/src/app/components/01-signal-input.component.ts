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
  isEven = input.required<boolean, number>({ alias: 'number', transform: (val: number) => val % 2 === 0 });
}
