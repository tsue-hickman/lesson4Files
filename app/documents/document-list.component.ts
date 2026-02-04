import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from './document.model';   // ← this line

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent {
  documents: Document[] = [                     // ← Document[] now recognized
    new Document(1, 'Policy Handbook', 'Company policies 2025', 'https://example.com/handbook.pdf'),
    new Document(2, 'Q1 Report', 'Financial summary Q1', 'https://example.com/q1-report.pdf'),
    new Document(3, 'Meeting Notes 2026-01', 'Jan team meeting', 'https://example.com/notes-jan.pdf'),
    new Document(4, 'Project Plan', '2026 roadmap', 'https://example.com/roadmap.pdf'),
  ];

  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}