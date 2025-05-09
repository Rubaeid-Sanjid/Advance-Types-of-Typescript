"use strict";
{
    const addCourse = (student) => {
        const course = "Introduction to Database";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourse({
        id: 1,
        name: "Sanjid",
        email: "sanjid@gmail.com",
    });
    //   const student2 = addCourse({ id: 1, email: "sanjid@gmail.com" }); // not acceptable
}
