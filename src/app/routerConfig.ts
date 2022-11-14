import { Routes } from '@angular/router';
import { DetailsComponent } from './exo3/details/details.component';

const appRoutes: Routes = [
    {
        path: 'details/:id',
        component: DetailsComponent
    }
];
export default appRoutes;