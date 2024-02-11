import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '.app-servers',
  // selector: '[app-servers]',
  // template:
  //   `
  //     <app-server></app-server>
  //     <app-server></app-server>
  //   `,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName: string = '';
  serverCreationStatus = 'No server was created!';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
    this.serverCreated = true;
  }

  onUpdateServerName(evt: Event) {
    this.serverName = (<HTMLInputElement>evt.target).value;
  }
}
