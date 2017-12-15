import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CsrfService {
  data = [];
  dataChanged = new Subject<any[]>();

  constructor() { }

  setData(data: any[]){
    this.data = data;
    this.dataChanged.next(this.data.slice());
  }

  getData(){
    return this.data.slice();
  }

  getCertainData(index: number){
    return this.data[index];
  }

  addData(data: any){
    this.data.push(data);
    this.dataChanged.next(this.data.slice());
  }
}
