

document.getElementById("time").innerHTML = dateTimeFormat();

function dateTimeFormat(){
    let date = new Date();
    console.log()
    return date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay()
            +" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}

