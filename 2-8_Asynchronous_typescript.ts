{
    // type Something = {something : string};
    
    const createPromise = () : Promise< {something : string} >=>{
        return new Promise < {something : string} > ((resolve, reject)=>{ // As I know it is returning a string so --> < string >
            const data : {something : string} = {something : "something" };
            if(data){
                resolve(data);
            }else{
                reject("Failed to load data.");
            }
        })
    }

    const showData = async () : Promise< {something : string} >=>{
        const data : {something : string} = await createPromise();
        return data;
    }

    showData();
}