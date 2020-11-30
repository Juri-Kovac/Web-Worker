
let w;
let w2;
let out        = document.querySelector("#worker_1");
let out2       = document.querySelector("#worker_2");
let btn_start  = document.querySelector("#btn_start");
let btn_stop   = document.querySelector("#btn_stop");
let heyWorker  = document.querySelector("#heyWorker");
let msg        = document.querySelector("#msg")


setInterval( function () {
    let n = new Date();
    document.querySelector( "#time").innerHTML = n.toLocaleTimeString();
},1 )


btn_start.addEventListener("click", () => {
    if(typeof (Worker) === undefined ){
        out.innerHTML = " Browser do not have a Support for Web Worker "
    }
    else {
        out.innerHTML = "Calculation on the fly...";
        out.className = "calc";
        if( w === undefined ) {
            w = new Worker("worker.js")
        }
        w.onmessage = function (event) {
            out.innerHTML = event.data;
            out.className = "done";
        }
        w.onerror =function (event){
            out.innerHTML = event.message;
            out.className = "quit";
        }
    }

});
btn_stop.addEventListener("click", () => {
    if(w !== undefined){
        w.terminate();
        w = undefined;
        out.innerHTML = "Calculation is interrupted !!!";
        out.className = "quit";
    }
});

//Post message to worker

heyWorker.addEventListener("click", () => {
    out2.innerHTML = "Waiting for message...";
    out2.className = "calc";
    if( w2 === undefined ){
        w2 = new Worker("worker2.js");
    }
    w2.onmessage = function (event){
        out2.innerHTML = event.data;
        out2.className = "done";
    }
    w2.onerror = function ( event) {
        out2.innerHTML = event.message;
        out2.className = "quit";
    }
    w2.postMessage(msg.value);

});





