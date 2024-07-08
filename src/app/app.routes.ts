import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    // { path: '', pathMatch: 'full', redirectTo: 'home' },
    {path: 'home', component: HomeScreenComponent}
];
