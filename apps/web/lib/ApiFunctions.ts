import axios from "axios";
import { BACKEND_URL } from "./config";

export const childPageHandler = (e, id, userId) => {
    e.stopPropagation()
    axios.post(`${BACKEND_URL}document/`, {
        label: "Untitled",
        documentId: id,
        userId: userId
    })
        .then(function (response) {
            console.log(response);
            window.location.reload()
        })
        .catch(function (error) {
            console.log(error);
        });
}
export const pageDeleteHandler = (e, id, userId) => {
    e.stopPropagation()
    axios.delete(`${BACKEND_URL}document/`, {
        data: {
            userId: userId,
            id: id
        }
    })
        .then(function (response) {
            console.log(response);
            window.location.reload()
        })
        .catch(function (error) {
            console.log(error);
        });
}
export const pageArchievedHandler = (e, id, userId, documentId) => {
    e.stopPropagation()
    console.log(userId, id, documentId)
    axios.put(`${BACKEND_URL}document/archieve`, {
        userId: userId,
        id: id,
        documentId: documentId
    }
    )
        .then(function (response) {
            console.log(response);
            window.location.reload()
        })
        .catch(function (error) {
            console.log(error);
        });
}
export const newPageHandler = (userId) => {
    axios.post(`${BACKEND_URL}document/`, {
        label: "Untitled",
        userId: userId
    })
        .then(function (response) {
            console.log(response);
            window.location.reload()
        })
        .catch(function (error) {
            console.log(error);
        });
}