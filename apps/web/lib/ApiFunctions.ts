import axios from "axios";

export const childPageHandler = (e, id) => {
    e.stopPropagation()
    axios.post('http://localhost:3001/document/', {
        "label": "Untitled",
        "documentId": id,
        "userId": "cmdq5vyme00002mx8wn15bx2l"
    })
        .then(function (response) {
            console.log(response);
            window.location.reload()

        })
        .catch(function (error) {
            console.log(error);
        });
}
export const pageDeleteHandler = (e, id) => {
    e.stopPropagation()
    console.log(id)
    axios.delete('http://localhost:3001/document/', {
        data: {
            userId: "cmdq5vyme00002mx8wn15bx2l",
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
export const newPageHandler = () => {
    axios.post('http://localhost:3001/document/', {
        "label": "Untitled",
        "userId": "cmdq5vyme00002mx8wn15bx2l"
    })
        .then(function (response) {
            console.log(response);
            window.location.reload()
        })
        .catch(function (error) {
            console.log(error);
        });
}