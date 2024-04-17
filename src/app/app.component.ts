import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent, InputComponent, TextComponent, SwitchComponent } from '@todoapp/todo-components/atoms';
import { MenuOptionComponent, SwitchDarkComponent, TodoCardComponent } from '@todoapp/todo-components/molecules';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent, InputComponent, TextComponent, SwitchComponent, SwitchDarkComponent, TodoCardComponent, MenuOptionComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
