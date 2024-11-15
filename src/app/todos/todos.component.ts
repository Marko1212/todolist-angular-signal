import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MainComponent],
})
export class TodosComponent {}
