import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPassComponent } from "../users/reset-pass/reset-pass.component";



const routes: Routes = [
    {
        path: 'user/login',
        component: LoginComponent
    },
    {
        path: 'user/logout',
        component: LogoutComponent
    },
    {
        path: 'user/reset-password',
        component: ResetPassComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule
    ]
})
export class UsersRoutingModule { }