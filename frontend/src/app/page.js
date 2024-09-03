'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [product, setProduct] = useState({})
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    const res = await fetch('http://localhost:3001/products')
    const products = await res.json()
    setProducts(products)
  }

  async function createProduct() {
    await fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    
    setProduct({})
    await getProducts()
  }

  async function deleteProduct(id) {
    await fetch(`http://localhost:3001/products/${id}`, {
      method: 'DELETE',
    })
    await getProducts()
  }

  async function getProductById(id) {
    const res =  await fetch(`http://localhost:3001/products/${id}`)
    const product = await res.json()
    setProduct(product)
  }

  async function editProduct() {
    await fetch(`http://localhost:3001/products/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product)
    })
    setProduct({})
    await getProducts()
  }

  function renderizeProductForm() {
    return (
      <div className='flex gap-5 items-end'>
        <div className='flex flex-col'>
          <label htmlFor='name'>Name</label>
          <input id='name' 
          className='bg-zinc-700 p-2 rounded-md' 
          type='text' value={product.name ? product.name : ''} onChange={(e) => setProduct({...product, name: e.target.value})} />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='description'>Description</label>
          <input id='description' 
          className='bg-zinc-700 p-2 rounded-md' 
          type='text' value={product.description ? product.description : ''} onChange={(e) => setProduct({...product, description: e.target.value})} />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='price'>Price</label>
          <input id='price' 
          className='bg-zinc-700 p-2 rounded-md' 
          type='number' value={product.price ? product.price : ''} onChange={(e) => setProduct({...product, price: +e.target.value})} />
        </div>
        <div>
          {product.id ? (
            <div className='flex gap-2'>
              <button onClick={() => editProduct()} className='bg-blue-500 px-4 py-2 rounded-md'>
                Edit
              </button>
              <button onClick={() => setProduct({})} className='bg-red-500 px-4 py-2 rounded-md'>
                Cancel
              </button>
            </div>
          ) : 
            <div>
              <button onClick={() => createProduct()} className='bg-blue-500 px-4 py-2 rounded-md'>
                Save
              </button>
            </div>
          }

        </div>
      </div>
    )
  }

  function renderizeProducts() {
    return (
      <div className='flex flex-col gap-2'>
      {products.map((prod) => 
        <div key={prod.id} className='flex gap-2 items-center bg-zinc-800 px-4 py-2 rounded-md'>
          <div className='flex-1'>
            {prod.name}
          </div>
          <div>
            {prod.price}
          </div>
          <div>
            <button onClick={() => getProductById(prod.id)} className='bg-green-500 p-2 rounded-md'>
              Edit
            </button>
          </div>
          <div>
            <button onClick={() => deleteProduct(prod.id)} className='bg-red-500 p-2 rounded-md'>
              Delete
            </button>
          </div>
        </div>
      )}
      </div>
    )
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen gap-10'>
      {renderizeProductForm()}
      {renderizeProducts()}
    </div>
  );
}