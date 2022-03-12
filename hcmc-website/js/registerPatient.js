/**
 * registerPatient.js
 */
"use strict"
import { Patient } from "./model/patient.js"
$(document).ready(function(){
    const patientsList=[];
    $("#patientForm").submit(function(event){
        event.preventDefault();

        const patientId = $("#patientIdNumber").val();
        const firstName = $("#firstName").val();
        const middleName = $("#middleInitials").val();
        const lastName = $("#lastName").val();
        const dateOfBirth = new Date($("#dateOfBirth").val());
        const department = $("#ddlDepartment").val();
        const isOutPatient = $("input[name='radioIsOutPatient']:checked").val();

        const newPatient = new Patient(patientId, firstName, middleName, lastName, dateOfBirth, department, isOutPatient);
        console.log(newPatient.getDateOfBirth().getFullYear());
        patientsList.push(newPatient);
        
        $("#tbodyPatientsList").append(createRow(newPatient));

       this.reset();
        alert("Patient successfully added!");

    })

    $('input[type=checkbox]').on("change", function(_, el){
        console.log(patientsList);
        const sel = $('input[type=checkbox]:checked').map(function(_, el) {
            return $(el).val();
        }).get();
        if(sel.length == 2){
           // const outElderlyPatientList = patientsList.filter( p => 
             //   {p.getIsOutPatient() == "Yes" && (2022 - p.getDateOfBirth().getFullYear()) > 10});
             const elderlyPatientList = patientsList.filter( p => (2022 - p.getDateOfBirth().getFullYear()) > 65);
             console.log("elderlyPatientList: "+elderlyPatientList)
             const outElderlyPatientList = elderlyPatientList.filter( p => p.getIsOutPatient() == "Yes");
             console.log("outElderlyPatientList: "+outElderlyPatientList)
             $("#tbodyPatientsList").empty();
            outElderlyPatientList.forEach( p => {
                $("#tbodyPatientsList").append(createRow(p));
            })
        }
        else if(sel.length == 1 && sel[0] == "showElderlyPatients"){
            const elderlyPatientList = patientsList.filter( p => (2022 - p.getDateOfBirth().getFullYear()) > 65);
            $("#tbodyPatientsList").empty();
            elderlyPatientList.forEach( p => {
                $("#tbodyPatientsList").append(createRow(p));
            })
        }
        else if(sel.length == 1 && sel[0] == "showOutPatients"){
            const outPatientList = patientsList.filter( p => p.getIsOutPatient() == "Yes");
            $("#tbodyPatientsList").empty();
            outPatientList.forEach( p => {
                $("#tbodyPatientsList").append(createRow(p));
            })  
        }
        else{
            $("#tbodyPatientsList").empty();
            patientsList.forEach( p => {
                $("#tbodyPatientsList").append(createRow(p));
                console.log("appending "+p)
            })  
        }
    })
    function createRow(patient){
        return `<tr class="patientRow">
                    <td>${patient.getPatientId()}</td>
                    <td>${patient.getFirstName()}</td>
                    <td>${patient.getMiddleName()}</td>
                    <td>${patient.getLastName()}</td>
                    <td>${patient.getDateOfBirth()}</td>
                    <td>${patient.getDepartment()}</td>
                    <td>${patient.getIsOutPatient()}</td>
                </tr>`
    }
 
    

});

/*$('#chkShowOutPatients').click(function() {
        if($(this).is(':checked')){
            const outPatientList = patientsList.filter( p => p.getIsOutPatient() == "Yes");
            $("#tbodyPatientsList").empty();
            outPatientList.forEach( p => {
                $("#tbodyPatientsList").append(createRow(p));
            })
        }
        else{
            const notOutPatientList = patientsList.filter( p => !(p.getIsOutPatient() == "Yes"));
            notOutPatientList.forEach( p => {
                $("#tbodyPatientsList").append(createRow(p));
            })
        }     
    });*/

       /*
    $('#chkShowOutPatients').click(function() {
        let trCollection = document.getElementsByTagName("tr");
        for(let i = 1; i < trCollection.length; i++){
            let td = trCollection[i].getElementsByTagName("td")[6];

            if(this.checked && td.textContent === "No"){
                console.log("inside")
                trCollection[i].style.display = "none";
            }else{
                trCollection[i].style.display = "";
            }
        }
    });

    $('#chkElderlyPatients').click(function() {
        let trCollection = document.getElementsByTagName("tr");
        for(let i = 1; i < trCollection.length; i++){
            let td = trCollection[i].getElementsByTagName("td")[4];
            console.log(td.textContent.split(" ")[3])
            const age = 2022 - td.textContent.split(" ")[3];
            (age < 10 && this.checked) ? trCollection[i].style.display = "none" : trCollection[i].style.display = "";
        }
    });

    
    }*/