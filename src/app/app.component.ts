import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent, InputComponent, TextComponent, SwitchComponent } from '@todoapp/todo-components/atoms';
import { MenuOptionComponent, SwitchDarkComponent, TodoCardComponent, InputComponent as InputComponentMolecule } from '@todoapp/todo-components/molecules';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent, InputComponent, TextComponent, SwitchComponent, SwitchDarkComponent, TodoCardComponent, MenuOptionComponent, InputComponentMolecule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
