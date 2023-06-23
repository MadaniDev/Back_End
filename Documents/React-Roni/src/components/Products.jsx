import React from 'react';
import { useState } from 'react';

const Products = () => {
    // Inisialisasi awal dan fungsi perubahan state products
    const [products, setProduct] = useState([])

    //Fungsi utk menampilkan data api dengan method fetch
    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProduct(data.products)
    }
    

  return (
    <div>
        {/* Tombol utk menjalankan fungsi FetchData */}
        <button onClick={fetchData} className='btn btn-success d-block mx-auto'>Show Products</button>
        <ul className='row list-unstyled justify-content-center'>

        {/* Menampilkan setiap element di dalam array sebuah data dengan method map */}
        {products.map((product) => (
            <li key={product.id} className='col-3 bg-info py-3 m-3 rounded-3 text-center mb-3'>
                <img src={product.thumbnail} className='w-75'/>
                <p>{product.title}</p>
                <p>{product.brand}</p>
                <p>{product.price}</p>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Products