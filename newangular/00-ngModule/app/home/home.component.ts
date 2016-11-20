import { Component, ViewEncapsulation } from '@angular/core';
//import { MyService } from './../services/my.service';
import { EmployeeDetails } from './../services/employee.service';
import { FormsModule }   from '@angular/forms';

@Component({
    selector: 'home',
	encapsulation: ViewEncapsulation.Native,
	styles: [`
  	div{
		color: black;
		border-radius: 15px;
		border: 1px solid white;
		text-align: left;
		background: white;
		margin: 15px;
		padding: 10px 10px 10px 10px;
	}
  `],
    template: `
    			<div>
    			<h2>Child Component !</h2>
               	<!--<h3>My Service Id = {{myService.id}}</h3>-->
			   	<span>Name : </span><input [(ngModel)]="name" />
			   	<br>
			   	<br>
			   	<span>Role : </span><input [(ngModel)]="role" />
			   	<br>
			   	<br>
			   	<span>Is active : </span><input [(ngModel)]="isActive" />
			   	<br>
			   	<br>
			   	<button (click)="insertEmployee()">Submit</button>
			   	</div>
			   `
})
export class Home {
	private name;
	private role;
	private isActive;
    constructor(private employeeService: EmployeeDetails) {

    }

    insertEmployee(){
    	if(this.name != "" && this.role != "" && this.isActive != ""){
    		this.employeeService.emloyeeDetails.push({
    			Name: this.name,
    			Role: this.role,
    			Active: this.isActive
    		});

    		this.name = "";
    		this.role = "";
    		this.isActive = "";
    	}
    }

}