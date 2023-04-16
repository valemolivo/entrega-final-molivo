const products = [
    {id: "1", nombre: "Bebedero", precio: 1300, img: "../img/bebedero.jpg", idCat:"Ambientación"},
    {id: "2", nombre: "Plato", precio: 1500, img: "../img/plato.jpg", idCat:"Ambientación"},
    {id: "3", nombre: "Cama", precio: 3500, img: "../img/cama.jpg", idCat:"Ambientación"},
    {id: "4", nombre: "Rascador", precio: 4000, img: "../img/rascador.jpg", idCat:"Ambientación"},
    {id: "5", nombre: "Hueso", precio: 700, img: "../img/hueso.jpg", idCat:"Juguetes"},
    {id: "6", nombre: "Soga", precio: 900, img: "../img/soga.jpg", idCat:"Juguetes"},
    {id: "7", nombre: "Pelotas", precio: 800, img: "../img/pelotas.jpg", idCat:"Juguetes"},
    {id: "8", nombre: "Rata", precio: 1200, img: "../img/rata.jpg", idCat:"Juguetes"},
    {id: "9", nombre: "Cat Chow", precio: 3500, img: "../img/catchow.jpg", idCat:"Alimentos"},
    {id: "10", nombre: "Lata gato", precio: 800, img: "../img/catlata.jpg", idCat:"Alimentos"},
    {id: "11", nombre: "Dog Chow", precio: 3500, img: "../img/dogchow.jpg", idCat:"Alimentos"},
    {id: "12", nombre: "Lata perro", precio: 800, img: "../img/doglata.jpg", idCat:"Alimentos"}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout ( () => {
            resolve(products);
        }, 2000)
    })
}

export const getOneProduct = (id) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const product = products.find(prod => prod.id === id);
            resolve(product);
        }, 1000)
    })
}

export const getProductsForCategory = (idCategory) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productsCategory = products.filter(prod => prod.idCat === idCategory);
            resolve(productsCategory);
        }, 1000)
    })
}
