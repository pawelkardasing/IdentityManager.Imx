import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoeContactComponent } from './coe-contact/coe-contact.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { PopupSupportWindowComponent } from './popup-support-window/popup-support-window.component';


@NgModule({
  declarations: [
    CoeContactComponent,
    InstructionsComponent,
    NewsletterComponent,
    PopupSupportWindowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoeContactComponent,
    InstructionsComponent,
    NewsletterComponent,
    PopupSupportWindowComponent
  ]
})
export class SupportModule { }
