import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'past-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'signal-inputs-and-change-detection';
}
