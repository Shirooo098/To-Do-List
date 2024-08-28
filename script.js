
function store(){
    

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let date = document.getElementById("date").value;

    if(title.trim() == "" || description.trim() == "" || date.trim() == ""){
        alert("Please Fill up the Form");
    }

    let data = {
        title: title,
        description: description,
        date: date
    }
    
    let toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];

    toDoList.push(data);

    localStorage.setItem("toDoList", JSON.stringify(toDoList));

    alert("Form Saved Successfully!");

    display();
}


function display(){
    let toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];

    let tableBody = document.querySelector("table tbody");

    tableBody.innerHTML = '';

    toDoList.forEach(data => {
        let row = document.createElement("tr");

        row.innerHTML = 
            `
                <td>${data.title}</td>
                <td>${data.description}</td>
                <td>${data.date}</td>
                <td><button class="btn-delete">Delete</button></td>
            `;

            tableBody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", (event) => {

    display();
})
