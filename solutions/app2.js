'use strict';

const sorterPromise = (array) => {
    return new Promise((resolve, reject) => {
        const filteredArray = array.filter(item => {
            return typeof item === "string" 
        });
        if (filteredArray.length != array.length) {
            reject(`Error: Not all elements are string type!`)
        } else {
            resolve(
                filteredArray.sort()
            );
        }
    }) 
};


export default sorterPromise;
