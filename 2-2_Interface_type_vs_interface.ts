{
    // type alias
    type User1 = {
        name: string;
        age: number
    }
    type User1WithRole1 = User1 & { role : string }; // type extension
    
    const user1 : User1WithRole1 = {
        name: "Sanjid",
        age: 25,
        role: "student"
    }
    
    // Interface
    interface User2 {
        name: string;
        age : number
    }
    interface User2WithRole2 extends User2 { role : string} // interface extension

    const user2 : User2WithRole2 = {
        name: "Rubaeid",
        age: 24,
        role: "Developer"
    }

    // array type
    type Roll1 = number[];
    const rollNumbers1 : Roll1 = [1, 2, 3, 4];
    
    // array type interface
    interface Roll2 {
        [index : number] : number;
    }
    const rollNumbers2 : Roll2 = [1, 2, 3, 4];

    // type function
    type Add1 = (num1 : number, num2 : number) => number;

    const add1 : Add1= (num1, num2)=>{
        const result = num1 + num2;
        return result;
    }

    // Interface function
    interface Add2 {
        (num1 : number, num2 : number) : number;
    }
    const add2 : Add2 = (num1, num2)=>{
        const result = num1 + num2;
        return result;
    }
}