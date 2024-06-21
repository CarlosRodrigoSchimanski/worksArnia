import './carItens.css'
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
const CarItems: React.FC = () => {
    return (
      <div className="itensCardCar">
        {products.map(product => (
          <div key={product.id} className="cardCar">
            <img className='imgGames' src={product.imageUrl} alt={product.title} />
            <div className="contentCard">
              <h3 className='name'>{product.title}</h3>
              <h3 className='price'>Valor: R${product.price},00</h3>
              <h3 className='carImg'>
                <img className='imgCar' src='src/assets/+.png' alt="mais" />
                <img className='imgCar' src='src/assets/-.png' alt="mais" />
              </h3>

            </div>
          </div>
        ))}
      </div>
    )
}

export default CarItems