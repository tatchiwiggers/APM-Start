
// we need to import the component decorator from the angular library
import { Component } from '@angular/core';
// the order of how you buid components dont matter but it is more intuitive to start with the class
// the component decorator is a function that allows you to mark a class
// as an Angular component and provide additional metadata that determines 
// how the component should be processed, instantiated and used at runtime. 
// Components are the most basic building block of an UI in an Angular application.
// it can take many parameters: https://angular.io/api/core/Component#description
// SELECTOR: A selector is one of the properties of the object that we use along with
// the component configuration. A selector is used to identify each component uniquely
// into the component tree, and it also defines how the current component is represented
// in the DOM.
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// follow convention naming 
export class AppComponent {
  title = 'Angular: Getting Started!!';
}
