import {Injectable} from '@angular/core';

@Injectable()
export class EmployeeDetails{
    //employeeList = [new Employee("Indra","Dev","A"),new Employee("Ritesh","Dev","A"),new Employee("Ravi","Dev","A")];
    //emloyeeDetails = "Indra Mohan Singh";
    emloyeeDetails = [
    {
    	Name: "Indra Mohan Singh",
    	Role: "Developer",
    	Active: "Y"
    },
    {
    	Name: "Ritesh Singh",
    	Role: "Tester",
    	Active: "Y"
    },
    {
    	Name: "Ravi Singh",
    	Role: "Tester",
    	Active: "Y"
    }];
    constructor(){
        
    }
}