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
  protected activePrize: Prize = {
    id: 'comida',
    name: 'COMIDA',
    title: 'Comida',
    image: '/premios-comida1.png',
    offers: [
      {
        title: 'Pizza a elegir por 6,99€',
        points: 600,
        image: '/premios-comida1.png',
        availability: 'Todos los parques'
      }
    ]
  };
  protected activePrizeOffer: PrizeOffer = this.activePrize.offers[0];
  protected readonly prizes: Prize[] = [
    {
      id: 'comida',
      name: 'COMIDA',
      title: 'Comida',
      image: '/premios-comida1.png',
      offers: [
        {
          title: 'Pizza a elegir por 6,99€',
          points: 600,
          image: '/premios-comida1.png',
          availability: 'Todos los parques'
        },
        {
          title: 'Menú solo por 8,99€',
          points: 1000,
          image: '/premios-comida2.png',
          availability: 'Todos los parques'
        },
        {
          title: 'Bebida pequeña por 1,99€',
          points: 100,
          image: '/premios-comida3.png',
          availability: 'Solo en Zoo de Madrid'
        },
        {
          title: 'Helado a elegir por 3,99€',
          points: 400,
          image: '/premios-comida4.png',
          availability: 'Todos los parques'
        },
        {
          title: 'Granizado pequeño por 2,99€',
          points: 200,
          image: '/premios-comida5.png',
          availability: 'Solo en Parque de Atracciones de Madrid'
        },
        {
          title: 'Palomitas por 3,95€',
          points: 200,
          image: '/premios-comida6.png',
          availability: 'Todos los parques'
        }
      ]
    },
    {
      id: 'parques',
      name: 'PARQUES',
      title: 'Parques y descuentos',
      image: '/premios-parques1.png',
      offers: [
        {
          title: '50% descuento Parque de atracciones',
          points: 1000,
          image: '/premios-parques1.png',
          availability: 'Todos los parques'
        },
        {
          title: '30% descuento Parque Warner Madrid',
          points: 100,
          image: '/premios-parques2.png',
          availability: 'Solo en Zoo de Madrid'
        },
        {
          title: '35% descuento en Zoo Madrid',
          points: 400,
          image: '/premios-parques3.png',
          availability: 'Todos los parques'
        },
        {
          title: 'Entrada a 23,90€ parque de atracciones',
          points: 600,
          image: '/premios-parques4.png',
          availability: 'Todos los parques'
        },
        {
          title: 'Zoo + Faunia 40% descuento',
          points: 200,
          image: '/premios-parques5.png',
          availability: 'Todos los parques'
        }
      ]
    },
    {
      id: 'experiencias',
      name: 'EXPERIENCIAS',
      title: 'Experiencias',
      image: '/FOTO10.png',
      offers: [
        {
          title: 'Pasaje especial con descuento',
          points: 350,
          image: '/FOTO10.png',
          availability: 'Todos los parques'
        },
        {
          title: 'Foto de recuerdo gratis',
          points: 250,
          image: '/FOTO4.png',
          availability: 'Parque Warner Madrid'
        },
        {
          title: 'Actividad familiar exclusiva',
          points: 500,
          image: '/FOTO3.png',
          availability: 'Parque de Atracciones de Madrid'
        }
      ]
    },
    {
      id: 'speedy-pass',
      name: 'SPEEDY PASS',
      title: 'Speedy Pass',
      image: '/FOTO6.png',
      offers: [
        {
          title: 'Speedy Pass por 9,99€',
          points: 700,
          image: '/FOTO6.png',
          availability: 'Todos los parques'
        },
        {
          title: 'Acceso rápido familiar',
          points: 1200,
          image: '/FOTO5.png',
          availability: 'Parque Warner Madrid'
        }
      ]
    },
    {
      id: 'parking',
      name: 'PARKING',
      title: 'Parking',
      image: '/map-parque-atracciones.jpg',
      offers: [
        {
          title: 'Parking con 50% descuento',
          points: 300,
          image: '/map-parque-atracciones.jpg',
          availability: 'Todos los parques'
        },
        {
          title: 'Parking preferente por 4,99€',
          points: 600,
          image: '/map-zoo-madrid.png',
          availability: 'Parque de Atracciones de Madrid'
        }
      ]
    },
    {
      id: 'regalos',
      name: 'REGALOS',
      title: 'Regalos',
      image: '/FOTO4.png',
      offers: [
        {
          title: 'Llavero GreenPass gratis',
          points: 250,
          image: '/Logo1.png',
          availability: 'Todos los parques'
        },
        {
          title: 'Recuerdo del parque con descuento',
          points: 450,
          image: '/FOTO4.png',
          availability: 'Todos los parques'
        }
      ]
    }
  ];
  protected activeChallenge: ChallengeDetail = {
    image: '/RETOS4.png',
    title: 'Ayuda a Bob Esponja',
    park: 'Parque de atracciones Madrid',
    question: '¿De qué trata este reto?',
    body:
      'Fondo de Bikini se ha llenado de basura y Bob necesita tu ayuda! Conviértete en un Guardián del Océano y recoge los papeles o botellas que veas en el suelo. ¿Tu objetivo? Llevar cada objeto a su “lugar mágico” (la papelera). ¡Si dejas el parque limpio, ganarás 150 puntos y harás muy feliz a Bob Esponja!'
  };
  protected mapZoom = 1;
  isMapDragging = false;
  private readonly mapViewportWidth = 390;
  private readonly mapViewportHeight = 666;
  private mapDragStart: MapDragStart | null = null;
  protected selectedPark = 'Zoo de Madrid';
  protected readonly parks = [
    'Zoo de Madrid',
    'Parque de atracciones Madrid',
    'Parque Warner Madrid',
    'Aquopolis Madrid',
    'Faunia Madrid'
  ];
  protected readonly rankingEntries: RankingEntry[] = [
    { name: 'Benito Camela Suave', points: 5000000 },
    { name: 'Susana Oria del Huerto', points: 5000000 },
    { name: 'Paca Garte de la Risa', points: 5000000 },
    { name: 'Rosa Melano de la Flor', points: 5000000 },
    { name: 'Soledad de la Calle Vacia', points: 5000000 },
    { name: 'Armando Casas Colgadas', points: 5000000 },
    { name: 'Lola Mento Del Rio', points: 5000000 },
    { name: 'Alan Brito de Alambre', points: 5000000 },
    { name: 'Aitor Tilla Francesa', points: 5000000 },
    { name: 'Luz Cuesta Mucho', points: 5000000 },
    { name: 'Ines Esario de la Fuente', points: 5000000 },
    { name: 'Maximo Esfuerzo de Gracia', points: 5000000 },
    { name: 'Elena Nito del Bosque', points: 5000000 },
    { name: 'Jordi Ner del Palacio', points: 5000000 },
    { name: 'Luz Cuesta Mucho', points: 5000000 }
  ];
  private screenHistory: AppScreen[] = [];

  protected goHome(event?: Event): void {
    event?.preventDefault();
    this.navigateTo('home');
  }

  protected navigateTo(screen: AppScreen): void {
    if (screen === this.currentScreen) {
      return;
    }

    this.screenHistory.push(this.currentScreen);
    this.currentScreen = screen;
  }

  protected goBack(): void {
    const target = this.screenHistory.pop();

    if (!target) {
      return;
    }

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

  protected openPrize(prize: Prize): void {
    this.activePrize = prize;
    this.activePrizeOffer = prize.offers[0];
    this.navigateTo('prize-detail');
  }

  protected openPrizeOffer(offer: PrizeOffer): void {
    this.activePrizeOffer = offer;
    this.navigateTo('prize-offer-detail');
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

  protected isPrizeSectionActive(): boolean {
    return (
      this.currentScreen === 'prizes' ||
      this.currentScreen === 'prize-detail' ||
      this.currentScreen === 'prize-offer-detail'
    );
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
      'prize-detail': 'Premios',
      'prize-offer-detail': 'Premios',
      ranking: 'Ranking',
      profile: 'Bienvenido Javier'
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

  protected hasChallengeImage(): boolean {
    return this.activeChallenge.image.startsWith('/');
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

  startMapDrag(event: Event, viewport: HTMLElement): void {
    const pointerEvent = event as PointerEvent;

    if (pointerEvent.pointerType === 'mouse' && pointerEvent.button !== 0) {
      return;
    }

    this.isMapDragging = true;
    this.mapDragStart = {
      pointerId: pointerEvent.pointerId,
      x: pointerEvent.clientX,
      y: pointerEvent.clientY,
      scrollLeft: viewport.scrollLeft,
      scrollTop: viewport.scrollTop
    };
    viewport.setPointerCapture(pointerEvent.pointerId);
  }

  dragMap(event: Event, viewport: HTMLElement): void {
    const pointerEvent = event as PointerEvent;

    if (!this.mapDragStart || this.mapDragStart.pointerId !== pointerEvent.pointerId) {
      return;
    }

    pointerEvent.preventDefault();
    viewport.scrollLeft = this.mapDragStart.scrollLeft - (pointerEvent.clientX - this.mapDragStart.x);
    viewport.scrollTop = this.mapDragStart.scrollTop - (pointerEvent.clientY - this.mapDragStart.y);
  }

  stopMapDrag(event: Event, viewport: HTMLElement): void {
    const pointerEvent = event as PointerEvent;

    if (!this.mapDragStart || this.mapDragStart.pointerId !== pointerEvent.pointerId) {
      return;
    }

    if (viewport.hasPointerCapture(pointerEvent.pointerId)) {
      viewport.releasePointerCapture(pointerEvent.pointerId);
    }

    this.isMapDragging = false;
    this.mapDragStart = null;
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
  | 'prize-detail'
  | 'prize-offer-detail'
  | 'ranking'
  | 'profile';

type DetailScreen =
  | 'friday'
  | 'sea-lions'
  | 'groups'
  | 'auditorium'
  | 'family'
  | 'reduced'
  | 'free-meter'
  | 'zoo-groups'
  | 'sharks';

interface ChallengeDetail {
  image: string;
  title: string;
  park: string;
  question: string;
  body: string;
}

interface Prize {
  id: string;
  name: string;
  title: string;
  image: string;
  offers: PrizeOffer[];
}

interface PrizeOffer {
  title: string;
  points: number;
  image: string;
  availability: string;
}

interface RankingEntry {
  name: string;
  points: number;
}

interface MapDragStart {
  pointerId: number;
  x: number;
  y: number;
  scrollLeft: number;
  scrollTop: number;
}
