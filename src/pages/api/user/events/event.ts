import type { NextApiRequest, NextApiResponse } from 'next'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { collection, addDoc, getDoc, setDoc, doc, query, where, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase/fbConfig"
import { EventModel } from "../../../../lib/model/eventModel"


function formatMethod(params: any) {
    var index = params.toString()?.search("id=");
    return (params?.toString()?.substring(0, index));
}

function formatId(params: any) {
    var index = params.toString()?.search("id=");
    var temp = index != null ? index + 3 : 0
    return (params?.toString()?.slice(temp));
}

export default withApiAuthRequired(async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {

        const user = await getSession(req, res);
        if (user) {

            var data;
            var docRef;
            var docSnap;
            var id;
            var method = formatMethod((req?.query?.params))
            var route = "events";

            switch (method) {
                case "getOne":

                    id = formatId((req?.query?.params));
                    docRef = doc(db, `${route}/${id}`);
                    docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        const model = new EventModel(
                            docSnap.id,
                            docSnap.data().userId,
                            docSnap.data().eventName,
                            docSnap.data().state,
                            docSnap.data().description,
                            docSnap.data().dates,
                            docSnap.data().startTime,
                            docSnap.data().endTime,
                        );
                        res.status(200).json({ model });
                    }
                    else { console.log("Document does not exist") }
                    break;

                case "getAll":

                    const models: any = [];
                    id = formatId((req?.query?.params));

                    const q = query(collection(db, route), where("userId", "==", id));
                    const querySnapshot = await getDocs(q);

                    querySnapshot.forEach((doc) => {
                        models.push(
                            new EventModel(
                                doc.id,
                                doc.data().userId,
                                doc.data().eventName,
                                doc.data().state,
                                doc.data().description,
                                doc.data().dates,
                                doc.data().startTime,
                                doc.data().endTime,
                            )
                        )
                    });
                    res.status(200).json({ models });
                    break;

                case "add":

                    route = "events";
                    data = JSON.parse(JSON.stringify(req.body));
                    docRef = await addDoc(collection(db, route), data);
                    docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        const model = new EventModel(
                            docSnap.id,
                            docSnap.data().userId,
                            docSnap.data().eventName,
                            docSnap.data().state,
                            docSnap.data().description,
                            docSnap.data().dates,
                            docSnap.data().startTime,
                            docSnap.data().endTime,
                        );
                        res.status(200).json({ model });
                    }
                    else { console.log("Document does not exist") }
                    break;

                case "set":

                    id = formatId((req?.query?.params));
                    docRef = doc(db, `${route}/${id}`);
                    data = JSON.parse(JSON.stringify(req.body));
                    await setDoc(docRef, data)
                    docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        const model = new EventModel(
                            docSnap.id,
                            docSnap.data().userId,
                            docSnap.data().eventName,
                            docSnap.data().state,
                            docSnap.data().description,
                            docSnap.data().dates,
                            docSnap.data().startTime,
                            docSnap.data().endTime,
                        );
                        res.status(200).json({ model });
                    }
                    else { console.log("Document does not exist") }
                    break;
                
                case "update":
                    id = formatId((req?.query?.params));
                    docRef = doc(db, `${route}/${id}`);
                    data = JSON.parse(JSON.stringify(req.body));
                    
                    await updateDoc(docRef, {
                        eventName: data.eventName,
                        description: data.description,
                        dates: data.dates,
                        startTime: data.startTime,
                        endTime: data.endTime
                    })
                    
                    docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const model = new EventModel(
                            docSnap.id,
                            docSnap.data().userId,
                            docSnap.data().eventName,
                            docSnap.data().state,
                            docSnap.data().description,
                            docSnap.data().dates,
                            docSnap.data().startTime,
                            docSnap.data().endTime,
                        );
                        res.status(200).json({ model });
                    }
                    else { console.log("Document does not exist") }
                    break;

                default:
                    res.status(400).end("Error!");
                    break;
            }
        }
    } catch (e) {
        res.status(400).end("Error!");
    }
});