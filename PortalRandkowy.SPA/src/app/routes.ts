import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LikesComponent } from './likes/likes.component';
import { MessageComponent } from './message/message.component';
import { UserDetailComponent } from './Users/user-detail/user-detail.component';
import { UsereListComponent } from './Users/usere-list/usere-list.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
        { path: 'uzytkownicy', component: UsereListComponent},
        { path: 'uzytkownicy/:id', component: UserDetailComponent},
        { path: 'polubienia', component: LikesComponent},
        { path: 'wiadomosci', component: MessageComponent},
    ]},
    { path: '**', redirectTo: '', pathMatch: 'full'},
];


