import './productStyle.css'

interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Battlefield 2042',
    price: 10,
    imageUrl: 'src/assets/Rectangle66.png'
  },
  {
    id: 2,
    title: 'Call of Duty Black Ops Cold War',
    price: 10,
    imageUrl: 'src/assets/Rectangle67.png'
  },
  {
    id: 3,
    title: 'Dark Souls Remastered',
    price: 10,
    imageUrl: 'src/assets/Rectangle68.png'
  },
  {
    id: 4,
    title: 'Resident evil 3',
    price: 10,
    imageUrl: 'src/assets/Rectangle71.png'
  },
  {
    id: 5,
    title: 'Good Of War',
    price: 10,
    imageUrl: 'src/assets/Rectangle72.png'
  },
  {
    id: 6,
    title: 'Horizon',
    price: 10,
    imageUrl: 'src/assets/Rectangle75.png'
  },
  {
    id: 7,
    title: 'Call of Duty Black Ops Cold War',
    price: 10,
    imageUrl: 'src/assets/Rectangle67.png'
  },
  {
    id: 8,
    title: 'Dark Souls Remastered',
    price: 10,
    imageUrl: 'src/assets/Rectangle68.png'
  },
  {
    id: 9,
    title: 'Resident evil 3',
    price: 10,
    imageUrl: 'src/assets/Rectangle71.png'
  },
  {
    id: 10,
    title: 'Good Of War',
    price: 10,
    imageUrl: 'src/assets/Rectangle72.png'
  },
  {
    id: 11,
    title: 'Horizon',
    price: 10,
    imageUrl: 'src/assets/Rectangle75.png'
  },
  {
    id: 1,
    title: 'Battlefield 2042',
    price: 10,
    imageUrl: 'src/assets/Rectangle66.png'
  },
  {
    id: 2,
    title: 'Call of Duty Black Ops Cold War',
    price: 10,
    imageUrl: 'src/assets/Rectangle67.png'
  },
  {
    id: 3,
    title: 'Dark Souls Remastered',
    price: 10,
    imageUrl: 'src/assets/Rectangle68.png'
  },
  {
    id: 4,
    title: 'Resident evil 3',
    price: 10,
    imageUrl: 'src/assets/Rectangle71.png'
  },
  {
    id: 5,
    title: 'Good Of War',
    price: 10,
    imageUrl: 'src/assets/Rectangle72.png'
  },
  {
    id: 6,
    title: 'Horizon',
    price: 10,
    imageUrl: 'src/assets/Rectangle75.png'
  },
  {
    id: 7,
    title: 'Call of Duty Black Ops Cold War',
    price: 10,
    imageUrl: 'src/assets/Rectangle67.png'
  },
  {
    id: 8,
    title: 'Dark Souls Remastered',
    price: 10,
    imageUrl: 'src/assets/Rectangle68.png'
  },
  {
    id: 9,
    title: 'Resident evil 3',
    price: 10,
    imageUrl: 'src/assets/Rectangle71.png'
  },
  {
    id: 10,
    title: 'Good Of War',
    price: 10,
    imageUrl: 'src/assets/Rectangle72.png'
  }
]
const ProductList: React.FC = () => {
    return (
      <div className="itensCard">
        {products.map(product => (
          <div key={product.id} className="card">
            <img className='imgGames' src={product.imageUrl} alt={product.title} />
            <div className="checkBoxDiv">
              <input id={product.id.toString()} type="checkbox" name="chek"/>
              <label htmlFor={product.id.toString()}>Valor: R${product.price},00</label>
            </div>
          </div>
        ))}
      </div>
    )
}

export default ProductList