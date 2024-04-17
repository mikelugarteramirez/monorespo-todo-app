import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopMenuComponent } from '@todoapp/todo-components/molecules';
import { LateralMenuComponent } from '@todoapp/todo-components/organisms';

@Component({
  standalone: true,
  imports: [RouterModule,
    LateralMenuComponent, TopMenuComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
