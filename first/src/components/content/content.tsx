import React, { useState } from "react"
import './content.css'
import ProductList from "./products/product"
import CarItems from "./carItens/carItens"
import Checkout from "./Checkout/checkout"

interface MiddleProps {
  sectionRecived: 'Produtos' | 'Carrinho' | 'Checkout'
}

const Middle: React.FC<MiddleProps> = ({ sectionRecived }) => {
  const [section, setSection] = useState<'Produtos' | 'Carrinho' | 'Checkout'>(sectionRecived)

  const handleNextSection = (nextSection: 'Produtos' | 'Carrinho' | 'Checkout') => {
    setSection(nextSection)
  }

  return (
    <div className="main">
      {section === 'Produtos' && (
        <>
          <div className="head">
            <h2>Produtos</h2>
            <h3>2</h3>
          </div>
          <ProductList />
          <button onClick={() => handleNextSection('Carrinho')}>Ir para o carrinho</button>
        </>
      )}
      {section === 'Carrinho' && (
        <>
          <div className="head">
            <h2>Carrinho</h2>
            <h3>2</h3>
          </div>
          <CarItems />
          <button onClick={() => handleNextSection('Checkout')}>Finalizar Compra</button>
        </>
      )}
      {section === 'Checkout' && (
        <>
          <h2>Checkout</h2>
          <Checkout/>
          <div className="checkoutcard">
            <h4>Valor dos Produtos: 3</h4>
            <h4>Total R$:30,00 </h4>
          </div>
          <button onClick={() => handleNextSection('Produtos')}>Confirmar Compra</button>
        </>
      )}
    </div>
  )
}

export default Middle