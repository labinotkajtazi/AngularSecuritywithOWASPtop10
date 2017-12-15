import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-injection',
  templateUrl: './injection.component.html',
  styleUrls: ['./injection.component.css']
})
export class InjectionComponent implements OnInit {
  validText: string[] = ['example','angular','owasp','security'];
  searchText: string = '';
  isValid: boolean = true;
  isInjection: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  checkValidity(){
    if(!this.validText.includes(this.searchText.toLowerCase()) && this.isValid === true)
    {
      this.isInjection = true;
    }
    else if(this.validText.includes(this.searchText.toLowerCase()) && this.isValid === true)
    {
      this.isInjection = false;
    }
    else if(this.searchText === '')
    {
      this.isValid = false;
      this.isInjection = true;
    }
    
  }
}
