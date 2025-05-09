"use strict";
{
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "Sanjid",
        age: 24,
        address: "Dhaka"
    };
    const result = getPropertyValue(user, "name");
}
