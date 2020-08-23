import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TodoReducer } from './shared/components/todo/store/reducers/todo-item.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './shared/components/todo/store/effects/todo-item.effects';
import { RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    HomeModule,

    StoreModule.forRoot({
      todo: TodoReducer
    }),
    EffectsModule.forRoot([
      TodoEffects
    ]),

    AppRoutingModule,

    // Keep it at the end
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
