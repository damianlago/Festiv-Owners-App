import type { NextApiRequest, NextApiResponse } from 'next'
import { collection, addDoc, getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../../../../../../lib/firebase/firebaseConfig";
import { EventData } from "../../../../../../../lib/class/events/eventDataClass";
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';


export default withApiAuthRequired(async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const user = await getSession(req, res);

        if (user) {

            const eventId = (req?.query?.id)?.slice(3);

            const docRef = doc(db, "events/" + eventId + "/data", "data");
            const data = JSON.parse(JSON.stringify(req.body));
            console.log("estamos", data);
            await setDoc(docRef, data)

            const docSnap = await getDoc(docRef);
            var model = new EventData
                (
                    docSnap?.data()?.displayName,
                    docSnap?.data()?.description
                );
            res.status(200).send({ model });

            // await setDoc(docRef, data)
            //     .then(async (data) => {
            //         const docSnap = await getDoc(docRef);
            //         var model = new EventData
            //             (
            //                 docSnap?.data()?.displayName,
            //                 docSnap?.data()?.description
            //             );
            //         res.status(200).send({ model });
            //     })
            //     .catch((err) => {
            //         console.log(err)
            //         res.status(400).end("Error: Event not save");
            //     });
        }
    } catch (e) {
    res.status(400).end("Error: Event not save");
}
});