import './App.css'

function App() {
  return (
    <div id="container">
      <nav>
        <img src="./assets/logo.svg" alt="RocketShoes" />
        <ul>
          <li>Homem</li>
          <li>Mulher</li>
          <li>Criança</li>
          <li>Customizar</li>
        </ul>

        <div>
          <input type="text" className='search' placeholder="Pesquisar" />
        </div>

        <img src="./assets/icon-bag.svg" alt="Bag" />
      </nav>

      <div className='content'>
        <aside>
          <div>
            <strong>Tênis Esportivo Para Corrida
              Top</strong>
            <span className='text-description'>
              Esse tênis tem o intuito de te deixar ainda mais fitness, focado, e musculoso.
            </span>
            <span className='text-price'>
              R$ 1.000,00
            </span>
            <button className='buy-button'>comprar</button>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default App
