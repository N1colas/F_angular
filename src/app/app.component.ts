import { Component } from '@angular/core';
import { DispatcherService } from './core/services/dispatcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sodium';

  constructor(
    public dispatcher: DispatcherService
  ) {}
}
