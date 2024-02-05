import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DirtyChecksComponent } from '@shared/components';
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  standalone: true,
  imports: [RouterModule, DirtyChecksComponent, ChildComponentComponent],
  selector: 'future-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'future';
}
