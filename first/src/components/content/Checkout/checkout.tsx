
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
  }
]
const Checkout: React.FC = () => {
    return (
      <div className="itensCard">
        {products.map(product => (
          <div key={product.id} className="card">
            <img className='imgGames' src={product.imageUrl} alt={product.title} />
          </div>
        ))}
      </div>
    )
}

export default Checkout