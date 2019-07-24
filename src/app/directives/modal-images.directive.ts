import {
  Directive,
  AfterContentInit,
  OnDestroy,
  ContentChildren,
  ElementRef,
  QueryList,
} from '@angular/core'
import { ModalImagesService } from '../services/modal-images.service'

@Directive({
  selector: '[appModalImages]',
})
export class ModalImagesDirective implements AfterContentInit, OnDestroy {
  constructor(
    private modal: ModalImagesService,
    private el: ElementRef<HTMLDivElement>
  ) {}

  changeSubscription
  ngAfterContentInit() {
    let imgNodes = this.el.nativeElement.querySelectorAll('img')
    console.log('modal images', imgNodes.length)
    this.items = imgNodes
    this.initListeners()
    // this.changeSubscription = this.items.changes.subscribe(_ => {
    //   this.initListeners()
    // })
  }

  ngOnDestroy() {
    // this.subscriptions.forEach(s => s.unsubscribe())
    // this.changeSubscription.unsubscribe()
  }

  items: NodeListOf<HTMLImageElement>

  subscriptions: any[]
  initListeners() {
    console.log('init listeners')
    this.urls = []
    this.items.forEach(img => {
      // console.log(img)
      img.addEventListener('click', event => this.imageClicked(img, event))
      this.urls.push(img.src)
    })
  }

  urls: string[]

  imageClicked(img: HTMLImageElement, event) {
    this.modal.open(this.urls, img.src)
  }
}
