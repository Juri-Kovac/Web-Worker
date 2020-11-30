self.onmessage = function ( event ) {
    for(let i = 0; i < 7000000; i++){
        for(let j = 0; j < 500; j++){
        }
    }

    let news = " News from Work: " + event.data;
    postMessage(news)
}