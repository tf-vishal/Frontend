// Here fun download have all the power to callback and provide everything. This is inversion of control where we give power to other function for work. It can call out callback 2 times if someone changes it.
function download(url, cb){
    console.log("Started DOwnladoing fromt he url", url)
    setTimeout(function exec(){
        console.log("Completed Downloading after 5s")
        const content = "ABCDEF";
        cb(content);
        // cb(content);
    }, 5000);
}

download("www.xyz.com", function processDownload(data){
    console.log("downloaded data is", data);
})
