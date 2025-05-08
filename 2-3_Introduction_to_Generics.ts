{
    // Generic type

    type GenericArray<T> = Array<T>;

    // const results : number[] = [1, 2, 3];
    const results : GenericArray<number> = [1, 2, 3];

    // const users : string[] = ["A", "B", "C"];
    const users : GenericArray<string> = ["A", "B", "C"];

    // Generic Object
    const userInfo : GenericArray<{name : string, age : number}> = [
        {
            name: "Sanjid",
            age: 25
        },
        {
            name: "Piyal",
            age: 24
        }
    ]

    // Generic Tuple
    type GenericTuple<X, Y> = [X, Y];

    const userWithId : GenericTuple<number, {name : string, age : number}> = [12, {name : "Sanjid", age : 25}];

}