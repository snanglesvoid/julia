import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './components/pages/home/home.component'
import { ProjectsComponent } from './components/pages/projects/projects.component'
import { CvComponent } from './components/pages/cv/cv.component'
import { ClayBodyComponent } from './components/pages/projects/clay-body/clay-body.component'
import { PasteInPlaceComponent } from './components/pages/projects/paste-in-place/paste-in-place.component'
import { MuttermilchseifeComponent } from './components/pages/projects/muttermilchseife/muttermilchseife.component'
import { SkinOfABirchComponent } from './components/pages/projects/skin-of-a-birch/skin-of-a-birch.component'
import { ChimeraComponent } from './components/pages/projects/chimera/chimera.component'
import { ContactComponent } from './components/pages/contact/contact.component'
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cv',
    component: CvComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'clay-body',
    component: ClayBodyComponent,
  },
  {
    path: 'paste-in-place',
    component: PasteInPlaceComponent,
  },
  {
    path: 'muttermilchseife',
    component: MuttermilchseifeComponent,
  },
  {
    path: 'skin-of-a-birch',
    component: SkinOfABirchComponent,
  },
  {
    path: 'chimera',
    component: ChimeraComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
