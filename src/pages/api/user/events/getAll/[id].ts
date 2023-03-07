// Next.js API route
import type { NextApiRequest, NextApiResponse } from 'next';
//Firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../../../../lib/firebase/firebaseConfig";
import { Event } from "../../../../../../lib/class/eventClass";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const route = "test";
        const userId = (req.query.id)?.slice(3);
        const model: any = [];

        const q = query(collection(db, route), where("userId", "==", userId));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {

            model.push(
                new Event(
                    doc.id,
                    doc.data().userId,
                    doc.data().eventName,
                    doc.data().date,
                    doc.data().startTime,
                    doc.data().endTime,
                    doc.data().adress,
                    doc.data().image
                )
            )
        });

        res.status(200).json({ model });
    } catch (e) {
        //Error Response
        res.status(400).end("Error: Not Save");
    }
}