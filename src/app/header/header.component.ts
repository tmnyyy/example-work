import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  @Input('title')
  public title!: string;

  // @Input('d')
  // public drawer!: MatDrawer;

  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public toggleSidenav(): void {
    this.change.emit();
   // this.drawer.toggle();
  }

}
