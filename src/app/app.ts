import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected currentScreen: AppScreen = 'login';
  protected activeDetail: DetailScreen = 'friday';
  protected activeChallenge: ChallengeDetail = {
    image: 'IMAGEN4',
    title: 'Ayuda a Bob Esponja',
    park: 'Parque de atracciones Madrid',
    question: '¿De qué trata este reto?',
    body:
      'Fondo de Bikini se ha llenado de basura y Bob necesita tu ayuda! Conviértete en un Guardián del Océano y recoge los papeles o botellas que veas en el suelo. ¿Tu objetivo? Llevar cada objeto a su “lugar mágico” (la papelera). ¡Si dejas el parque limpio, ganarás 150 puntos y harás muy feliz a Bob Esponja!'
  };
  protected mapZoom = 1;
  private readonly mapViewportWidth = 390;
  private readonly mapViewportHeight = 666;
  protected selectedPark = 'Zoo de Madrid';
  protected readonly parks = [
    'Zoo de Madrid',
    'Parque de atracciones Madrid',
    'Parque Warner Madrid',
    'Aquopolis Madrid',
    'Faunia Madrid'
  ];
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

  protected openChallenge(challenge?: Partial<ChallengeDetail>): void {
    this.activeChallenge = {
      ...this.activeChallenge,
      ...challenge
    };
    this.navigateTo('challenge-detail');
  }

  protected openChallengeMap(): void {
    this.selectedPark = this.activeChallenge.park;
    this.mapZoom = 1;
    this.navigateTo('map');
  }

  protected isHomeSectionActive(): boolean {
    return this.currentScreen === 'home' || this.currentScreen === 'promotion-detail';
  }

  protected isChallengeSectionActive(): boolean {
    return this.currentScreen === 'challenges' || this.currentScreen === 'challenge-detail';
  }

  protected screenTitle(): string {
    const titles: Record<AppScreen, string> = {
      login: '',
      home: 'Home',
      'promotion-detail': 'Home',
      'challenge-detail': 'Retos',
      map: 'Mapa',
      challenges: 'Retos',
      prizes: 'Premios',
      ranking: 'Ranking',
      profile: 'Perfil'
    };

    return titles[this.currentScreen];
  }

  protected parkSelectWidth(): number {
    return Math.min(Math.max(this.selectedPark.length + 4, 11), 34);
  }

  protected isAttractionsPark(): boolean {
    return this.selectedPark === 'Parque de atracciones Madrid';
  }

  protected isZooPark(): boolean {
    return this.selectedPark === 'Zoo de Madrid';
  }

  protected hasRealMapImage(): boolean {
    return this.isAttractionsPark() || this.isZooPark();
  }

  protected onParkChange(): void {
    this.mapZoom = 1;
  }

  protected mapWidth(): number {
    return Math.round(this.baseMapWidth() * this.mapZoom);
  }

  protected mapHeight(): number {
    return Math.round(this.baseMapHeight() * this.mapZoom);
  }

  protected zoomIn(): void {
    this.mapZoom = Math.min(Number((this.mapZoom + 0.2).toFixed(1)), 2.2);
  }

  protected zoomOut(): void {
    this.mapZoom = Math.max(Number((this.mapZoom - 0.2).toFixed(1)), this.minimumMapZoom());
  }

  private minimumMapZoom(): number {
    return Number(
      Math.max(this.mapViewportWidth / this.baseMapWidth(), this.mapViewportHeight / this.baseMapHeight()).toFixed(2)
    );
  }

  private baseMapWidth(): number {
    if (this.isZooPark()) {
      return 1524;
    }

    if (this.isAttractionsPark()) {
      return 1581;
    }

    return 760;
  }

  private baseMapHeight(): number {
    if (this.isZooPark()) {
      return 875;
    }

    if (this.isAttractionsPark()) {
      return 854;
    }

    return 980;
  }
}

type AppScreen =
  | 'login'
  | 'home'
  | 'promotion-detail'
  | 'challenge-detail'
  | 'map'
  | 'challenges'
  | 'prizes'
  | 'ranking'
  | 'profile';

type DetailScreen = 'friday' | 'sea-lions' | 'groups' | 'auditorium';

interface ChallengeDetail {
  image: string;
  title: string;
  park: string;
  question: string;
  body: string;
}
