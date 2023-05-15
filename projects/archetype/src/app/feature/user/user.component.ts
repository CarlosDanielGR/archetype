import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { IRoute } from '@coreArchetype/interfaces/global.interface';
import { selectRoute } from '@stateArchetype/selectors/global.selector';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  currentRoute$: Observable<string> = new Observable<string>();

  constructor(private readonly store: Store<IRoute>) {}

  ngOnInit(): void {
    this.getCurrentRoute();
  }

  private getCurrentRoute(): void {
    this.currentRoute$ = this.store.select(selectRoute);
  }
}
