// Question 3: Create an JSON object for grades of a class having structure
// {"name": 'John', "grade": 8, "sex": 'M'},
// Also write a program to find classroomAverage ,boysAverage ,girlsAverage,highestGrade and lowestGrade.


let classA = [
              {"name": 'John', "grade": 6, "sex": 'M'},
              {"name": 'Ram', "grade": 8, "sex": 'M'},
              {"name": 'Hari', "grade": 7, "sex": 'M'},
              {"name": 'Sita', "grade": 9, "sex": 'F'},
              {"name": 'Yashoda', "grade": 10, "sex": 'F'},
              {"name": 'Geeta', "grade": 8, "sex": 'F'},
              {"name": 'Victor', "grade": 9, "sex": 'M'},
              {"name": 'Abdul', "grade": 1, "sex": 'M'},
              {"name": 'Ishani', "grade": 8, "sex": 'F'},
              {"name": 'Jaswinder', "grade": 5, "sex": 'M'},
]


function classroomAverage(students) {
    let count = students.length;
    let averageScore = students.reduce((accumulator,item) => {
        accumulator.grade += item.grade
        return accumulator
        
    })
    console.log(averageScore.grade/count);
}

//classroomAverage(classA);

function boysAverage(students) {
    let count = 0, totalSum = 0;
    students.map(element => {
        if(element.sex === 'M') {
            count++;
            totalSum += element.grade
        }
    });
    console.log(totalSum/count);
}

//boysAverage(classA);

function girlsAverage(students) {
    let count = 0, totalSum = 0;
    students.map(element => {
        if(element.sex === 'F') {
            count++;
            totalSum += element.grade
        }
    });
    console.log(totalSum/count);
}

//girlsAverage(classA);

function highestScore(students) {
    students.sort((a,b) => b.grade - a.grade);
    console.log(students[0]);
}

//highestScore(classA);

function lowestScore(students) {
    students.sort((a,b) => a.grade - b.grade);
    console.log(students[0]);
}

//lowestScore(classA);