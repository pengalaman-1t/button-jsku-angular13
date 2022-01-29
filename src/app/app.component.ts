import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'button-jsku';


  public constructor(private titleService : Title){
    this.titleService.setTitle("Tutorial membuat Button di AngularJS");
  }

  public setTitle(newTitle: string)
  {
  this.titleService.setTitle(newTitle)


}
}


