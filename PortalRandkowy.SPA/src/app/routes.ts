import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LikesComponent } from './likes/likes.component';
import { MessageComponent } from './message/message.component';
import { UserDetailComponent } from './Users/user-detail/user-detail.component';
import { UserEditComponent } from './Users/user-edit/user-edit.component';
import { UsereListComponent } from './Users/usere-list/usere-list.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { UserEditResolver } from './_resolvers/user-edit.resolver';
import { UserListResolver } from './_resolvers/user-list.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
        { path: 'uzytkownicy', component: UsereListComponent,
                               resolve: {users: UserListResolver}},
        { path: 'uzytkownicy/:id', component: UserDetailComponent,
                                   resolve: {user: UserDetailResolver}},
        { path: 'uzytkownik/edycja', component: UserEditComponent,
                                        resolve: {user: UserEditResolver}},

        { path: 'polubienia', component: LikesComponent},
        { path: 'wiadomosci', component: MessageComponent},
    ]},
    { path: '**', redirectTo: '', pathMatch: 'full'},
];


