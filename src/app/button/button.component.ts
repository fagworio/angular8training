import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button (click)="onClick($event)">{{butonName}}</button> {{greeten}}
  <button (click)="greeten = 'oi'">{{butonName}}</button>
  `,
  styles: [`
  
  
  `]
})
export class ButtonComponent implements OnInit {
public butonName = 'Clicke em min vadia!' 
public greeten = ""
  constructor() { }

  ngOnInit() {
  }

  onClick(e) {
    
    console.log('Welcome again!', e)
    this.greeten = e.type
  }

}
