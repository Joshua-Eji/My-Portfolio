import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './app/components/navbar.component';
import { FooterComponent } from './app/components/footer.component';
import { DevBotComponent } from './app/components/dev-bot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, DevBotComponent],
  template: `
    <app-navbar></app-navbar>

    <main class="min-h-screen pt-20">
      <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>

    <app-dev-bot></app-dev-bot>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}