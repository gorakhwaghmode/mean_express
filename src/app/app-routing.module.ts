import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LgnComponent } from './login/lgn/lgn.component'
import { DashComponent } from './dashboard/dash/dash.component';
import { ErrComponent } from './err/err/err.component';
import { RvwComponent } from './reviews/rvw/rvw.component';
import { DashGuard } from './dashboard/dash.guard';
import { ConctComponent } from './contact/conct/conct.component';
import { ChatComponent } from './chatapp/chat/chat.component';

const routesDash: Routes = [
  {path: 'rv', component: RvwComponent}
];

const routes: Routes = [
  {path: '', component: LgnComponent },
  // {path: 'dash', redirectTo: 'dash/def', pathMatch: 'full' },
  {path: 'dash/:usNm', component: DashComponent, children: routesDash, canActivate:[DashGuard] },
  {path: 'err', component: ErrComponent},
  {path:'cnt', component: ConctComponent},
  {path:'cht', component:ChatComponent},
  {path: '**', component: ErrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
