# notes
General notes for this tutorial

## File Upload dependencies
```bash
npm install --save express-fileupload
```

## Specifications
**Save image:** *uploads/**role**/image** 
```javascript
        fileUpload.mv(`./uploads/${new Date().getTime()}.${arrayFile[1]}`, (err) => { .. });
```

**Resolve Path:** *uploads/**role**/image** 
```javascript
        let exists = path.resolve(__dirname, `uploads/${user.imgPath}`);
        if(fs.existsSync(exists)){ ... }

```

**Remove from Path:** *uploads/**role**/image** 
```javascript
        fs.unlinkSync(pathImage);
```