import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ErrModule } from './err/err.module';
import { ReviewsModule } from './reviews/reviews.module';
import { DashGuard } from './dashboard/dash.guard';
import { ContactModule } from './contact/contact.module';
import { HttpClientModule } from '@angular/common/http';
import { ChatappModule } from './chatapp/chatapp.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    ErrModule,
    ReviewsModule,
    HttpClientModule,
    ContactModule,
    ChatappModule
  ],
  providers: [DashGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
