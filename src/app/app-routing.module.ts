import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
    { path: 'landing/', component: LandingComponent },
    { path: '', component: TicTacToeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
