import {Component, OnInit} from '@angular/core';
import {FeatureToggleService} from "../../../services/feature-toggle.service";
import {FeatureToggle} from "../../../models/feature-toggles.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-feature-toggle-details',
  templateUrl: './feature-toggle-details.component.html',
  styleUrls: ['./feature-toggle-details.component.css']
})
export class FeatureToggleDetailsComponent implements OnInit {

  currentFeatureToggle: FeatureToggle = {
    name: '',
    active: false,
  };
  message = '';

  constructor(private featureToggleService: FeatureToggleService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.message = '';
    this.getFeatureToggle(this.route.snapshot.params['id']);
  }

  getFeatureToggle(id: number): void {
    this.featureToggleService.getFeatureToggle(id)
      .subscribe(
        data => {
          this.currentFeatureToggle = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateFeatureToggle(): void {
    console.log(this.currentFeatureToggle);
    this.featureToggleService.updateFeatureToggle(this.currentFeatureToggle.id, this.currentFeatureToggle)
      .subscribe(
        response => {
          console.log("reponse from server", response);
          this.message = 'The FeatureToggle was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateActiveStatus(active: boolean): void {
    const data = {
      name: this.currentFeatureToggle.name,
      active: active
    };

    this.featureToggleService.updateFeatureToggle(this.currentFeatureToggle.id, data)
      .subscribe(
        response => {
          this.currentFeatureToggle.active = active;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  removeFeatureToggle(): void {
    this.featureToggleService.deleteFeatureToggle(this.currentFeatureToggle.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/feature-toggles']);
        },
        error => {
          console.log(error);
        });
  }

}
