import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urf',
  templateUrl: './urf.component.html',
  styleUrls: ['./urf.component.css']
})
export class UrfComponent implements OnInit {
  links = [
    { id:'1', value: "../uckv" },
    { id:'2', value:"../home"}
];

  getLink(url: string){
    return (this.links.find(i => i.id === url)).value;
  }

  ngOnInit() {
  }

}
