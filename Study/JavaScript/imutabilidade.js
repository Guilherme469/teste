/*const user = {
    name: "Guilherme",
    lastName: "Luiz"
};

function getUserWithFullName(user){
    return{
        ...user,
        fullName: user.name + user.lastName
    }
}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName);
*/

const students = [
    { 
        name:"Grace",
        grade: 7
    }, 
    {
        name:"Paul",
        grade: 8
    },
    {
        name: "July",
        grade: 3
    },
    {
        name: "August",
        grade: 2
    },
];
function getApprovedStudents(studentslist) {
    return studentslist.filter (students => students.grade >= 7);
}
console.log("Alunos Aprovados: ");
console.log(getApprovedStudents(students));

console.log("Lista de Alunos ");
console.log(students);
