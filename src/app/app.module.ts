import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { NewsComponent }      from './pages/news/news.component';

import { DataLoaderService } from './providers/data-loader.service';

//navigating pages
const routes: Routes = [
  { path: '', redirectTo: 'analytics', pathMatch: 'full' },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'news', component: NewsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DataLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
