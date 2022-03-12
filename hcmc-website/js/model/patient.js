/**
 * patient.js
 */
"use strict"

export class Patient{
    #patientId = null;
    #firstName = null;
    #middleName = null
    #lastName = null;
    #dateOfBirth = null;
    #department = null;
    #isOutPatient = null;
    constructor(patientId, firstName, middleName, lastName, dateOfBirth, department, isOutPatient){
        this.#patientId = patientId;
        this.#firstName = firstName;
        this.#middleName = middleName;
        this.#lastName = lastName;
        this.#dateOfBirth = dateOfBirth;
        this.#department = department;
        this.#isOutPatient = isOutPatient;
    }

    getPatientId(){ return this.#patientId; }
    getFirstName(){ return this.#firstName; }
    getMiddleName(){ return this.#middleName; }
    getLastName(){ return this.#lastName; }
    getDateOfBirth(){ return this.#dateOfBirth; }
    getDepartment(){ return this.#department; }
    getIsOutPatient(){ return this.#isOutPatient; }

}