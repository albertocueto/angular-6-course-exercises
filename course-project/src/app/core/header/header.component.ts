import {Component} from '@angular/core';
import {DataStorageService} from '../../services/data-storage.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent {
  constructor(
      private dataStorageService: DataStorageService,
      private authService: AuthService
  ) {}

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
        (response: any) => {
          console.log(response);
        }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
