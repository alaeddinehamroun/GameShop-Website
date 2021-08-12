import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private fragment: string;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.fragment = this.activatedRoute.snapshot.fragment;

    }

}
