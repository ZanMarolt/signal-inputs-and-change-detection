import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DirtyChecksComponent } from '@shared/components';
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  standalone: true,
  imports: [RouterModule, DirtyChecksComponent, ChildComponentComponent],
  selector: 'past-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'signal-inputs-and-change-detection';
}
