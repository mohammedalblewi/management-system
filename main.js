function User(id , username, department , level, imageUrl ,salary){
    this.employeeId = id;
    this.fullName = username;
    this.department = department;
    this.level = level;
    this.img = imageUrl;
    this.salary = salary;

    
}

let userOne = new User(10, "Mohammed","Adminstration","Junior" , "ImageURl", 700);

console.log(userOne.employeeId);
console.log(userOne.fullName);
console.log(userOne.department);
console.log(userOne.level );
console.log(userOne.img);
console.log(userOne.salary);


//////////////////////////////////////////////////////////////////////////////////


function Test(EmplyeeID , FullNAme, DeparTment, LeVel){
 
    this.d = EmplyeeID;
    this.nam = FullNAme;
    this.dep = DeparTment;
    this.lev = LeVel;

}

let UsrTwo = new Test(1000, "Ghazi Samer", "Adminstration", "Senior");

let UsrThree = new Test(1001, "Lina Ali", "Finance", "Senior");

let UsrFour = new Test(1002, "Tamara Ayoub", "Markiting", "Senior");

let UsrFive = new Test(1003, "Safi Walid", "Adminstration", "Mid-Senior");

let UsrSix = new Test(1004, "Omar Ziad", "Develepment", "Senior");

let UsrSeven = new Test(1005, "Rana Saleh", "Develepment", "Junior");

let UsrEight = new Test(1006, "Hadi Ahmad", "Finance", "Mid-Senior");

console.log(`${UsrTwo.d} | ${UsrTwo.nam} | ${UsrTwo.dep} | ${UsrTwo.lev}`);

console.log(`${UsrThree.d} | ${UsrThree.nam} | ${UsrThree.dep} | ${UsrThree.lev}`);

console.log(`${UsrFour.d} | ${UsrFour.nam} | ${UsrFour.dep} | ${UsrFour.lev}`);

console.log(`${UsrFive.d} | ${UsrFive.nam} | ${UsrFive.dep} | ${UsrFive.lev}`);

console.log(`${UsrSix.d} | ${UsrSix.nam} | ${UsrSix.dep} | ${UsrSix.lev}`);

console.log(`${UsrSeven.d} | ${UsrSeven.nam} | ${UsrSeven.dep} | ${UsrSeven.lev}`);

console.log(`${UsrEight.d} | ${UsrEight.nam} | ${UsrEight.dep} | ${UsrEight.lev}`);

