import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './page2.component.html',
  styles: []
})
export class Page2Component  {
  name = 'Angular';
  images = {
    cover: 'https://standard1c.targetconnect.test/styles/dynamic/image/454451/cover.png'
  };
}
