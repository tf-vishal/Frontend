// Here you have the control of the callback, like even if the funtion doesn't give resolve, it will be in pending state, so u can detect it, even if u go like resolve(content) 2 times, it won't create any issue, basically you have the control of the fullfill function(.then one) instead of the download function.
function download(url) {
    console.log("Started Downloading content form", url);
    return new Promise(function exec(resolve, reject){
        setTimeout(function p(){
            console.log("COMPLETED DOWNLOADING DATA IN 5s");
            const content = "ABCEFG";
            resolve(content);
        }, 5000);
    })
}

download("www,xyz.com")
.then(function fullfilledHandler(value){
    console.log("CONTENT DOWNLOADED IS ", value)
})