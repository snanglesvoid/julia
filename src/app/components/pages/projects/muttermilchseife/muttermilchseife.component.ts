import { Component, OnInit, ViewChild } from '@angular/core'
import { MasonryComponent } from 'src/app/components/common/masonry/masonry.component'

@Component({
  selector: 'app-muttermilchseife',
  templateUrl: './muttermilchseife.component.html',
  styleUrls: ['./muttermilchseife.component.less'],
})
export class MuttermilchseifeComponent implements OnInit {
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
    this.masonry.pack()
  }

  @ViewChild(MasonryComponent, { static: false }) masonry: MasonryComponent
}
