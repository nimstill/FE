### async function 

The async function declaration defines an asynchronous function, which returns an AsyncFunction object.


function resloveAfter2Second() {
    return new Promise(resolve => {
        setTimeout(() => {
                resolve('resolved');
        }, 2000);
    });
}




The await operator is used to wait for a Promise. It can only be used inside an async function.

