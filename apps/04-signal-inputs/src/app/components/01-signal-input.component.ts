import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'signal-inputs-default-example',
  template: `{{ isEven ? 'Even' : 'Odd'}}`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalInputComponent {
    private _num = 0;
    @Input({ required: true }) set number(val: number) {
        this.isEven = val % 2 === 0;
        this._num = val;
    }

    get number(): number {
        return this._num;
    }

    isEven = false;
}
