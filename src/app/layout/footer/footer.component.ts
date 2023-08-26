import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CookiesService } from 'src/app/services/common/cookie.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public cookiesService: CookiesService, public location: Location) {
  }
}
