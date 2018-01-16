import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrComponent } from './err/err.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [ErrComponent]
})
export class ErrModule { }
