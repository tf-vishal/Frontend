function download(url){
    return new Promise(function exec(resolve, reject){
        console.log("Starting to download data form", url);
        setTimeout(function down(){
            console.log("DOwnload Completed");
            const content = "ABCDEFG"
            resolve(content)
        }, 5000)
    })
}

function writeFile(data){
    return new Promise(function exec(resolve, reject){
        console.log("Started writing a file with", data);
        setTimeout(function write(){
            console.log("COMPLETED WRITING THE DATA IN A FILE");
            const filename = "file.txt"
            resolve(filename)
        }, 6000)
    })
}

function uploadData(file, url){
    return new Promise(function exec(resolve, reject){
        console.log("STARTED UPLOADIN", file, "on", url);
        setTimeout(function up(){
            console.log("Upload Completed");
            const response = "SUCCESS";
            resolve(response)
        },2000)
    })
}

download("www.xyz.com")
.then(function processDownload(value){
    console.log("Downloading done with following value", value);
    return writeFile(value);
})
.then(function processWrite(value){
    console.log("Data written in the file with name", value);
    return uploadData(value, "www.xyz.com");
})
.then(function processUpload(value){
    console.log("We have uploaded with", value)
})