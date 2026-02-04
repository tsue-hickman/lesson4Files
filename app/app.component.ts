import { Component } from '@angular/core';

@Component({
  selector: 'cms-root',
  template: `
    <cms-header></cms-header>
    <div class="container">
      <cms-documents></cms-documents>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'cms';
}