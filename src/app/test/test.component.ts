import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
              <h1 class="text-green">test works! {{name}}</h1>
              <h2 [class]="green"> {{name.toUpperCase()}}</h2>
              <h2 [class.text-red]="hasError"> {{greetingUser()}}</h2>
              <h2 [ngClass]="messageClasses">OI</h2>
              `,
  styles: [`
   .text-green {
     color: green;
   }
   .text-red {
     color: red;
   }
   .text-italic {
     font-style: italic;
   }
  
  `]
})
export class TestComponent implements OnInit {

  public name = "Hello"
  public green = 'text-green'
  public hasError = true
  public isSpecial = true
  public messageClasses = {
    "text-green": !this.hasError,
    "text-red": this.hasError,
    "text-italic": this.isSpecial
  }
  constructor() { }

  ngOnInit() {
    //console.log(this.greetingUser() )
  }

  greetingUser() {
    return "Ola novamente" + this.name;
  }

}
