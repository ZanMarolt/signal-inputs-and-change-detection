import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DeepChildDefaultComponent, DirtyChecksComponent } from '@shared/components';

@Component({
  selector: 'past-child-component',
  templateUrl: './child-component.component.html',
  imports: [CommonModule, DirtyChecksComponent, DeepChildDefaultComponent],
  standalone: true,
})
export class ChildComponentComponent {
  count = 0;

  incrementVar() {
    this.count = this.count + 1;
  }
}
