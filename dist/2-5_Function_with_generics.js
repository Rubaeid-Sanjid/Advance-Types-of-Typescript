"use strict";
{
    // Function with generic
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const response = createArrayWithGeneric("bangladesh");
    const response2 = createArrayWithGeneric({ id: 1, name: "sanjid" });
    // tuple
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res3 = createArrayWithTuple(1, "Bangladesh");
    const res4 = createArrayWithTuple(1, { id: 1, name: "sanjid" });
    const addCourse = (student) => {
        const course = "Introduction to Database";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student = addCourse({ name: "Sanjid", email: "sanjid@gmail.com" });
}
