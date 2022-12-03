import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState();
  const { id } = useParams();

  return (
    <div>
      {productSelected && <ItemDetail productSelected={productSelected} />}
    </div>
  );
};

export default ItemDetailContainer;