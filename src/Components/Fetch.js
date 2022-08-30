




export const Fetch = (Db) => {

    return new Promise((resolve, reject) =>{

        setTimeout(() => {

            resolve(Db);

        },1000)
    })
}