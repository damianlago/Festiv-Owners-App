import type { NextApiRequest, NextApiResponse } from 'next'
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../../../../lib/firebase/firebaseConfig";
import { Event } from "../../../../../../lib/class/events/eventClass";
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';


export default withApiAuthRequired(async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const user = await getSession(req, res);

        if (user) {

            const route = "events";
            const eventId = (req.query.id)?.slice(3);

            const docRef = doc(db, `${route}/${eventId}`);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log(docSnap.data());
                const model = new Event(docSnap.id, docSnap.data().userId, docSnap.data().eventName, docSnap.data().state);
                res.status(200).json({ model });
            }
            else {
                console.log("Document does not exist")
            }
        }
    } catch (e) {
        res.status(400).end("Error: Event not save");
    }
});