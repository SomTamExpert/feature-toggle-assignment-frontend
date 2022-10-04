import {Component, OnInit} from '@angular/core';
import {FeatureToggle} from "../../../models/feature-toggles.model";
import {FeatureToggleService} from "../../../services/feature-toggle.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-feature-toggle',
  templateUrl: './add-feature-toggle.component.html',
  styleUrls: ['./add-feature-toggle.component.css']
})
export class AddFeatureToggleComponent implements OnInit {

  featureToggle: FeatureToggle = {
    name: '',
    active: true
  }
  submitted = false;

  constructor(private featureToggleService: FeatureToggleService, private router: Router) {
  }

  ngOnInit(): void {
  }

  saveFeatureToggle(): void {
    const data = {
      name: this.featureToggle.name,
      active: this.featureToggle.active
    };

    this.featureToggleService.createFeatureToggle(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
    this.router.navigate(['/feature-toggles']);
  }

  newFeatureToggle(): void {
    this.submitted = false;
    this.featureToggle = {
      name: '',
      active: true
    };
  }

}
