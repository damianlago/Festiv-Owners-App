// Next.js API route
import type { NextApiRequest, NextApiResponse } from 'next'
//Firebase
import { collection, addDoc, getDoc } from "firebase/firestore";
import { db } from "../../../../../../lib/firebase/firebaseConfig";
import { Event } from "../../../../../../lib/class/eventClass";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const route = "test";

        const data = JSON.parse(JSON.stringify(req.body));

        const docRef = await addDoc(collection(db, route), data);

        const docSnap = await getDoc(docRef);

        const model = new Event
            (
                docSnap.id,
                docSnap.data().userId,
                docSnap.data().eventName,
                docSnap.data().date,
                docSnap.data().startTime,
                docSnap.data().endTime,
                docSnap.data().adress,
                docSnap.data().image
            );

        //Succesfull Response
        res.status(200).send({ model });
    } catch (e) {
        //Error Response
        res.status(400).end("Error: Not Save");
    }
}