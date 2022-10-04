import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeatureToggleListComponent} from "./components/feature-toggles-list/feature-toggles-list.component";
import {FeatureToggleDetailsComponent} from "./components/feature-toggle-details/feature-toggle-details.component";
import {AddFeatureToggleComponent} from "./components/add-feature-toggle/add-feature-toggle.component";

const routes: Routes = [
  { path: '', redirectTo: '/feature-toggles', pathMatch: 'full' },
  { path: 'feature-toggles', component: FeatureToggleListComponent},
  { path: 'feature-toggles/:id', component: FeatureToggleDetailsComponent},
  {path: 'add', component: AddFeatureToggleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
