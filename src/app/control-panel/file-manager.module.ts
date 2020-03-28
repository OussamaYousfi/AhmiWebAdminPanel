import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

import { FileDocumentsComponent } from './file-documents/file-documents.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [FileDocumentsComponent],
	imports: [
		CommonModule,
		NgxEchartsModule,
		RouterModule
	]
})
export class FileManagerModule { }
