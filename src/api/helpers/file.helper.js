class FileHelper {
    constructor(){

    }

    createFile(resource){
        if(resource !== null || resource !== undefined)
            fileUpload.mv(`./uploads/${new Date().getTime()}.${arrayFile[1]}`, (err) => {
                if(err)
                    throw new Error(error.message);
            });     
    }
}

module.exports = FileHelper;