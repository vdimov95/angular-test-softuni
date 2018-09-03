import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeService } from './home/home.service';
import { HomeModule } from './home/home.module';
import { AppRoutesModule } from './app.routes.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, 
    HomeModule, 
    FormsModule,
    AppRoutesModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
