import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZVaultComponent } from './z-vault/z-vault.component';
import { HomeComponent } from './home/home.component';
import { TemplatesComponent } from './templates/templates.component';
import { ContactsComponent } from './contacts/contacts.component';

// Define routes
const routes: Routes = [
    // Default route to ZVaultComponent
    { path: '', component: ZVaultComponent },
    // Route to HomeComponent
    { path: 'home', component: HomeComponent },
    // Route to TemplatesComponent
    { path: 'template', component: TemplatesComponent },
    // Route to ZVaultComponent
    { path: 'zVault', component: ZVaultComponent },
    // Route to ContactsComponent
    { path: 'contacts', component: ContactsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulesRoutingModule { }
