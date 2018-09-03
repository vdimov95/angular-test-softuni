import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  profile: Object;

  constructor(
    private homeService: HomeService) { 
    }

  ngOnInit() {
    this.homeService
    .getGitHubProfile('vdimov95')
    .subscribe(data => this.profile = data)
  }

}
