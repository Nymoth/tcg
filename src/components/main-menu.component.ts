import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tcg-main-menu',
  template: `
    <div class="menu-item">
      <a routerLink="/">Home</a>
    </div>
    <div class="menu-item">
      <a routerLink="/my-cards">My Cards</a>
    </div>
    <div class="menu-item">
      <a routerLink="/social-hub">Social Hub</a>
    </div>
    <div class="menu-item">
      <a routerLink="/battle">Battle</a>
    </div>
    <div class="menu-item">
      <span (click)="openSideMenu()">Menu</span>
    </div>
  `,
  styles: `
    :host {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    .menu-item {

    }
  `,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class MainMenuComponent {
  protected openSideMenu(): void {

  }
}
