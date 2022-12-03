import { useEffect, useState } from 'react'
import {data} from '../../data/data'
import ItemList  from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const {parametros} = useParams ();

  const getProducts = new Promise ((res, rej)=> {
    setTimeout(()=>{
      res(data)
    },3000)

  })
  
  useEffect(()=>{
    getProducts.then(respuesta => {
      setProductList(respuesta)
    });
    setTimeout(() => {
    },4000);
  },[productList]);


  return <div className='principal'> 
    <ItemList productList={productList}></ItemList> 
  </div>
};



export default ItemListContainer