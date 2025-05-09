{
    // Function with generic

    const createArrayWithGeneric = <T>(param : T) : T[]=>{
        return [param]
    }

    const response = createArrayWithGeneric<string>("bangladesh");
    const response2 = createArrayWithGeneric< {id : number, name : string} >({id: 1, name: "sanjid"});

    // tuple
    const createArrayWithTuple = <T, Q>(param1 : T, param2 : Q) : [T, Q]=>{
        return [param1, param2];
    }

    const res3 = createArrayWithTuple<number, string>(1, "Bangladesh");
    const res4 = createArrayWithTuple<number, {id : number, name : string}>(1, {id: 1, name: "sanjid"});

    const addCourse = <T>(student : T)=>{
        const course = "Introduction to Database";
        return {
            ...student,
            course
        }
    }
    const student = addCourse({name: "Sanjid", email : "sanjid@gmail.com"})
}