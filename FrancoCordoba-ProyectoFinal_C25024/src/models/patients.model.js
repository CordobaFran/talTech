import { db } from "../config/db.firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

class Patient {
    constructor(name, lastName, idType, idNum, insurance, birth, phone, email, status = "active") {
        this.name = name,
            this.lastName = lastName,
            this.idType = idType,
            this.idNum = idNum,
            this.insurance = insurance,
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
            insurance: this.insurance,
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
        const { name, lastName, idType, idNum, insurance, birth, phone, email, status } = newPatientData
        const newPatient = new Patient(name, lastName, idType, idNum, insurance, birth, phone, email, status)

        const docRef = await addDoc(collection(db, "patients"), newPatient.toFirebase()); //no instanciar la clase, se necesta objeto
        return "Document written with ID: ", docRef.id

    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

export const getPatientsByFilter = async (filterParams) => {
    console.log(db);
    const patientsRef = db.collection('patients');
    const snapshot = await patientsRef.where('name', '==', filterParams.name).get();
    if (snapshot.empty) {
        console.log('No matching documents.');
        return {};
    }

    snapshot.forEach(doc => {
        return { id: doc.id, ...doc.data() };
    });
}
