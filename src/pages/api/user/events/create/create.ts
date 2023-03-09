import type { NextApiRequest, NextApiResponse } from 'next'
import { collection, addDoc, getDoc } from "firebase/firestore";
import { db } from "../../../../../../lib/firebase/firebaseConfig";
import { Event } from "../../../../../../lib/class/events/eventClass";
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';


export default withApiAuthRequired(async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const user = await getSession(req, res);

        if (user) {
        const route = "events";

        const data = JSON.parse(JSON.stringify(req.body));
        const docRef = await addDoc(collection(db, route), data);
        const docSnap = await getDoc(docRef);

        const model = new Event
            (
                docSnap.id,
                docSnap.data().userId,
                docSnap.data().eventName,
                docSnap.data().state
            );

        res.status(200).send({ model });
        }
    } catch (e) {
        res.status(400).end("Error: Event not save");
    }
});