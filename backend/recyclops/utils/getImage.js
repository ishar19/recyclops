import ImageDataURI from "image-data-uri";
import { v4 as uuidv4 } from 'uuid';

const getImage = async(dataURI)=>{
    let id = uuid()
    let filePath = `../scanImage/${id}`
    ImageDataURI.outputFile(dataURI,filePath)
        .then((res)=>{return res})
        .catch((e)=>{return new Error(e)})
}

export default getImage