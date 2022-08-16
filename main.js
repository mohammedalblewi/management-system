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



let myElement = document.createElement("main");



// myElement.className= "table";

let mainTable = document.createElement("table");

myElement.appendChild(mainTable);

let thead = document.createElement("thead");

mainTable.appendChild(thead);

let th1 = document.createElement("th");
let th2 = document.createElement("th");
let th3 = document.createElement("th");
let th4 = document.createElement("th");
let th5 = document.createElement("th");

let tbody = document.createElement("tbody");

mainTable.appendChild(tbody);

let trRow = document.createElement("tr");


// let td1 = document.createElement("td");
// let td2 = document.createElement("td");
// let td3 = document.createElement("td");
// let td4 = document.createElement("td");
// let td5 = document.createElement("td");

// function th(id, name , dep ,lev ,sal){
    
// }

// console.log(test("mohammed",24));

////////////////////////////////////////////////////////////


let myText1 = document.createTextNode("Employee ID");
let myText2 = document.createTextNode("Full NAME");
let myText3 = document.createTextNode("Department");
let myText4 = document.createTextNode("Level");
let myText5 = document.createTextNode("Salary");

let newTd1 = document.createTextNode("1000");
let newTd2 = document.createTextNode("Ghazi Samer");
let newTd3 = document.createTextNode("Adminstration");
let newTd4 = document.createTextNode("Senior");
let newTd5 = document.createTextNode("800");





////////////////////////////////////////////////////////////
// append mainTable to myElement






thead.appendChild(th1)
thead.appendChild(th2)
thead.appendChild(th3)
thead.appendChild(th4)
thead.appendChild(th5)



// tbody.appendChild(tr);
// tbody.appendChild(td1);


// mainTable.appendChild(tr);


// tr.appendChild(th);


th1.appendChild(myText1);
th2.appendChild(myText2);
th3.appendChild(myText3);
th4.appendChild(myText4);
th5.appendChild(myText5);

// td append to tr

// td1.appendChild(newTd1);
// td2.appendChild(newTd2);
// td3.appendChild(newTd3);
// td4.appendChild(newTd4);
// td5.appendChild(newTd5);


// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);
// tr.appendChild(td4);
// tr.appendChild(td5);

//  document.body.appendChild(myElement);

//  let a =document.body.appendChild(tr)

// for (let i = 0 ; i < 8 ; i++){

//     document.write(a.innerHTML +"<hr>" +"<br>" );
// }


console.log(myElement);


const submit = document.getElementById("submit");

const id = document.getElementById("employee");
const full_name = document.getElementById("full_name");
const imgUrl = document.getElementById("url");

const department = document.getElementById("departments");
const level = document.getElementById("levels");


submit.addEventListener("click", (e) => {
e.preventDefault()

const emp = new Employee(id.value,full_name.value,department.value,level.value,imgUrl.value)
render(id.value,full_name.value,department.value,level.value,emp.salary())
id.value = ""
full_name.value = ""
department.value = department[0].value
level.value = level[0].value
imgUrl.value = ""
})

