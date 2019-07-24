import { Component, OnInit, ElementRef, HostListener } from '@angular/core'

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  PointLight,
  Group,
  ObjectLoader,
} from 'three'

@Component({
  selector: 'app-birch-cylinder',
  templateUrl: './birch-cylinder.component.html',
  styleUrls: ['./birch-cylinder.component.less'],
})
export class BirchCylinderComponent implements OnInit {
  constructor(private el: ElementRef<HTMLDivElement>) {}

  ngOnInit() {
    this.setup()
  }

  setup() {
    console.log('birch setup')
    this.scene = new Scene()
    this.camera = new PerspectiveCamera(75, 1, 0.1, 50)
    this.camera.position.z = 30

    this.renderer = new WebGLRenderer({ antialias: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setClearColor(0x0, 1)
    this.resize()

    this.lights = [[0, 200, 0], [100, 200, 100], [-100, -200, -200]].map(x => {
      let pl = new PointLight(0xffffff, 1, 0)
      pl.position.set(x[0], x[1], x[2])
      this.scene.add(pl)
      return pl
    })

    this.el.nativeElement.appendChild(this.renderer.domElement)

    this.group = new Group()
    // const w = new Worker('./cylinder.worker', { type: 'module' })
    // this.worker = w
    // w.onmessage = event => {
    //   console.log(event.data)
    // }
    // w.onerror = event => {
    //   console.error(event.error)
    // }
    // w.postMessage({ data: 'something' })
    // w.postMessage('something')

    window.requestAnimationFrame(_ => this.animate())
  }

  @HostListener('window:resize')
  resize() {
    this.width = this.el.nativeElement.getBoundingClientRect().width
    this.height = this.el.nativeElement.getBoundingClientRect().height
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.width, this.height)
  }

  animate() {
    window.requestAnimationFrame(_ => this.animate())

    this.renderer.render(this.scene, this.camera)
  }

  private width: number
  private height: number
  private camera: PerspectiveCamera
  private scene: Scene
  private renderer: WebGLRenderer
  private lights: PointLight[]
  private group: Group
  private worker: Worker
  private loader: ObjectLoader
}
