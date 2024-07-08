import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { AddNewComponent } from './home-screen/add-new/add-new.component';
import { EventsComponent } from './home-screen/events/events.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    // { path: '', pathMatch: 'full', redirectTo: 'home' },
    {path: 'home', component: HomeScreenComponent, children: [

        {path: 'new-event', component: AddNewComponent},
        {path: 'events', component: EventsComponent}
    ]},
];
