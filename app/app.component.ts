import { Component, ViewEncapsulation } from '@angular/core';

import { EmployeeDetails } from './services/employee.service';


@Component({
  selector: 'my-app',
  encapsulation: ViewEncapsulation.Native,
  styles: [`
  	div{
		color: corflowerblue;
		border-radius: 15px;
		border: 1px solid darkseagreen;
		text-align: center;
		background: white;
		margin: 25px;
	}
  `],
  template: `
    <div>
		<h2>App Component</h2>
		<tr>
		<span>Name : </span><input [(ngModel)]="employeeService.Name" />
		<span>Role : </span><input [(ngModel)]="employeeService.Role" />
		<span>Is active : </span><input [(ngModel)]="employeeService.Active" />
		<tr>
		<home></home>
		<tr>
		<!--<p>Service property value :{{employeeService.emloyeeDetails}}</p>-->
    </div>
  `
})
export class AppComponent {
	constructor(private employeeService: EmployeeDetails) {
		console.log('In app component');
  }
}

