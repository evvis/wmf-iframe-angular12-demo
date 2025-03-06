import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'iframe-example',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss'],
})
export class IframeComponent implements OnInit {
  requiredLink: SafeResourceUrl = '';
  insideIframe = false;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.insideIframe = window !== window.parent;

    this.requiredLink = this.sanitizer.bypassSecurityTrustResourceUrl(
      `http://localhost:5558/`
    );
  }
}
