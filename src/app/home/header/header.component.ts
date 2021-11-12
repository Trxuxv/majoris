import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  panelOpenState = false;
  videoURL = "https://www.youtube.com/embed/JTqz_xzozl0"

  constructor() { }

  ngOnInit() {
  }

}
