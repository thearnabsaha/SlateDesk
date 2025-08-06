import axios from "axios";

export const childPageHandler = (e, id, userId) => {
    e.stopPropagation()
    axios.post('http://localhost:3001/document/', {
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
    axios.delete('http://localhost:3001/document/', {
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
export const newPageHandler = (userId) => {
    axios.post('http://localhost:3001/document/', {
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