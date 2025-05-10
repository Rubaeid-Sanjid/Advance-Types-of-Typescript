{
    type AreaString = {
        height: string;
        width : string 
    }

    // converting string type to number using mapped type

    // keyof --> "height" | "width"
    // key --> height : number;
    //         width : number;
    type AreaNumber = {
        [key in keyof AreaString] : number; 
    }

    // More
    type Area<T> = {                    // T --> {height : string; width : number}
        [key in keyof T] : T[key];      // T["height"] --> string // look up type
    }                                   // T["width"] --> number

    const area:  Area<{height : string; width : number}> = {
        height: "100",
        width: 50
    }
}