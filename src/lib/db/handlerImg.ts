import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase/fbConfig";


export function handlerImg(file: any) {

    if (!file) {
        console.log("No file choosed!")
    }
    
    const storageRef = ref(storage, `/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file);

    return 0;
}