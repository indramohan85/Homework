import { NgModule } from '@angular/core';
import { Home } from "./home.component";
import { MyService } from './../services/my.service';
import { EmployeeDetails } from './../services/employee.service';
import { FormsModule }   from '@angular/forms';

@NgModule({
	imports: [FormsModule],
    declarations: [Home],
	providers: [MyService,EmployeeDetails],
	exports: [Home]
})
export class HomeModule {
	constructor(){
		console.log('In Home module');
	}

}