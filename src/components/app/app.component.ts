import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'im-engine',
    templateUrl: './app.tpl.html',
    directives: [ROUTER_DIRECTIVES, HeaderComponent]
})  
export class AppComponent implements OnInit {
    private title: string;

    constructor(private titleService: Title){
        this.titleService = titleService;
        this.title = 'ImEngine: Reports';
    }

    public ngOnInit(): void {
        this.titleService.setTitle(this.title);
    }
}