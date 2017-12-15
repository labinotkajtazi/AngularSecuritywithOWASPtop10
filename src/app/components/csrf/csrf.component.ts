import { Component, OnInit, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { CsrfService } from './csrf.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-csrf',
  templateUrl: './csrf.component.html',
  styleUrls: ['./csrf.component.css']
})

@Injectable()
export class CsrfComponent implements OnInit {
  // public dangerousUrl;
  // public trustedUrl;
  // htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
  subscription: Subscription;
  data = [];
  dataChanged = new Subject<string[]>();
  
  constructor(private sanitizer: DomSanitizer,
              private dataStorageService: DataStorageService,
              private csrfService: CsrfService,
              private router: Router,
              private route: ActivatedRoute) {
    // javascript: URLs are dangerous if attacker controlled.
    // Angular sanitizes them in data binding, but you can
    // // explicitly tell Angular to trust this value:
    // this.dangerousUrl = 'javascript:alert("Hi there")';
    // this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
    
  }

  onSaveData(text: any) {
    this.data.push(text);
    // this.dataChanged.next(this.data.slice());
    // this.csrfService.setData(this.data);
    this.dataStorageService.storeData()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getData();
  }

  ngOnInit() {
    this.subscription = this.csrfService.dataChanged.subscribe(
      (data: any[]) => {
        this.data = data;
      }
    );
    this.data = this.csrfService.getData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
