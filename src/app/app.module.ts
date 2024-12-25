import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListdashComponent } from './shared/component/listdash/listdash.component';
import { ListtableComponent } from './shared/component/listtable/listtable.component';
import { ListformComponent } from './shared/component/listform/listform.component';

@NgModule({
  declarations: [
    AppComponent,
    ListdashComponent,
    ListtableComponent,
    ListformComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
