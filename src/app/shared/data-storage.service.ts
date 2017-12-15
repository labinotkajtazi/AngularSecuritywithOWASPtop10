import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import { AuthService } from '../auth/auth.service';
import { CsrfService } from '../components/csrf/csrf.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private authService: AuthService,
              private csrfService: CsrfService) {
    
  }

  
}