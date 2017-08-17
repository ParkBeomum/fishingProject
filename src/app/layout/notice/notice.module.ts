import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeRoutingModule } from './notice-routing.module';
import { NoticeComponent } from './notice.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        NoticeRoutingModule,
        PageHeaderModule
    ],
    declarations: [NoticeComponent]
})
export class NoticeModule { }
