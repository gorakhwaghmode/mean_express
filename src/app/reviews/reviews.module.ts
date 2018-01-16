import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RvwComponent } from './rvw/rvw.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule

  ],
  declarations: [RvwComponent]
})
export class ReviewsModule { }
