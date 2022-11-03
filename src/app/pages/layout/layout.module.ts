import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { LayoutPageRoutingModule } from './layout-routing.module';

import { LayoutPage } from './layout.page';

@NgModule({
    imports: [SharedModule, LayoutPageRoutingModule],
    declarations: [LayoutPage],
    // providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class LayoutPageModule {}
