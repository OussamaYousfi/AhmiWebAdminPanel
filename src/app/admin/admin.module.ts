import { NgModule, ApplicationModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { routing } from './admin.routing';
import { NgxEchartsModule } from 'ngx-echarts';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from 'ng-fullcalendar';

import { AdminComponent } from './admin/admin.component';
import { FileManagerModule } from '../control-panel/file-manager.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
	imports: [
		CommonModule,
		routing,
		NgxEchartsModule,
		LayoutModule,
		RichTextEditorAllModule,
		NgbModule,
		FullCalendarModule,
		FileManagerModule,
		RouterModule,
	],
	declarations: [
		AdminComponent,
		IndexComponent,	
	]
})
export class AdminModule { }
