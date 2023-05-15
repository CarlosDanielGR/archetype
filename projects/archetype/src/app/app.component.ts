import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { newRoute } from '@stateArchetype/actions/global.action';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [IonicModule],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
  ],
})
export class AppComponent implements OnInit {
  constructor(private readonly router: Router, private readonly store: Store) {}

  ngOnInit(): void {
    this.getCurrentRoute();
  }

  private actionNewRoute(route: string) {
    this.store.dispatch(newRoute({ route }));
  }

  private getCurrentRoute(): void {
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationEnd) {
          this.actionNewRoute(this.router.url);
        }
      },
    });
  }
}
