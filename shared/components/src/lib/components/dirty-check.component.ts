import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'shared-dirty-checks',
  template: ` <code class="dirty-checks">{{ renders() }}</code> `,
  styles: [
    `
      :host {
        display: inline-block;
        min-width: 1rem;
        height: 1rem;
        text-align: center;
        color: white;
        background: red;
        padding: 0.5rem;
        position: absolute;
        left: 0;
        top: 0;
      }
    `,
  ],
  standalone: true,
})
export class DirtyChecksComponent implements DoCheck {
  private _renders = 0;

  ngDoCheck() {
    this._renders++;
  }

  renders() {
    return this._renders;
  }
}