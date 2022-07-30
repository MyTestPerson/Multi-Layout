import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShowContentService {

  // Observable string sources
  private showContent = new Subject<boolean>();

  // Observable String Streams
  contentHome = this.showContent.asObservable();

  showContentHome(showContent: boolean) {
    this.showContent.next(showContent);
  }

}
