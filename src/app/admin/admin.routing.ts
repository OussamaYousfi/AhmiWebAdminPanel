import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { IndexComponent } from './index/index.component';
import { FileDocumentsComponent } from '../control-panel/file-documents/file-documents.component';

const routes: Routes = [   
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo:'dashboard'},
            {
                path: 'dashboard',
                children: [
                    { path: '', redirectTo: 'index', pathMatch: 'full' },
                    { path: 'index', component: IndexComponent, data: { title: ':: Lucid Angular :: Dashboard :: Analytical ::' } },
                ]
            },
            {
                path: 'file-manager',
                children: [
                    { path: '', redirectTo: 'file-documents', pathMatch: 'full' },
                    { path: 'file-documents', component: FileDocumentsComponent, data: { title: ':: Lucid Angular :: File Manager :: Documents ::' } },
                ]
            },
        ]
    },
    
];

export const routing = RouterModule.forChild(routes);