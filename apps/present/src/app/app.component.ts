import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChildComponentComponent } from './child-component/child-component.component';
import { DirtyChecksComponent } from '@shared/components';

@Component({
  standalone: true,
  imports: [RouterModule, ChildComponentComponent, DirtyChecksComponent],
  selector: 'present-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'present';
}
