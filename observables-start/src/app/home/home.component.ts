import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000).pipe(map((data: number) => data * 2 ));
    this.numbersObsSubscription = myNumbers.subscribe(
        (number: Number) => {
          console.log(number);
        }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.complete();
        // observer.error('I\'ve made a huge mistake');
        observer.next('this is a secret that won\'t be shown because observable is donezzo');
      }, 4000);
    });
    this.customObsSubscription = myObservable.subscribe((data: string) => { console.log(data); },
        (error: string) => { console.log(error); },
        () => { console.log('observable completed'); }
    );
  }

  ngOnDestroy() {
    // Always unsubscribe!!
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe()
  }

}
