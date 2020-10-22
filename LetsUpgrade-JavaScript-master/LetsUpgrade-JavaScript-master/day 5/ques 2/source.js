    class User {
        constructor(name, age,email) {
          this.name = name;
          this.age = age;
          this.email = email;
          this.luCoins = 0;
          this.courses = [];
        }
    
        login(){
            console.log(`${this.name} has logged in`);
            return this;
        }
        logout(){
            console.log(`${this.name} has logged out`);
            return this;
        }
        addCoins(){
            this.luCoins++;
            console.log(`${this.name} has ${this.luCoins} coins`);
            return this;
        }
        delCoins(){
            this.luCoins--;
            console.log(`${this.name} has ${this.luCoins} coins`);
            return this;
        }
        getDetails(){
            console.log(`Name is ${this.name}, email is ${this.email}details`);
            return this;
        }
    }

    
    class Moderator extends User{
        constructor(name,age,email,role){
            super(name,age,email);
            this.role = role;
        }
        }
    
    class Admin extends Moderator{
       addCourse(user,course){
           user.courses.push(course);
           console.log(user);
       }
    }
    
    
    let userss = new User(prompt('enter the user name','age','email'));
    let mod = new Moderator(prompt('enter the user name','age','email','Moderator'));
    let admin = new Admin(prompt('enter the user name','age','email'));
    let users = [userss,mod,admin];
    
    
    
    userss.login().addCoins().addCoins().getDetails().logout();
    
    mod.deleteUser(userss);
    console.log(userss);
    