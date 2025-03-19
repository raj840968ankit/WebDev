//.......... object destructure and JSON API ................
const course = {
    courseName : "C++",
    price : 1000,
    courseInstructor : "HKD"
}
console.log(course.courseInstructor);
//to extract values in object (.....destructure.....)
const {courseInstructor} = course
console.log(courseInstructor);

//give specified name to extracted values (.....destructure.....)
const {courseInstructor : instructor} = course   //{object's attribute : specified attributes}
console.log(instructor);

//............JSON (take help from json formatter site to understand)...........
//format of json (directly we can't use in JS we have to assign it in variable)
// {
//     "courseName": "C++",
//     "price": "1000",
//     "courseInstructor": "HKD"
// }

