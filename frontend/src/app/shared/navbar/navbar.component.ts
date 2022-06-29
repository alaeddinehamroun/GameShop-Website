import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Location,  } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(public location: Location, private element : ElementRef,private modalService: NgbModal, private authService: AuthService,private router: Router) {
        this.sidebarVisible = false;
    }

    ngOnInit() {

        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        console.log(this.authService.isLoggedIn())
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    removeLeftNav() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '/login' || titlee === '/register') {
            return false;
        }
        else {
            return true;
        }
    }
    navigateTo(anchor: string) {
        this.router.navigate([''], { fragment: anchor });
    }
    
    
   
}
