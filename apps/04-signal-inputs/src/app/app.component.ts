import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignalInputComponent } from './components/01-signal-input.component';

@Component({
  standalone: true,
  imports: [RouterModule, SignalInputComponent],
  selector: 'signal-inputs-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'signal-inputs';

  count = signal(0);
}
