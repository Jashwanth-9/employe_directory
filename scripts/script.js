function employee(ar){
  var employ_main = {
    src: "",
    FirstName: "",
    LastName: "",
    JobTitle: "",
    PreferredName: "",
    Department: "",
    PhoneNumber: 1,
    email: "",
    SkypeID: 1,
    office: "",
    src1: "assets/card-end.jpg",
}

  employ_main.src=ar[0];
  employ_main.FirstName=ar[1];
  employ_main.LastName=ar[2];
  employ_main.JobTitle=ar[3];
  employ_main.PreferredName=ar[4];
  employ_main.Department=ar[5];
  employ_main.PhoneNumber=ar[6];
  employ_main.email=ar[7];
  employ_main.SkypeID=ar[8];
  employ_main.office=ar[9];
  
  return employ_main;
};

var employees = [
  employee(["assets/img-1.jpg","Antony ","Morris","SharePoint Practice Head","Antony","IT Department",9876543210,"abc@gmail.com",3421783,"Seattle"]),
  employee(["assets/img-2.jpg","Helen ","Zipperman","Operations Manager","Helen","IT Department",9876543210,"abc@gmail.com",3421783,"Seattle"]),
  employee(["assets/img-3.jpg","Jonathan ","Smith","Product Manager","Jonathan","IT Department",9876543210,"abc@gmail.com",3421783,"India"]),
  employee(["assets/img-4.jpg","Angela ","Bailey","Talent Manager Jr.","Angela","HR Department",9876543210,"abc@gmail.com",3421783,"India"]),
  employee(["assets/img-5.jpg","Tami ","Hopkins","Lead Engineer Dot Net","Tami","IT Department",9876543210,"abc@gmail.com",3421783,"India"]),
  employee(["assets/img-6.jpg","Franklin ","Humark","Network Engineer","Franklin","IT Department",9876543210,"abc@gmail.com",3421783,"India"]),
  employee(["assets/img-7.jpg","Olivia ","Watson","UI Designer","Olivia","UX Department",9876543210,"abc@gmail.com",3421783,"India"]),
  employee(["assets/img-8.jpg","Robert ","Mitchell","Software Engineer","Robert","IT Department",9876543210,"abc@gmail.com",3421783,"India"])
];

if (localStorage.getItem("employees") == null) {
  localStorage.setItem("employees", JSON.stringify(employees));
}

function each_card (cards){
  let all=cards.map((card) => {
    return `<div class="card">      
    <img class="card-img" src= ${card.src}>
    <div class="card-content">
      <p class="text-small text-bold">${card.FirstName}${card.LastName}</p>
      <p class="text-smaller">${card.JobTitle}</p>
      <p class="text-smaller">${card.Department}</p>
      <img src=${card.src1} alt="card-end" class="end-img">
    </div>
 </div>`;
  }).join(" ");
  return all;
}

let employees_local = JSON.parse(localStorage.getItem("employees"));
let cards = each_card(JSON.parse(localStorage.getItem("employees")));

let employeecards = document.getElementsByClassName("fourth-section")[0];
employeecards.innerHTML = cards;

function depart(ar) {
  let new_department = {
    department:"",
    num: 1,
  };

  new_department.department=ar[0];
  new_department.num=ar[1];

  return new_department;

};

var departments = [
  depart(["IT",6]),
  depart(["Human Resources",1]),
  depart(["UX",1]),
  depart(["Sales",1])
];

if (localStorage.getItem("departments_local") == null) {
  localStorage.setItem("departments_local", JSON.stringify(departments));
}

let departments_local = JSON.parse(localStorage.getItem("departments_local"));
var dep_all = departments_local
  .map((department) => {
    return (
      '<li class="dep-name">' +
      department.department +
      "(" +
      department.num +
      ")" +
      "</li>"
    );
  })
  .join(" ");

document.getElementsByClassName("primary-list")[0].innerHTML += dep_all;

function new_job(ar) {
  let job = {
    job: "",
    num: 1
  };

  job.job=ar[0];
  job.num=ar[1];

  return job;

}

var jobs = [
  new_job(["SharePoint Practice Head",1]),
  new_job(["Operations Manager",1]),
  new_job(["Product Manager",1]),
  new_job(["Talent Manager Jr.",1]),
  new_job(["Lead Engineer Dot Net",1]),
  new_job(["Network Engineer",1]),
  new_job(["UI Designer",1]),
  new_job(["Software Engineer",1])
];

if (localStorage.getItem("jobs") == null) {
  localStorage.setItem("jobs", JSON.stringify(jobs));
}

let job_all = JSON.parse(localStorage.getItem("jobs"))
  .map((job) => {
    return '<li class="job-name">' + job.job + "(" + job.num + ")</li>";
  })
  .join(" ");
job_all += '<li class="text-blue text smaller" id="expand">view more</li>';
job_all += '<li class="text-blue text smaller" id="compress">view less</li>';
document.getElementsByClassName("ternary-list")[0].innerHTML += job_all;
document.getElementById("compress").style.display = "none";
let doc_jobs = document.getElementsByClassName("job-name");
for (let h = 4; h < 8; h++) {
  if(doc_jobs[h]){
  doc_jobs[h].style.display = "none";
  }
}

document.getElementById("expand").addEventListener("click", () => {
  for (let h = 4; h < 8; h++) {
    doc_jobs[h].style.display = "block";
  }
  document.getElementById("compress").style.display = "block";
  document.getElementById("expand").style.display = "none";
});

document.getElementById("compress").addEventListener("click", () => {
  for (let h = 4; h < 8; h++) {
    doc_jobs[h].style.display = "none";
  }
  document.getElementById("compress").style.display = "none";
  document.getElementById("expand").style.display = "block";
});

//Filter through alphabets
let alphas = document.querySelectorAll(".alpha");

var alphabets = alphas.forEach(function (alpha) {
  alpha.addEventListener("click", () => {
    val = alpha.textContent.toLowerCase();
    jobs_all.forEach(function (job) {
      job.style.borderLeft = "none";
      job.style.fontSize = "1vw";
    });
    depart_all.forEach(function (department) {
      department.style.borderLeft = "none";
      department.style.fontSize = "1vw";
    });
    alphas.forEach(function (alpha) {
      alpha.style.border = "none";
    });
    alpha.style.border = "3px solid #061e3f";
    filteredcards = employees_local.filter(function (card) {
      return (
        card.FirstName.toLowerCase().startsWith(val) ||
        card.LastName.toLowerCase().startsWith(val)
      );
    });

    var filtered_employees = each_card(filteredcards);
    document.querySelector(".fourth-section").innerHTML = filtered_employees;
  });
});

//Search through text
let search = document.querySelector("#search");

search.addEventListener("keyup", function (employe) {
  let val = employe.target.value.toLowerCase();

  var filteredcards = employees_local.filter(function (card) {
    return (
      card.FirstName.toLowerCase().startsWith(val) ||
      card.LastName.toLowerCase().startsWith(val)
    );
  });

  var filtered_employees = each_card(filteredcards);
  document.querySelector(".fourth-section").innerHTML = filtered_employees;
});

//clear seach-box
let clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  search.value = "";
  document.querySelector(".fourth-section").innerHTML = cards;
});

//sort by drop-down values
let drop = document.getElementById("drop-down");
drop.addEventListener("change", function (drop) {
  if (drop.target.value == "Preferred Name") {
    var filteredcards = employees_local.sort((a, b) =>
      a.PreferredName < b.PreferredName ? -1 : 1
    );

    var filtered_employees = each_card(filteredcards);
    document.querySelector(".fourth-section").innerHTML = filtered_employees;
  } else if (drop.target.value == "Department") {
    var filteredcards = employees_local.sort((a, b) =>
      a.Department < b.Department ? -1 : 1
    );

    var filtered_employees = each_card(filteredcards);
    document.querySelector(".fourth-section").innerHTML = filtered_employees;
  } else if (drop.target.value == "Job Title") {
    var filteredcards = employees_local.sort((a, b) =>
      a.JobTitle < b.JobTitle ? -1 : 1
    );

    var filtered_employees = each_card(filteredcards);
    document.querySelector(".fourth-section").innerHTML = filtered_employees;
  }
});

//display selected departments
var depart_all = document.querySelectorAll(".dep-name");

depart_all.forEach(function (department) {
  department.addEventListener("click", () => {
    let value = department.textContent.toLowerCase().split("(")[0];
    alphas.forEach(function (alpha) {
      alpha.style.border = "none";
    });
    jobs_all.forEach(function (job) {
      job.style.borderLeft = "none";
      job.style.fontSize = "1vw";
    });
    depart_all.forEach(function (department) {
      department.style.borderLeft = "none";
      department.style.fontSize = "1vw";
    });
    department.style.borderLeft = "2.5px solid black";
    department.style.fontSize = "1.1vw";
    filteredcards = employees_local.filter(function (card) {
      return card.Department.toLowerCase().startsWith(value);
    });
    var filtered_employees = each_card(filteredcards);
    document.getElementsByClassName("fourth-section")[0].innerHTML = filtered_employees;
  });
});

//display selected job
var jobs_all = document.querySelectorAll(".job-name");

jobs_all.forEach(function (job) {
  job.addEventListener("click", () => {
    let value = job.textContent.toLowerCase().split("(")[0];
    alphas.forEach(function (alpha) {
      alpha.style.border = "none";
    });
    depart_all.forEach(function (department) {
      department.style.borderLeft = "none";
      department.style.fontSize = "1vw";
    });
    jobs_all.forEach(function (job) {
      job.style.borderLeft = "none";
      job.style.fontSize = "1vw";
    });
    job.style.borderLeft = "2.5px solid black";
    job.style.fontSize = "1.1vw";
    filteredcards = employees_local.filter(function (card) {
      return card.JobTitle.toLowerCase().startsWith(value);
    });
    var filtered_employees = each_card(filteredcards);
    document.getElementsByClassName("fourth-section")[0].innerHTML = filtered_employees;
  });
});

var input = document.querySelectorAll(".input");
let open = document.getElementById("open");
open.addEventListener("click", () => {
  document.getElementById("container").style.display = "block";
  document.getElementById("add").style.display = "block";
  document.getElementById("save").style.display = "none";
  input[1].value = "";
  input[2].value = "";
  input[3].value = "";
  input[4].value = "";
  input[5].value = "";
  input[6].value = "";
  input[7].value = "";
  input[8].value = "";
});

let close = document.getElementById("close");
close.addEventListener("click", () => {
  document.getElementById("container").style.display = "none";
});

let all_card = JSON.parse(localStorage.getItem("employees"));
let card_all = document.querySelectorAll(".card");
var j;
for (let i = 0; i < all_card.length; i++) {
  card_all[i].addEventListener("click", () => {
    j = i;
    document.getElementById("container").style.display = "block";

    document.getElementById("save").style.display = "block";

    document.getElementById("add").style.display = "none";

    input[1].value = all_card[i].FirstName;
    input[2].value = all_card[i].LastName;
    input[3].value = all_card[i].email;
    input[4].value = all_card[i].JobTitle;
    input[5].value = all_card[i].office;
    input[6].value = all_card[i].Department;
    input[7].value = all_card[i].PhoneNumber;
    input[8].value = all_card[i].SkypeID;
    localStorage.removeItem("employees");
    localStorage.setItem("employees", JSON.stringify(all_card));
  });
}

let save = document.querySelector("#save");
save.addEventListener("click", () => {
  if (
    input[1].value == "" ||
    input[2].value == "" ||
    input[3].value == "" ||
    input[4].value == "" ||
    input[5].value == "" ||
    input[6].value == "" ||
    input[7].value == "" ||
    input[8].value == ""
  ) {
    alert("Fill all the details");
  } else {
    all_card[j].FirstName = input[1].value + " ";
    all_card[j].LastName = input[2].value;
    all_card[j].email = input[3].value;
    all_card[j].JobTitle = input[4].value;
    all_card[j].office = input[5].value;
    all_card[j].Department = input[6].value;
    all_card[j].PhoneNumber = input[7].value;
    all_card[j].SkypeID = input[8].value;
    localStorage.removeItem("employees");
    localStorage.setItem("employees", JSON.stringify(all_card));
  }
});

let add = document.querySelector("#add");
add.addEventListener("click", () => {
  if (
    input[1].value == "" ||
    input[2].value == "" ||
    input[3].value == "" ||
    input[4].value == "" ||
    input[5].value == "" ||
    input[6].value == "" ||
    input[7].value == "" ||
    input[8].value == ""
  ) {
    alert("Fill all the details");
  } else {
    let new_employee=employee(["../assets/img-5.jpg",input[1].value+" ",input[2].value,input[4].value,input[1].value,input[6].value,input[7].value,input[8].value,input[3].value,input[5].value]);
    let employee_array = JSON.parse(localStorage.getItem("employees"));
    employee_array.push(new_employee);
    localStorage.removeItem("employees");
    localStorage.setItem("employees", JSON.stringify(employee_array));

    //Updating Departments Filter
    let new_dep = new_employee.Department;
    if (new_dep.toUpperCase().startsWith("IT")) {
      departments[0].num += 1;
    } else if (new_dep.toUpperCase().startsWith("Human Resources")) {
      departments[1].num += 1;
    } else if (new_dep.toUpperCase().startsWith("UX")) {
      departments[2].num += 1;
    } else if (new_dep.toUpperCase().startsWith("Sales")) {
      departments[3].num += 1;
    }
    localStorage.removeItem("departments_local");
    localStorage.setItem("departments_local", JSON.stringify(departments));

    //Updating Job Filter
    let new_jobs = new_employee.JobTitle;
    if (new_jobs == "SharePoint Practice Head") {
      jobs[0].num += 1;
    } else if (new_jobs == "Operations Manager") {
      jobs[1].num += 1;
    } else if (new_jobs == "Product Manager") {
      jobs[2].num += 1;
    } else if (new_jobs == "Talent Magnet Jr.") {
      jobs[3].num += 1;
    } else if (new_jobs == "Lead Engineer Dot Net") {
      jobs[4].num += 1;
    }
    localStorage.removeItem("jobs");
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }
});
// localStorage.clear();
