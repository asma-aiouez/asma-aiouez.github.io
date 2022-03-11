/**
 * person.js
 */
import { dateFormt } from "./date.js";
export class Person{
    constructor(name, dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    getName(){
        return this.name;
    }
    setName(n){
        this.name = n;
    }
    getDateOfBirth(){
        return this.dateOfBirth
    }
    setDateOfBirth(d){
        this.dateOfBirth = d;
    }
    toString(){
        const date = dateFormt(this.getDateOfBirth());
        return `{ Name: ${this.name}, DateOfBirth: ${date}}`;
    }
}