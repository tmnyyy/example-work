import {Component} from '@angular/core';
import {MatDrawer} from '@angular/material';

@Component({
  selector: 'app-root[class="root"]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'apo-title';

  public drawer!: MatDrawer;

  isSidebarOpen = false;

  constructor() {
  }

  openSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log('click', this.isSidebarOpen);
  }
  public setSidenav(drawer: MatDrawer) {
    this.drawer = drawer;
    // Promise.resolve().then( () => this.drawer = drawer);
  }


}
