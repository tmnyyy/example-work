import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  @Input('sidebarOpen')
  public set isOpen(value: boolean = false) {
    if (this.drawer) {
      this.drawer.toggle(value);
    }
  }

  // @Output()
  // public setSidenavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  @ViewChild('drawer', {static: true})
  public drawer!: MatDrawer;

  constructor() { }

  ngOnInit() {
    // this.setSidenavControl.emit(this.drawer);
  }

}
