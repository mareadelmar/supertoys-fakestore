export function getProducts() {
    const url = "https://orkotoys-jssociety.herokuapp.com/productos";

    return fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return data;
        });
}
