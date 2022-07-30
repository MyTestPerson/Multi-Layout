import { Component, OnInit } from '@angular/core';
import {ShowContentService} from "../show-content.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private showContentService: ShowContentService) {
    this.showContentService.showContentHome(false);
  }

  showContentHome() {
    this.showContentService.showContentHome(true);
  }

  ngOnInit(): void {
  }

}
