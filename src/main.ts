import { ChangeDetectionStrategy, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import config from './config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="screen">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: `
    :host {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .screen {
      width: 393px;
      height: 852px;
      border-radius: 55px;
      background: #000;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class App {}

bootstrapApplication(App, config);
