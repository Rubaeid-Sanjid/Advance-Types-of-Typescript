{
    type a = null;
    type b = a extends null ? true : false; // conditional type

    type Vehicle = {
        car : string;
        bike : string;
        cycle : string;
    }

    type checkVehicle<T> = T extends keyof Vehicle ? true : false;
    type hasCar = checkVehicle<"car"> // returns true
}