import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap/config'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PersonalFinanceAngular');
  constructor(NgbConfig: NgbConfig){
    NgbConfig.animation = false;
  }
}
