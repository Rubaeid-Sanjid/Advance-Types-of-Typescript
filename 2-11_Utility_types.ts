{
    // Utility types

    // Pick
    type Person = {
        name: string;
        age: number;
        email?: string;
        phone: string
    }
    type Name = Pick<Person, "name">; // type Name = {
                                      //    name: string;
                                      // }
    // Omit
    type ContactInfo = Omit<Person, "name" | "age">;

    // Required
    type PersonRequired = Required<Person>; // // makes all property required

    // Partial
    type PersonPartial = Partial<Person>; // makes all property optional

    // Readonly
    type PersonReadOnly = Readonly<Person>;

    const person : PersonReadOnly = {
        name : "Sanjid",
        age : 24,
        email : "sanjid@gmail.com",
        phone : "01829398490"
    }
    // person.age = 25; // not possible

    // Record
    // type MyObj = {
    //     a : string;
    //     b : string;
    // }
    type MyObj = Record<string, string>; // Record<index type, value type>

    const obj : MyObj = {
        a : "aa",
        b : "bb",
        c : "cc",
    }

    const obj2 : Record<string, unknown> = {name: "Piyal", age: 24};
}