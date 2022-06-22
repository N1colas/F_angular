import { Component, OnInit } from '@angular/core';
import { DispatcherService } from 'src/app/core/services/dispatcher.service';

@Component({
  selector: 'app-view-auth',
  templateUrl: './view-auth.component.html',
  styleUrls: ['./view-auth.component.scss']
})
export class ViewAuthComponent implements OnInit {

  constructor(
    public dispatcher:DispatcherService
    ) { }

  ngOnInit(): void {
  }

}
