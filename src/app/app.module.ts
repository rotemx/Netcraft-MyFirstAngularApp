import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {LayoutComponent} from './components/layout/layout.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {ContentComponent} from './components/content/content.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { AaComponent } from './components/aa/aa.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { DefaultContentComponent } from './components/default-content/default-content.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SideBarComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    AComponent,
    BComponent,
    AaComponent,
    ChildComponent,
    ParentComponent,
    DefaultContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule {

}

