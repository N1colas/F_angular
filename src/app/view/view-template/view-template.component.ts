import { AfterViewInit, Component, ContentChild, HostListener, OnInit, ViewChild } from '@angular/core';
import { BaseHeaderComponent } from 'src/app/base/base-header/base-header.component';
import { FeatureAuthComponent } from 'src/app/feature/feature-auth/feature-auth.component';

@Component({
  selector: 'app-view-template',
  templateUrl: './view-template.component.html',
  styleUrls: ['./view-template.component.scss']
})
export class ViewTemplateComponent implements OnInit, AfterViewInit {

  pause = false;
  size: {width: number, height:number} = {width: 0, height:0}

  @HostListener('window:keyup.control.alt.p')
  togglePause() {
    this.pause = !this.pause;
  }

  @HostListener('window:resize')
  getDocumentSize() {
    this.size.width = window.innerWidth;
    this.size.height = window.innerHeight;
  }

  @ViewChild(BaseHeaderComponent) header:BaseHeaderComponent|null = null;
  @ContentChild(FeatureAuthComponent) content:FeatureAuthComponent|null = null;
  constructor() { }

  ngAfterViewInit(): void {
    console.warn('header',this.header);
    console.warn('content',this.content);
  }

  ngOnInit(): void {
  }

}
