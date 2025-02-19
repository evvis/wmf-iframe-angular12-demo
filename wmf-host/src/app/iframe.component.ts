import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'iframe-example',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss'],
})
export class IframeComponent implements OnInit {
  requiredLink: SafeResourceUrl = '';
  insideIframe = false;
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.insideIframe = window !== window.parent;

    console.log(this.route.snapshot);
    const segment = this.route.snapshot.url
      .map((segment) => segment.path)
      .join('/');
    this.requiredLink = this.sanitizer.bypassSecurityTrustResourceUrl(
      `http://localhost:5555/${segment}/`
    );

    console.log(this.requiredLink);
  }
}
