{
  const addCourse = <T extends { id: number; name: string; email: string }>( student: T ) => { //constraints with extends
    const course = "Introduction to Database";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourse({
    id: 1,
    name: "Sanjid",
    email: "sanjid@gmail.com",
  });
//   const student2 = addCourse({ id: 1, email: "sanjid@gmail.com" }); // not acceptable
}
