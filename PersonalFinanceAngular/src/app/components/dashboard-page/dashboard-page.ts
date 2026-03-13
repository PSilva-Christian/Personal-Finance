import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-dashboard-page',
  imports: [NgOptimizedImage],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {

  username: string = " Jhon Doe"
  notFoundImage = "/public/posternotfound.jpg"
}
