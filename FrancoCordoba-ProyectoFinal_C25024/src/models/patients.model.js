import { db } from "../config/db.firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";



class patient {
    constructor(name, lastName, idType, idNum, birth, phone, email) {
        this.name = name,
            this.lastName = lastName,
            this.idType = idType,
            this.idnum = idNum,
            this.birth = birth,
            this.phone = phone,
            this.email = email
    }
}

export const getAllPatients = async () => {
    const patients = []

    const querySnapshot = await getDocs(collection(db, "patients"));
    querySnapshot.forEach((doc) => {
        patients.push({id: doc.id, ...doc.data()})
    });

    console.log(patients);

    return patients

}