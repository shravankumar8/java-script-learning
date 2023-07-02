// Input :Getuserrole(name,role)
// this is siple program which is a switch statement in a function

function getUserRole(name,role){

    switch (role) {
        case "admin":
            return `${name} you have all the admin acces bro `
            
            break;
        case "subadmin":
            return `${name} you have all the subadmin with the acces to create and delete cources`
            
            break;
        case "testprep":
            return `${name} you have all the testprep with acces to create and delete test`
            
            break;
        case "user":
            return `${name} you have the permission to comsume the content`
            
            break;
        case "other":
            return `${name} you have are a trial user shame on you `
            
            break;
    
        default:
            return `the name or role are  not found or exists`

            break;
    }
}

console.log(getUserRole("shravan","other"))