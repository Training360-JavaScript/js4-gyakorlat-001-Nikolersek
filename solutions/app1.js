'use strict';

const converterPromise = (array) => {
    return new Promise((resolve, reject) => {
        const filteredArray = array.filter(item => {
            return typeof item === "string" 
        });
        if (filteredArray.length != array.length) {
            reject(`Error: Not all elements are string type!`)
        } else {
            resolve(
                filteredArray.map(item => {
                    return item.toUpperCase();
                })
            );
        }
    }) 
};


export default converterPromise;
