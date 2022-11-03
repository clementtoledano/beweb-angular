import { NgModule } from '@angular/core';

import { NotFoundPageRoutingModule } from './not-found-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { NotFoundPage } from './not-found.page';

@NgModule({
  imports: [SharedModule, NotFoundPageRoutingModule],
  declarations: [NotFoundPage],
})
export class NotFoundPageModule {}
