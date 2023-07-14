let xmlhttp = new XMLHttpRequest();
let apirequesturl = "https://api.github.com/users/kamranahmedse";
xmlhttp.open("GET", apirequesturl);
xmlhttp.send();
xmlhttp.onreadystatechange=()=>{
    console.log(xmlhttp.readyState)
    if (xmlhttp.readyState===4){
       const data = JSON.parse(xmlhttp.responseText);
        console.log(data.followers);
    }
}