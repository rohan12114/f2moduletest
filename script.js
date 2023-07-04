//students data array with dummy values
let studentData = [{ID: 1,
    name: "lucky",
    age: 26,
    gpa: 10,
    degree: "B.TECH",
    email: "lucky@gmail.com"},
{ID: 2,
    name: "mintu",
    age: 26,
    gpa: 9.8,
    degree: "MCA",
    email: "mintu@gmail.com"},
{ID: 3,
    name: "amit",
    age: 26,
    gpa: 8.9,
    degree: "BCA",
    email: "amit@gmail.com"},
{ID: 4,
    name: "bhanu",
    age: 26,
    gpa: 8,
    degree: "M.TECH",
    email: "bhanu@gmail.com"}]

//count to keep tract of Student ID
let count = 4;


//initially calling displayData function to display dummy data
displayData(studentData);

//function to display data whenever user does any manupulation
function displayData(arr){
    let container = document.getElementById("table-id")
    container.innerHTML = ``;
    let str = `
    <tr>
        <td>ID</td>
        <td>Student Name</td>
        <td>Email</td>
        <td>Age</td>
        <td>GPA</td>
        <td>Degree</td>
    </tr>`;
    for(let i = 0;i<arr.length;i++){
        str = str + `<tr>
        <td>${arr[i].ID}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].email}</td>
        <td>${arr[i].age}</td>
        <td>${arr[i].gpa}</td>
        <td class="degree-edit-trash">
        <div>${arr[i].degree}</div>
        <div>
        <button id="edit-button" class="btn" onclick="editData(event)">
        <img src="assets/images/pic.png" id="edit-id${arr[i].ID}" alt="edit">
        </button>
        <button id="trash-button" class="btn" onclick="deleteData(event)">
        <img src="assets/images/trash.png" id="trash-id${arr[i].ID}" alt="trash">
        </button>
        </div>
        </td>
    </tr>
        `
}
    container.innerHTML = str;
}


//function to search student
document.getElementById("search-student-id").addEventListener("keyup",Event=>{
    let searchTerm = document.getElementById("search-student-id").value.trim().toLowerCase();
    let filteredData = studentData.filter(item=>{
        let sName = item.name.toLowerCase();
        let sEmail = item.email.toLowerCase();
        let sDegree = item.degree.toLowerCase();
        console.log(sName,sDegree,sEmail,searchTerm);
        return sName.includes(searchTerm) || sEmail.includes(searchTerm) || sDegree.includes(searchTerm);
    })
    displayData(filteredData);
})

//function to add Student
function addStudent(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let gpa = document.getElementById("gpa").value;
    let degree = document.getElementById("degree").value;
    let obj = { ID: ++count,
        name: name,
        age: age,
        gpa: gpa,
        degree: degree,
        email: email 
}
//push to studentData array
studentData.push(obj);
//display updated array
displayData(studentData);
//empty the input feilds
document.getElementById("name").value = '';
document.getElementById("age").value = '';
document.getElementById("email").value = '';
document.getElementById("gpa").value = '';
document.getElementById("degree").value = '';
}



//function to edit students data
function editData(event){
    //first store the data in variable
    let btnID = event.target.id;  //edit-id
    let extractedID = Number(btnID.substring(7));

    //changing button colour and content
    let toggle = document.getElementById("add-button-id");
    toggle.textContent = '';
    toggle.textContent = 'Edit Student';
    toggle.style.backgroundColor = 'black';
    toggle.style.color = 'white';

    for(let i = 0;i<studentData.length;i++){
        if(studentData[i].ID == extractedID){
            document.getElementById("name").value = studentData[i].name;
            document.getElementById("email").value = studentData[i].email;
            document.getElementById("age").value = studentData[i].age;
            document.getElementById("gpa").value = studentData[i].gpa;
            document.getElementById("degree").value = studentData[i].degree;
            studentData.splice(i,1);
            displayData(studentData);
            break;
        }
    }


    //reverting button to original state
    toggle.addEventListener("click",()=>{
    toggle.textContent = '';
    toggle.textContent = 'Add Student';
    toggle.style.backgroundColor = 'white';
    toggle.style.color = 'black';
    toggle.style.border = '1px solid';
    })
    
}


//function to delete student data
function deleteData(event){
    //document.getElementById("table-id").innerHTML = ``;
    let btnID = event.target.id;  //trash-id
    let extractedID = Number(btnID.substring(8));
    //console.log(extractedID);
    for(let i = 0;i<studentData.length;i++){
        if(studentData[i].ID == extractedID){
            studentData.splice(i,1);
        }
    }
    displayData(studentData);
}









