import { db } from "../config/db.firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";



class Patient {
    constructor(name, lastName, idType, idNum, birth, phone, email, status = "active") {
        this.name = name,
            this.lastName = lastName,
            this.idType = idType,
            this.idNum = idNum,
            this.birth = birth,
            this.phone = phone,
            this.email = email,
            this.status = status
    }

    toFirebase() {
        return {
            name: this.name,
            lastName: this.lastName,
            idType: this.idType,
            idNum: this.idNum,
            birth: this.birth,
            phone: this.phone,
            email: this.email,
            status: this.status
        }
    }

}

export const getAllPatients = async () => {
    const patients = []

    const querySnapshot = await getDocs(collection(db, "patients"));
    querySnapshot.forEach((doc) => {
        patients.push({ id: doc.id, ...doc.data() })
    });

    return patients
}

export const createPatient = async (newPatientData) => {
    try {
        const { name, lastName, idType, idNum, birth, phone, email, status } = newPatientData
        const newPatient = new Patient(name, lastName, idType, idNum, birth, phone, email, status)

        const docRef = await addDoc(collection(db, "patients"), newPatient.toFirebase()); //no instanciar la clase, se necesta objeto
        return "Document written with ID: ", docRef.id

    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

