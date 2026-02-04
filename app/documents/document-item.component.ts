import { Component, Input } from '@angular/core';
import { Document } from '../documents/document.model';   // ← this line

@Component({
  selector: 'cms-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})
export class DocumentItemComponent {
  @Input() document!: Document;   // ← note: ! = non-null assertion (or use ? if you prefer)
}