import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
.online{
color: red;
}
`]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }
  getColor() {
    this.serverStatus === 'online' ? 'green' : 'red'
  }
  //getServiceStatus() {
   // return this.serverStatus;
  //
}
