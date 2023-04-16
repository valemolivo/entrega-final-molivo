import {useState, useEffect} from 'react'
import { getProducts, getProductsForCategory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  
  const [products, setProducts] = useState([]);

  const {idCategory} = useParams();

  useEffect( () => {

    const funcionProductos = idCategory ? getProductsForCategory : getProducts;

    funcionProductos(idCategory)
      .then (response => setProducts (response))
      .catch (error => console.error(error))
  }, [idCategory] )

  return (
    <div>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer