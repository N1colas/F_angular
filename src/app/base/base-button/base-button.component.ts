import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseButtonComponent implements OnInit {
  time = (new Date()).toLocaleTimeString()

  constructor() {
    setInterval(
      () => this.time =  (new Date()).toLocaleTimeString()
      ,1000
    )
  }

  ngOnInit(): void { }

}
