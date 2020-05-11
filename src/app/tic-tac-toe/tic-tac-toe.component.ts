import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';
import { Message } from '../Message';

@Component({
    selector: 'app-tic-tac-toe',
    templateUrl: './tic-tac-toe.component.html',
    styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {
    board: string[];
    player: string;
    winner: string;

    constructor(private websocketService: WebsocketService) {
        websocketService.getSocket().subscribe((msg: Message) => {
            switch (msg.type) {
                case 'update':
                    this.board = msg.board;
                    this.player = msg.player;
                    this.winner = msg.winner;
                    break;
                default:
                    console.error('Unsupported event', msg);
            }
        });
    }

    ngOnInit(): void {
    }

    makeMove(index): void {
        this.websocketService.send({
            action: 'make_move',
            index
        });
    }
}
