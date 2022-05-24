

var callbacks = [];

 export  function subscibeListener (listener){
    console.log("$$$$$ subscibeListener: ");
    callbacks.push(listener);

}


export  function newEvent(){
    callbacks.forEach(callback => {
        console.log("$$$$$ callback: ");
        callback();
    });
}

