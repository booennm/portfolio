let courses = [];

document.getElementById("addButton").addEventListener("click", addCourse);

function addCourse() {
    let name = document.getElementById("name").value;
    let users = Number(document.getElementById("users").value);

    let course = {
        courseName: name,
        userAmount: users
    }

    courses.push(course);
}

document.getElementById("showAllButton").addEventListener("click", showAll);

function showAll() {
    document.getElementById("allCourses").innerHTML = "";

    let sum = 0;

    courses.forEach( course => {
        let div = document.createElement("div");

        let name = document.createElement("p");
        name.textContent = "Kurssin nimi: " + course.courseName;

        let users = document.createElement("p");
        users.textContent = "Osallistujamäärä: " + course.userAmount;

        sum += course.userAmount;

        div.append(name, users);
        document.getElementById("allCourses").appendChild(div);
    });

    document.getElementById("userSum").textContent = sum;
}