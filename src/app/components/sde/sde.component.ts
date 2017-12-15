import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sde',
  templateUrl: './sde.component.html',
  styleUrls: ['./sde.component.css']
})
export class SdeComponent implements OnInit {
  public lStorageVar: string = "";
  
  constructor() { 
    this.GetFromLocalStorage();
  }

  ngOnInit() {
  }

  SaveToLocalStorage(){
    localStorage.setItem('localVar', JSON.stringify(this.lStorageVar));
  }

  GetFromLocalStorage(){
    this.lStorageVar = JSON.parse(localStorage.getItem('localVar'));
  }

  ClearLocalStorage(){
    localStorage.clear();
    this.GetFromLocalStorage();
  }

  DeleteLocalStorageVariable(key: string){
    localStorage.removeItem(key);
    this.GetFromLocalStorage();
  }
}
