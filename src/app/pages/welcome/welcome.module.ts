import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';


import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    // BrowserModule,
    // IconsProviderModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    NzButtonModule,
    NzGridModule,
    NzFormModule,
    NzInputModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
