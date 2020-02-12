import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddClassromScreenPageRoutingModule } from './add-classrom-screen-routing.module';

import { AddClassromScreenPage } from './add-classrom-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddClassromScreenPageRoutingModule
  ],
  declarations: [AddClassromScreenPage]
})
export class AddClassromScreenPageModule {}
