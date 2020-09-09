import { Component, OnInit } from '@angular/core';
import { ModeService } from 'src/_services/mode.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  missionpatch_: any;
   // tslint:disable-next-line:variable-name
  LaunchSuccessFilter_: any;
     // tslint:disable-next-line:variable-name
  LaunchLandFilter_: any;
  // tslint:disable-next-line:variable-name
  all_: any;
  abcd: any;
  constructor(
    private mainService: ModeService
  ) { }


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.Profile();
    this.Success();
    this.LaunchFilter();
    this.allFilter();
  }
  // tslint:disable-next-line:typedef
  Profile() {
    this.mainService.getProfile().subscribe((data) => {
      this.missionpatch_ = data;
      console.log('this.missionpatch_', this.missionpatch_);
  });
}
 // tslint:disable-next-line:typedef
 Success() {
  this.mainService.LaunchSuccessFilter().subscribe((data) => {
    this.LaunchSuccessFilter_ = data;
    console.log('this.LaunchSuccessFilter_', this.LaunchSuccessFilter_);
});
}
 // tslint:disable-next-line:typedef
 LaunchFilter() {
  this.mainService.LaunchLandFilter().subscribe((data) => {
    this.LaunchLandFilter_ = data;
    console.log('this.LaunchLandFilter_', this.LaunchLandFilter_);
});
}
 // tslint:disable-next-line:typedef
allFilter(){
  this.mainService.All().subscribe((data) => {
    this.all_ = data;
    console.log('this.all_', this.all_);
});
}

// tslint:disable-next-line:typedef
getDetails() {
  console.log(this.missionpatch_.launch_success );
  const displayName = this.missionpatch_.launch_success;
  this.missionpatch_.subscribe((res) => {
      this.abcd = res;
      const list = this.abcd.filter(
          (x) => x.launch_success === displayName
      )[0].launch_success;
  });
}
}
