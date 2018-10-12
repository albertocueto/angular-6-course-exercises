import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changes, new status: ', status);
  }

  constructor() { }
}
