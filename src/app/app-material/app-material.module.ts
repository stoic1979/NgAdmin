import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ]
  declarations: []
})
export class AppMaterialModule { }
