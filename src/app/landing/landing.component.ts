import { Component, OnInit } from '@angular/core';

import { WebsocketService } from '../websocket.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
    lobbyId = '';

    constructor(private websocketService: WebsocketService) { }

    ngOnInit(): void {
    }

    createLobby() {
        this.websocketService.send({action: 'create-lobby'});
    }

    joinLobby() {}
}
