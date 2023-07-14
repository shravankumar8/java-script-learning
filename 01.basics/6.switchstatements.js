var role = "admin"
switch (role) {
    case "admin": console.log("you have full access");
        fullaccess = true;
        break;
    case "subadmin": console.log("you have can only data");
        dataaccess = true;
        fullaccess = false
        break;
        case "moderator": console.log("you have very limited access");
        limitedaccess = true;
        fullaccess = false;
        dataaccess = false;
        break;


    default: console.log("who the hell are you ")
        break;
    
}