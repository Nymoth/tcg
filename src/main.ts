import { ChangeDetectionStrategy, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import config from './config';
import MainMenuComponent from './components/main-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainMenuComponent],
  template: `
    <div class="base">
      <router-outlet />
      <tcg-main-menu />
    </div>
  `,
  styles: `
    :host {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .base {
      width: 393px;
      height: 852px;
      border-radius: 55px;
      background: #fafafa;
      display: flex;
      flex-direction: column;

      router-outlet {
        flex: 1;
      }
      tcg-main-menu {
        height: 10%;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class App {}

bootstrapApplication(App, config);
