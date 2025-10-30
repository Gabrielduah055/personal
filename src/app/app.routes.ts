import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'about', component: AboutComponent}, 
    {path: 'privacy-policy', component:PrivacyPolicyComponent},
    { path: 'navbar', component: NavbarComponent },
    {path: 'contact', component:ContactComponent},
    {path: 'footer', component:FooterComponent},
    { path: 'home', component: HomeComponent },
    
    
];
