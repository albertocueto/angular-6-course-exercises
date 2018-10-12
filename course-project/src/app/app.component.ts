import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipes';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCdEz8eETwFV71tBieyTEiPX_tr4t6syW8',
      authDomain: 'udemy-course-ng-recipe-b-bad84.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
