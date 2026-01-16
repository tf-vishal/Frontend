// Tasks: (USING CALLBACKS ONLY) [TO UNDERSTAND CALLBACK HELL AND DEPENDING IF CALLBACK DOESN'T HAPPEN]
// 1. Write a function to download data from a url.
// 2. Write a function to save that downloaded data in a file and reutrn the filename.
// 3. Write a function to upload the file written in previous step to a new url.

function download(url, cb){
    /*
    - Download content from the given url and passed the downloaded content to the given callback cb.
    */

    console.log("Starting to download data form", url);
    setTimeout(function down(){
        console.log("DOwnload Completed");
        const content = "ABCDEFG"
        cb(content)
    }, 5000)
}

function writeFile(data, cb){
    // Writes the given data into a new file
    console.log("Started writing a file with", data);
    setTimeout(function write(){
        console.log("COMPLETED WRITING THE DATA IN A FILE");
        const filename = "file.txt"
        cb(filename)
    }, 6000)
}

function upload(url, file ,cb){
    // Uploads the data froma file to a given url
    console.log("STARTED UPLOADIN", file, "on", url);
    setTimeout(function up(){
        console.log("Upload Completed");
        const response = "SUCCESS";
        cb(response)
    },2000)
}

download("www.xyz.com", function processDownload(content){
    console.log("We are going to process the downloaded data");
    writeFile(content, function processWrtie(filename){
        console.log("We have downloaded the and written the file, now will upload");
        upload("www.upload.com", filename, function processUpload(response){
            console.log("We have uploaded with", response)
        })
    })
})