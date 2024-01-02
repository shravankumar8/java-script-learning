const school = {
  name: "mallareddy health school",
  location: "banjarahills",
  age: 3434,
  teachers: {
    physics: "Asha velandapudi",
    maths: "Vishnupriya juttukonda",
    english: "Jaya shree Lingampally",
    social: "Rajendar nayak",
    chemistry: "Asha mandanna",
  },
  salaries: {
    "Asha velandapudi": 43434,
    "Vishnupriya juttukonda": 34545,
    "Jaya shree Lingampally": 35355,
    "Rajendar nayak": 70000,
    "Asha mandanna": 76654,
  },
};

function getTeachers(school) {
  let teachers = school.teachers;
  for (let subject in teachers) {
    console.log(teachers[subject]);
  }
}

function getSubjects(school) {
  let subjects = Object.keys(school.teachers);
  for (let i in school.teachers) {
    console.log(school.teachers[i], "=", i);
  }
}

function getSalary(school, getConcise) {
  for (let teacher in school.salaries) {
    if (getConcise) {
      console.log(teacher, "=", school.salaries[teacher]);
    } else {
      console.log(teacher, "salary is ", school.salaries[teacher], "per month");
    }
  }
}

getTeachers(school);
getSubjects(school);
getSalary(school);
