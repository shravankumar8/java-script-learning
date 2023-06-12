
class User{
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.courcelist = [];
    }
    getinfo() {
        return { Name: this.name ,  email: this.email,registeredcources:this.courcelist }
    }

    enrollcource(...cource) {
        this.courcelist.push(cource);
        
    }
    getcourcelist() {
        return this.courcelist;
    }
    login() {
        return "you are logged in"
    }

    
}
class subadmin extends User{ }//this extend is used to share the class to another class now 
// subadmin share the same object as user class
const tom = new subadmin("shravan","kumashravan5@gmail.com")
console.log(tom.login())
console.log(tom.enrollcource("fucku"))
console.log(tom.getinfo())










module.exports = User;

 