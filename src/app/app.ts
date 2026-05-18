import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected currentScreen: AppScreen = 'login';
  protected activeDetail: DetailScreen = 'friday';
  private previousScreen: AppScreen = 'login';

  protected goHome(event?: Event): void {
    event?.preventDefault();
    this.navigateTo('home');
  }

  protected navigateTo(screen: AppScreen): void {
    if (screen === this.currentScreen) {
      return;
    }

    this.previousScreen = this.currentScreen;
    this.currentScreen = screen;
  }

  protected goBack(): void {
    const target = this.previousScreen;
    this.previousScreen = this.currentScreen;
    this.currentScreen = target;
  }

  protected openDetail(detail: DetailScreen): void {
    this.activeDetail = detail;
    this.navigateTo('promotion-detail');
  }

  protected isHomeSectionActive(): boolean {
    return this.currentScreen === 'home' || this.currentScreen === 'promotion-detail';
  }
}

type AppScreen =
  | 'login'
  | 'home'
  | 'promotion-detail'
  | 'map'
  | 'challenges'
  | 'prizes'
  | 'ranking'
  | 'profile';

type DetailScreen = 'friday' | 'sea-lions' | 'groups' | 'auditorium';
