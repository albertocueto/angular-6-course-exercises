import { Component } from '@angular/core';
import {ServersService} from './servers.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = this.serversService.getAppName();
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serversService: ServersService) { }

  onSave() {
    this.serversService.storeServers(this.servers).subscribe(
        (response) => {
          console.log(response);
          },
        (error) => {
          console.log(error);
        }
    );
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onGet() {
    this.serversService.getServers()
      .subscribe(
          (servers: any[]) => {
            console.log(servers);
            this.servers = servers;
          },
          (error) => {
            console.log(error);
          }
      );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
