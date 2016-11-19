import { Component, ViewEncapsulation } from '@angular/core';
import { MyService } from './../services/my.service';
import { EmployeeDetails } from './../services/employee.service';
import { FormsModule }   from '@angular/forms';

@Component({
    selector: 'home',
	encapsulation: ViewEncapsulation.Native,
	styles: [`
  	div{
		color: white;
		border-radius: 15px;
		border: 1px solid white;
		text-align: center;
		background: black;
		margin: 15px;
	}
  `],
    template: `<h2>Home Component !</h2>
               <!--<h3>My Service Id = {{myService.id}}</h3>-->
			   <span>Name : </span><input [(ngModel)]="employeeService.Name" />
			   <span>Role : </span><input [(ngModel)]="employeeService.Role" />
			   <span>Is active : </span><input [(ngModel)]="employeeService.Active" />
			   `
})
export class Home {

    constructor(private myService: MyService, private employeeService: EmployeeDetails) {

    }

}