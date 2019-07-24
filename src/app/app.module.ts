import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, Injectable } from '@angular/core'
import { DeviceDetectorModule } from 'ngx-device-detector'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './components/pages/home/home.component'
import { CvComponent } from './components/pages/cv/cv.component'
import { ProjectsComponent } from './components/pages/projects/projects.component'
import { ClayBodyComponent } from './components/pages/projects/clay-body/clay-body.component'
import { NavComponent } from './components/nav/nav.component'
import { LayoutComponent } from './components/layout/layout.component'
import { ThreeDHeadingComponent } from './components/three-d-heading/three-d-heading.component'
import { TextFlipComponent } from './components/common/text-flip/text-flip.component'
import { PasteInPlaceComponent } from './components/pages/projects/paste-in-place/paste-in-place.component'
import { MuttermilchseifeComponent } from './components/pages/projects/muttermilchseife/muttermilchseife.component'
import { MasonryComponent } from './components/common/masonry/masonry.component'
import { ScrollToDirective } from './scroll-to.directive'
import { SkinOfABirchComponent } from './components/pages/projects/skin-of-a-birch/skin-of-a-birch.component'
import { ChimeraComponent } from './components/pages/projects/chimera/chimera.component'
import { ModalImagesComponent } from './components/common/modal-images/modal-images.component'
import { ModalImagesDirective } from './directives/modal-images.directive'
import { SlideshowComponent } from './components/common/slideshow/slideshow.component'
import { SlideshowControllerComponent } from './components/common/slideshow-controller/slideshow-controller.component'
import { BirchCylinderComponent } from './components/common/birch-cylinder/birch-cylinder.component'
import { ContactComponent } from './components/pages/contact/contact.component'
import { ContactFormComponent } from './components/pages/contact/contact-form/contact-form.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvComponent,
    ProjectsComponent,
    ClayBodyComponent,
    NavComponent,
    LayoutComponent,
    ThreeDHeadingComponent,
    TextFlipComponent,
    PasteInPlaceComponent,
    MuttermilchseifeComponent,
    MasonryComponent,
    ScrollToDirective,
    SkinOfABirchComponent,
    ChimeraComponent,
    ModalImagesComponent,
    ModalImagesDirective,
    SlideshowComponent,
    SlideshowControllerComponent,
    BirchCylinderComponent,
    ContactComponent,
    ContactFormComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot(),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
