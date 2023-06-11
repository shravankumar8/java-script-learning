
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
    
}
module.exports = User;