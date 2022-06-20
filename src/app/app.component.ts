import { Component } from '@angular/core';
import { LoadingService } from './shared/services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sistema-controle-experimentacao-animal';

  constructor(public loadingService: LoadingService) {

  }
}
