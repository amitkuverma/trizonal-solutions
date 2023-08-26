import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { KeyValuePipe } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component'


@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    KeyValuePipe,
    LoaderComponent
  ],
  providers: [KeyValuePipe]
})
export class SharedModule { }
