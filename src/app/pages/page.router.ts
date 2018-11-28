import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './page.component';

// pages
import { DashboardComponent } from './dashboard/dashboard.component';




const pagesRouter: Routes = [
    {
        path: '',
        component: PageComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRouter );
