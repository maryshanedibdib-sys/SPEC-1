const studentName = "Alex";
let score = 83;
console.log("Student:" + studentName);
console.log("Score:" + score);

function getGrade(s) {
    if (s > 100 || s < 0){
        console.log("Invalid Score.");
        return;
    }
if (s >= 90){
    return "A";
} 
else if (s >= 80){
    return "B";
}
else if (s >= 75){
    return "C";
}
else{
    return "F";
}

}

console.log("This is my grade:" + getGrade(score));
console.log("This is my grade:" + getGrade(75));

function checkStudent(name, s){
    
}