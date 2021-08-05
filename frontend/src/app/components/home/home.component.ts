import { Component, OnInit, Renderer2 } from '@angular/core';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class HomeComponent implements OnInit {
 
    constructor( private renderer : Renderer2) {}

    ngOnInit() {
    }

}
