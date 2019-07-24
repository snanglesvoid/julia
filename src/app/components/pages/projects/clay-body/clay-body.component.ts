import { Component, OnInit, ViewChildren, QueryList } from '@angular/core'
import { MasonryComponent } from 'src/app/components/common/masonry/masonry.component'

@Component({
  selector: 'app-clay-body',
  templateUrl: './clay-body.component.html',
  styleUrls: ['./clay-body.component.less'],
})
export class ClayBodyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  inViewportChange(event) {
    let gridItem: HTMLDivElement = event.el.nativeElement
    let pos = event.pos
    if (pos < 1) {
      gridItem.classList.add('in-view')
    } else {
      gridItem.classList.remove('in-view')
    }
  }

  imageLoaded(event) {
    let img: HTMLImageElement
    img = event.target
    img.style.opacity = '1.0'
    img.parentElement.classList.add('in-view')
    this.masonries.forEach(x => x.pack())
  }

  @ViewChildren(MasonryComponent) masonries: QueryList<MasonryComponent>
}
