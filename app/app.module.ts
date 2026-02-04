import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentListComponent } from './documents/document-list.component';
// import { DocumentDetailComponent } from './documents/document-detail.component';
import { DocumentItemComponent } from './documents/document-item.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DocumentsComponent,
    DocumentListComponent,
    // DocumentDetailComponent,
    DocumentItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }