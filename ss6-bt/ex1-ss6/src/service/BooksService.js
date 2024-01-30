import axios, {HttpStatusCode} from "axios";
export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/books');
        return result.data;
    } catch (e){
        console.log(e)
    }
}
export const save = async (book) => {
    try {
        if (book.id) {
            const result = await axios.put(`http://localhost:8080/books/${book.id}`, book);
            return HttpStatusCode.Ok;
        } else {
            const result = await axios.post('http://localhost:8080/books', book);
            return HttpStatusCode.Created;
        }
    } catch (e) {
        console.log(e)
    }
}

export const deleteBook = async (bookId) => {
    try {
        const result = await axios.delete(`http://localhost:8080/books/${bookId}`);
        return HttpStatusCode.NoContent;
    } catch (e) {
        console.log(e);
    }
}

export const findById = async (bookId) => {
    try {
        const result = await axios.get(`http://localhost:8080/books/${bookId}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}