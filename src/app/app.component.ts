import {Component, OnDestroy} from '@angular/core';
import {ShowContentService} from "./show-content.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  show: boolean = true;

  subscription: Subscription;
  constructor(private showContentService: ShowContentService) {
    this.subscription = showContentService.contentHome.subscribe(value => {
      this.show = value;
    });
  }

  hideContent() {
    this.show = false;
  }


  ngOnDestroy() {
    // Prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

}
