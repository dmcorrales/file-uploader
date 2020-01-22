# notes
General notes for this tutorial

## File Upload dependencies
```bash
npm install --save express-fileupload
```

## Specifications
**Save image:** *uploads/**role**/image** 
```javascript
        fileUpload.mv(`./uploads/${new Date().getTime()}.${arrayFile[1]}`, (err) => { .. })
```