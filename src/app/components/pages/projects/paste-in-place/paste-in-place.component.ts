import { Component, OnInit, ViewChild } from '@angular/core'
import { MasonryComponent } from 'src/app/components/common/masonry/masonry.component'

@Component({
  selector: 'app-paste-in-place',
  templateUrl: './paste-in-place.component.html',
  styleUrls: ['./paste-in-place.component.less'],
})
export class PasteInPlaceComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  imageLoaded(event) {
    let img: HTMLImageElement
    img = event.target
    img.style.opacity = '1.0'
  }

  @ViewChild(MasonryComponent, { static: false }) masonry: MasonryComponent
}
