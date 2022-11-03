import { NgModule } from '@angular/core';
import { HomePage } from './home.page';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [SharedModule, HomePageRoutingModule],
  declarations: [HomePage],
})
export class HomePageModule {}
