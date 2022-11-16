import { useEffect, useState } from 'react'
import {data} from '../../data/data'
import ItemList  from '../../components/ItemList/ItemList';
import { resolvePath, useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

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


  return <div> 
    <ItemList productList={productList}></ItemList> 
  </div>
};

// const ItemListContainer = () => {
//   const [items, setItems] = useState ([]);
//   const { categoryName} = useParams();

//   const getProducts = new Promise ((res, rej) => {
//     setTimeout (() => {
//       if (categoryName) {
//         const filteredData = data.filter((item) => {
//           return item.category === categoryName;
//         });
//         res(filteredData);
//       } else {
//       res(data);
//     }
//     }, 1200);
//   })
//   useEffect (() => {
//     getProducts.then((res) => setItems(res));
//   }, [categoryName])
//   return (
//      <div>
//        <ItemList products={items}></ItemList>
//      </div>
//   )
// }

export default ItemListContainer