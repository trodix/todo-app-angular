import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ROOT_REDUCERS } from './store/reducers';
import { AuthEffects } from './auth/store/effects/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,

    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([
      AuthEffects
    ]),

    // Keep it at the end
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
