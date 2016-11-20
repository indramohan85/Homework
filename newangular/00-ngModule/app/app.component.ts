import { Component, ViewEncapsulation } from '@angular/core';
import { EmployeeDetails } from './services/employee.service';
import {Input} from '@angular/core';

@Component({
  selector: 'my-app',
  encapsulation: ViewEncapsulation.Native,
  styles: [`
  	div{
		color: corflowerblue;
		border-radius: 15px;
		border: 1px solid darkseagreen;
		text-align: left;
		background: white;
		margin: 25px;
		padding: 10px 10px 10px 10px;
	},
	table{
		width:100%;
		text-align: left;
	}
  `],
  template: `
    <div>
		<h2>Parent Component</h2>
		<hr>
			<span *ngFor="let employee of employeeService.emloyeeDetails">
				<b>Name :</b> {{employee.Name}}
				<br>
				<b>Role :</b> {{employee.Role}}
				<br>
				<b>Is active :</b> {{employee.Active}}
				<hr>
			</span>
		<!--<span>Name : </span><input [(ngModel)]="employeeService.Name" />
		<span>Role : </span><input [(ngModel)]="employeeService.Role" />
		<span>Is active : </span><input [(ngModel)]="employeeService.Active" />
		<p>Service property value :{{employeeService.emloyeeDetails}}</p>-->
    </div>
    <div>
    	<home></home>
    </div>
  `
})
export class AppComponent {
	constructor(private employeeService: EmployeeDetails) {
		console.log('In app component');
  }
}

