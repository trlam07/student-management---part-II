const getStudentInfo = () => {
    let code = document.getElementById('code').value;

    let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    let math = document.getElementById('math').value;

    let physics = document.getElementById('physics').value;

    let chemistry = document.getElementById('chemistry').value;

    let newStudent = new Student (
        code,
        name, 
        email,
        math,
        physics,
        chemistry,
    )
    console.log (newStudent)

}