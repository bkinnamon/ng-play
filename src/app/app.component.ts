import { Component } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Message } from './Message';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor() { }
}
