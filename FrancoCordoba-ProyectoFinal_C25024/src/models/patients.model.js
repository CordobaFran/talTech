import { db } from "../config/db.firebase.js";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, query, where } from "firebase/firestore";
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

/* GET PATIENTS */
export const getAllPatients = async () => {
    const patients = []

    const querySnapshot = await getDocs(collection(db, "patients"));
    querySnapshot.forEach((doc) => {
        patients.push({ id: doc.id, ...doc.data() })
    });

    return patients
}

const getPatientById = async () => {

}

export const getPatientsByFilter = async (filterParams) => {

    const { name, lastName, idNum, insurance, status } = filterParams

    const conditions = []

    if (name) { conditions.push(where("name", "==", name.toLowerCase())) }
    if (lastName) { conditions.push(where("lasName", "==", lastName.toLowerCase())) }
    if (idNum) { conditions.push(where("idNum", "==", idNum)) }
    if (insurance) { conditions.push(where("insurance", "==", insurance)) }
    if (status) { conditions.push(where("status", "==", status)) }

    const patients = []
    const queryDb = query(collection(db, 'patients'), ...conditions)
    const snapshot = await getDocs(queryDb)

    if (snapshot.empty) {
        console.log("No se encontraron coincidencias.");
        return [];
    }

    snapshot.forEach(doc => {
        patients.push({ id: doc.id, ...doc.data() });
    });

    return patients
}

/* CREATE PATIENT */
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

/* DELETE PATIENT */
//agregar exepcion al no encontrar id
export const deletePatientById = async (id) => {
    try {
        const deletedDoc = await deleteDoc(doc(db, "patients", id))
        deletedDoc
        return id

    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}

/* EDIT PATIENT */ 
//agregar exepciones cuando viene en newData algun valor vacio
//agregar exepcion al no encontrar id
export const editPatientById = async (id, newData) => {
    try {
        const patientRef = doc(db, "patients", id)
        await updateDoc(patientRef, newData)
        return id
    } catch (error) {
        console.error("Error editing document: ", error);

    }
}