var employees = [
  {
    src: "../assets/img-1.jpg",
    FirstName: "Antony ",
    LastName: "Morris",
    JobTitle: "SharePoint Practice Head",
    PreferredName: "Antony",
    Department: "IT Department",
    PhoneNumber: 9876543210,
    email: "abc@gmail.com",
    SkypeID: 3421783,
    office: "seattle",
    src1: "../assets/card-end.jpg",
  },
  {
    src: "../assets/img-2.jpg",
    FirstName: "Helen ",
    LastName: "Zipperman",
    JobTitle: "Operations Manager",
    PreferredName: "Helen",
    Department: "IT Department",
    PhoneNumber: 9876543210,
    SkypeID: 3421783,
    email: "abc@gmail.com",
    office: "seattle",
    src1: "../assets/card-end.jpg",
  },
  {
    src: "../assets/img-3.jpg",
    FirstName: "Jonathan ",
    LastName: "Smith",
    JobTitle: "Product Manager",
    PreferredName: "Jonathan",
    Department: "IT Department",
    PhoneNumber: 9876543210,
    email: "abc@gmail.com",
    office: "India",
    SkypeID: 3421783,
    src1: "../assets/card-end.jpg",
  },
  {
    src: "../assets/img-4.jpg",
    FirstName: "Angela ",
    LastName: "Bailey",
    JobTitle: "Talent Magnet Jr.",
    PreferredName: "Angela",
    Department: "HR Department",
    PhoneNumber: 9876543210,
    SkypeID: 3421783,
    email: "abc@gmail.com",
    office: "India",
    src1: "../assets/card-end.jpg",
  },
  {
    src: "../assets/img-5.jpg",
    FirstName: "Tami ",
    LastName: "Hopkins",
    JobTitle: "Lead Engineer Dot Net",
    PreferredName: "Tami",
    Department: "IT Department",
    PhoneNumber: 9876543210,
    SkypeID: 3421783,
    email: "abc@gmail.com",
    office: "India",
    src1: "../assets/card-end.jpg",
  },
  {
    src: "../assets/img-6.jpg",
    FirstName: "Franklin ",
    LastName: "Humark",
    JobTitle: "Network Engineer",
    PreferredName: "Franklin",
    Department: "IT Department",
    PhoneNumber: 9876543210,
    SkypeID: 3421783,
    email: "abc@gmail.com",
    office: "India",
    src1: "../assets/card-end.jpg",
  },
  {
    src: "../assets/img-7.jpg",
    FirstName: "Olivia ",
    LastName: "Watson",
    JobTitle: "UI Designer",
    PreferredName: "Olivia",
    Department: "UX Department",
    PhoneNumber: 9876543210,
    SkypeID: 3421783,
    email: "abc@gmail.com",
    office: "Seattle",
    src1: "../assets/card-end.jpg",
  },
  {
    src: "../assets/img-8.jpg",
    FirstName: "Robert ",
    LastName: "Mitchell",
    JobTitle: "Software Engineer",
    PreferredName: "Robert",
    Department: "IT Department",
    PhoneNumber: 9876543210,
    SkypeID: 3421783,
    email: "abc@gmail.com",
    office: "Seattle",
    src1: "../assets/card-end.jpg",
  },
];

if (localStorage.getItem("employees") == null) {
  localStorage.setItem("employees", JSON.stringify(employees));
}

let employees_local = JSON.parse(localStorage.getItem("employees"));
let cards = JSON.parse(localStorage.getItem("employees")).map((card) => {
    return `<div class="card">      
    <img class="card-img" src= ${card.src}>
    <div class="card-content">
      <p class="text-small text-bold">${card.FirstName}${card.LastName}</p>
      <p class="text-smaller">${card.JobTitle}</p>
      <p class="text-smaller">${card.Department}</p>
      <img src=${card.src1} alt="card-end" class="end-img">
    </div>
 </div>`;
  })
  .join(" ");

let employeecards = document.getElementsByClassName("fourth-section")[0];
employeecards.innerHTML = cards;

var departments = [
  {
    department: "IT",
    num: 6,
  },
  {
    department: "Human Resources",
    num: 1,
  },
  {
    department: "UX",
    num: 1,
  },
  {
    department: "Sales",
    num: 1,
  },
];

if (localStorage.getItem("departments_local") == null) {
  localStorage.setItem("departments_local", JSON.stringify(departments));
}

let departments_local = JSON.parse(localStorage.getItem("departments_local"));
var dep_all = departments_local.map((department) => {
    return (
      '<li class="dep-name">' + department.department + "(" + department.num + ")" + "</li>"
    );
  })
  .join(" ");

document.getElementsByClassName("primary-list")[0].innerHTML += dep_all;

var jobs = [
  {
    job: "SharePoint Practice Head",
    num: 1,
  },
  {
    job: "Operations Manager",
    num: 1,
  },
  {
    job: "Product Manager",
    num: 1,
  },
  {
    job: "Talent Magnet Jr.",
    num: 1,
  },
  {
    job: "Lead Engineer Dot Net",
    num: 1,
  },
  // {
  //     "job": "Network Engineer",
  //     "num": 1
  // },
  // {
  //     "job": "UI Designer",
  //     "num": 1
  // },
  // {
  //     "job": "Software Engineer",
  //     "num": 1
  // }
];

if (localStorage.getItem("jobs") == null) {
  localStorage.setItem("jobs", JSON.stringify(jobs));
}

let job_all = JSON.parse(localStorage.getItem("jobs"))
  .map((job) => {
    return '<li class="job-name">' + job.job + "(" + job.num + ")</li>";
  })
  .join(" ");
job_all += '<li><a href="#" class="text-blue text-smaller">view more</a></li>';

document.getElementsByClassName("ternary-list")[0].innerHTML += job_all;

//Filter through alphabets
let alpha = document.querySelectorAll(".alpha");

var alphabets = alpha.forEach(function (alpha) {
  alpha.addEventListener("click", () => {
    val = alpha.textContent.toLowerCase();

    filteredcards = employees_local.filter(function (card) {
      return (
        card.FirstName.toLowerCase().startsWith(val) ||
        card.LastName.toLowerCase().startsWith(val)
      );
    });

    var filtered_employees = filteredcards
      .map((card) => {
        return `<div class="card">
              <img class="card-img" src= ${card.src}>
              <div class="card-content">
                <p class="text-small text-bold">${card.FirstName}${card.LastName}</p>
                <p class="text-smaller">${card.JobTitle}</p>
                <p class="text-smaller">${card.Department}</p>
                <img src=${card.src1} alt="card-end" class="end-img">
              </div>
           </div>`;
      })
      .join(" ");

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

  var filtered_employees = filteredcards.map((card) => {
      return `<div class="card">      
        <img class="card-img" src= ${card.src}>
        <div class="card-content">
          <p class="text-small text-bold">${card.FirstName}${card.LastName}</p>
          <p class="text-smaller">${card.JobTitle}</p>
          <p class="text-smaller">${card.Department}</p>
          <img src=${card.src1} alt="card-end" class="end-img">
        </div>
     </div>`;
    })
    .join(" ");

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

    var filtered_employees = filteredcards
      .map((card) => {
        return `<div class="card">
          <img class="card-img" src= ${card.src}>
          <div class="card-content">
            <p class="text-small text-bold">${card.FirstName}${card.LastName}</p>
            <p class="text-smaller">${card.JobTitle}</p>
            <p class="text-smaller">${card.Department}</p>
            <img src=${card.src1} alt="card-end" class="end-img">
          </div>
       </div>`;
      })
      .join(" ");

    document.querySelector(".fourth-section").innerHTML = filtered_employees;
  } 
  else if (drop.target.value == "Department") {
    var filteredcards = employees_local.sort((a, b) =>
      a.Department < b.Department ? -1 : 1);

    var filtered_employees = filteredcards.map((card) => {
        return `<div class="card">      
          <img class="card-img" src= ${card.src}>
          <div class="card-content">
            <p class="text-small text-bold">${card.FirstName}${card.LastName}</p>
            <p class="text-smaller">${card.JobTitle}</p>
            <p class="text-smaller">${card.Department}</p>
            <img src=${card.src1} alt="card-end" class="end-img">
          </div>
       </div>`;
      })
      .join(" ");

    document.querySelector(".fourth-section").innerHTML = filtered_employees;
  } else if (drop.target.value == "Job Title") {
    var filteredcards = employees_local.sort((a, b) =>
      a.JobTitle < b.JobTitle ? -1 : 1);

    var filtered_employees = filteredcards.map((card) => {
        return `<div class="card">      
          <img class="card-img" src= ${card.src}>
          <div class="card-content">
            <p class="text-small text-bold">${card.FirstName}${card.LastName}</p>
            <p class="text-smaller">${card.JobTitle}</p>
            <p class="text-smaller">${card.Department}</p>
            <img src=${card.src1} alt="card-end" class="end-img">
          </div>
       </div>`;
      })
      .join(" ");

    document.querySelector(".fourth-section").innerHTML = filtered_employees;
  }
});

//display selected departments
var depart_all = document.querySelectorAll(".dep-name");

depart_all.forEach(function (department) {
  department.addEventListener("click", () => {
    let value = department.textContent.toLowerCase().split("(")[0];

    filteredcards = employees_local.filter(function (card) {
      return card.Department.toLowerCase().startsWith(value);
    });
    var filtered_employees = filteredcards.map((card) => {
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
    document.getElementsByClassName("fourth-section")[0].innerHTML = filtered_employees;
  });
});

//display selected job
var jobs_all = document.querySelectorAll(".job-name");

jobs_all.forEach(function (job) {
  job.addEventListener("click", () => {
    let value = job.textContent.toLowerCase().split("(")[0];

    filteredcards = employees_local.filter(function (card) {
      return card.JobTitle.toLowerCase().startsWith(value);
    });
    var filtered_employees = filteredcards
      .map((card) => {
        return `<div class="card">      
              <img class="card-img" src= ${card.src}>
              <div class="card-content">
                <p class="text-small text-bold">${card.FirstName}${card.LastName}</p>
                <p class="text-smaller">${card.JobTitle}</p>
                <p class="text-smaller">${card.Department}</p>
                <img src=${card.src1} alt="card-end" class="end-img">
              </div>
           </div>`;
      })
      .join(" ");
    document.getElementsByClassName("fourth-section")[0].innerHTML =
      filtered_employees;
  });
});

var input = document.getElementsByTagName("input");
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

let all_card = JSON.parse(localStorage.getItem('employees'));
let card_all=document.querySelectorAll('.card');
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
    localStorage.removeItem('employees');
    localStorage.setItem('employees',JSON.stringify(all_card));
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

let new_employee = {
  src: "../assets/img-5.jpg",
  FirstName: "Tami",
  LastName: "Hopkins",
  JobTitle: "Lead Engineer Dot Net",
  PreferredName: "Tami",
  Department: "IT Department",
  PhoneNumber: 9876543210,
  SkypeID: 3421783,
  email: "abc@gmail.com",
  office: "India",
  src1: "../assets/card-end.jpg",
};

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
    new_employee.FirstName = input[1].value + " ";
    new_employee.LastName = input[2].value;
    new_employee.email = input[3].value;
    new_employee.JobTitle = input[4].value;
    new_employee.office = input[5].value;
    new_employee.Department = input[6].value;
    new_employee.PhoneNumber = input[7].value;
    new_employee.SkypeID = input[8].value;
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