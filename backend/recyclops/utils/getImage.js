import ImageDataURI from "image-data-uri";
import { v4 as uuidv4 } from 'uuid';

const getImage = async(dataURI)=>{
    let id = uuidv4()
    let filePath = `./scanImage/${id}`
    const res = ImageDataURI.outputFile(dataURI,filePath)
        .then((res)=>{return res})
        .catch((e)=>{return new Error(e)})
    return res;
}

export default getImage