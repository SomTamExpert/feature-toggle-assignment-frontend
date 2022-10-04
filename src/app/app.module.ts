import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddFeatureToggleComponent } from './components/add-feature-toggle/add-feature-toggle.component';
import { FeatureToggleDetailsComponent } from './components/feature-toggle-details/feature-toggle-details.component';
import { FeatureToggleListComponent } from './components/feature-toggles-list/feature-toggles-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFeatureToggleComponent,
    FeatureToggleDetailsComponent,
    FeatureToggleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
