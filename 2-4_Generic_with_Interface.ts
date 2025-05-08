{
  // Interface generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      processor: string;
    };
    phone: T;
    bike?: X
  }

  const poorDeveloper : Developer<{brand : string, dualCamera : boolean}> = {
    name: "John",
    computer: {
      brand: "Walton",
      processor: "i3",
    },
    phone: {
      brand: "Xiaomi",
      dualCamera: true,
    },
  };

  type phoneInfo = {
    brand : string;
    dualCamera : boolean
  }
  interface bikeInfo {
    brand : string;
    engine : string
  }

  const richDeveloper : Developer<phoneInfo, bikeInfo> = {
    name: "Emily",
    computer: {
      brand: "HP",
      processor: "i7",
    },
    phone: {
      brand: "Apple",
      dualCamera: true,
    },
    bike: {
        brand : "Suzuki",
        engine: "150cc"
    }    
  };
}
