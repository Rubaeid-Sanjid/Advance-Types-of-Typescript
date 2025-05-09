{
    // Generic constraints with keyof operator
    type Vehicle = {
        name: string,
        color: string,
        license : boolean
    }
    type Keys = "name" | "color" | "license"; // Manually
    type KeysWithKeyOperator = keyof Vehicle;

    const getPropertyValue = <T, Q extends keyof T> (obj : T, key : Q)=>{
        return obj[key];
    }

    const user = {
        name : "Sanjid",
        age : 24,
        address : "Dhaka"
    }

    const result = getPropertyValue(user, "name");
}