

//**** Students information for table */


const students = [
    {
        id:'C1234',
        name : "John Doe", 
        country : "London", 
        job: "Full-Stack",
    },

    {
        id: "C2245",
        name: "Jane Doe",
        country: "London",
        job: "Data-Science",
    },

      {
        id: "C2346",
        name: "Mary Ann",
        country:"Paris",
        job:"AWS-Devops",
    },
      {
        id: "C2347",
        name: "Adam Smith",
        country: "Texas",
        job: "AWS-Devops",
    },
      {
        id: "C2444",
        name:"Michael Great",
        country:"Arizona",
        job:"Full-Stack",
    },
      {
        id: "C2555",
        name:"William Cash",
        country:"Manchester",
        job: "Data-Science"
    },
      {
        id: "C2455", 
        name:"Patrick Jane",
        country:"Madrid",
        job:"Full-Stack",
    },

]
window.addEventListener("load", () => {
 
showStudentsHead(table, data);
showStudents(table, students);
})
let table = document.querySelector("table");
let data = Object.keys(students[0]);

const showStudentsHead = (table, data) => {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for(let key of data){
    let th = document.createElement("th")
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th)
  }
}
const showStudents = (table, data) => {
for(let element of data) {
  let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}







































// const showStudents = (student, data) => {
//   let tbl = document.querySelector("table")  
//   let table = document.getElementById("myTable");
    
//     for(let i = 0; i < students.length; i++){
//         const row = document.createElement("tr");
        
//         for(let j = 0; j < 4 ; j++){
//           const cell = document.createElement("td");
//           const cellText = document.createTextNode(key)
//           cell.appendChild(cellText)
//           row.appendChild(cell)
//         }
//         table.appendChild(row);
//     }
//     tbl.appendChild(table);
//     document.body.appendChild(tbl);
  

// }






//***  variables */

// const randomBtn = document.querySelector(".random-btn");


// const showStudents = (student) => {
//     const item = students[student];
    
// }

// let startItem = 0;
// randomBtn.addEventListener("click", () => {
//     startItem++;
//     if(startItem > students.length-1){
//         alert("allready students added")
//     }

//     let x = document.createElement("table");
//     x.setAttribute("id", "myTable");
//     document.body.append(x);

//     let y = document.createElement("tr");
//     y.setAttribute("id", "myTr");
//     document.getElementById("myTable").appendChild(y);

//     let z = document.createElement("td");
//     let t = document.createTextNode(`${showStudents(startItem)}`)
//     z.appendChild(t);
//     document.getElementById("myTr").appendChild(z);
   
// } )