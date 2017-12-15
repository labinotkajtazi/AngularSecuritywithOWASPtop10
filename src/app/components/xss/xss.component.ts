import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrls: ['./xss.component.css']
})
export class XssComponent implements OnInit {
  public dangerousUrl;
  public trustedUrl;
  HtmlSnippet = '{{ HtmlSnippet }}'
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
  
  constructor(private sanitizer: DomSanitizer) {
    // javascript: URLs are dangerous if attacker controlled.
    // Angular sanitizes them in data binding, but you can
    // explicitly tell Angular to trust this value:
    this.dangerousUrl = 'javascript:alert("XSS attack!")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }

  ngOnInit() {
  }

}