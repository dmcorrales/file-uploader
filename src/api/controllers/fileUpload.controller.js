const ExtensionHelper = require("../helpers/extension.helper");
const FileHelper = require("../helpers/file.helper");
const path = require("path");
class FileUploadController{
    constructor(){
        this._extensionHelper = new ExtensionHelper();
        this._fileHelper = new FileHelper();
    }

    async uploadFile(req, res){
       try {
            if(!req.files)
                return res.status(400).json("No files found to upload");
       

            let fileUpload = req.files.fileUpload;
            let arrayFile = fileUpload.name.split('.');
            let isValidExtension =this._extensionHelper.validateExtension(arrayFile[1]);
            
            if(!isValidExtension)
                return res.status(500).json("Extensión no permitida");
        
                this._fileHelper.createFile(req.files);
                return res.json("Se ha subido correctamente el archivo");
                
        } catch (error) {
            return res.json(error.message);
        }
        
    }


    async getFile(req, res){
        let id = req.params.id;
        if(id === ""){
           return res.sendFile(path.resolve(__dirname,"../../server/assets/not-found.jpg"));    
        }
        return res.sendFile(path.resolve(__dirname,"../../../uploads/"+id));    

    }
}

module.exports =  FileUploadController;