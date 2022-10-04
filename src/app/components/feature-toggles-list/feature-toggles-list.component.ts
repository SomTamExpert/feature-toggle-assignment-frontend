import { Component, OnInit } from '@angular/core';
import {FeatureToggle} from "../../../models/feature-toggles.model";
import {FeatureToggleService} from "../../../services/feature-toggle.service";

@Component({
  selector: 'app-feature-toggles-list',
  templateUrl: './feature-toggles-list.component.html',
  styleUrls: ['./feature-toggles-list.component.css']
})
export class FeatureToggleListComponent implements OnInit {

  featureToggles?: FeatureToggle[];
  currentFeatureToggle: FeatureToggle = {};
  currentIndex = -1;
  name = ''
  isPressed = true;

  constructor(private featureToggleService: FeatureToggleService) { }

  ngOnInit(): void {
    this.retrieveFeatureToggles();
  }

  retrieveFeatureToggles(): void {
    this.featureToggleService.getFeatureToggles()
      .subscribe(
        data => {
          this.featureToggles = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    this.isPressed = true;
  }

  retrieveActiveFeatureToggles(): void {
    this.featureToggleService.getActiveFeatureToggles()
      .subscribe(
        data => {
          this.featureToggles = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    this.isPressed = false;
  }

  refreshList(): void {
    this.retrieveFeatureToggles();
    this.currentFeatureToggle = {};
    this.currentIndex = -1;
  }

  selectFeatureToggle(FeatureToggle: FeatureToggle, index: number): void {
    this.currentFeatureToggle = FeatureToggle;
    this.currentIndex = index;
  }

  searchName(): void {
    this.currentFeatureToggle = {};
    this.currentIndex = -1;

    this.featureToggleService.findFeatureToggleByName(this.name)
      .subscribe(
        data => {
          this.featureToggles = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  removeAllFeatureToggles(): void {
    this.featureToggleService.removeAllFeatureToggles()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  removeFeatureToggle(id: number | undefined): void {
    this.featureToggleService.deleteFeatureToggle(id)
      .subscribe(
        response => {
          console.log(response);
          this.retrieveFeatureToggles();
        },
        error => {
          console.log(error);
        });
  }


}
