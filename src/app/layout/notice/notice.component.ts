import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-grid',
    templateUrl: './notice.component.html',
    styleUrls: ['./notice.component.scss'],
    animations: [routerTransition()]
})
export class NoticeComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
