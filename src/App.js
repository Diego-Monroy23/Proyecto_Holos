import Header from "./components/Header"
import CardOne from "./components/CardOne"
import Forma from "./components/Forma"
import CardTwo from "./components/CardTwo"

import imgOne from "./assets/img/Brallet1.jpg"
import imgTwo from "./assets/img/Brallet2.jpg"
import imgThree from "./assets/img/Brallet3.jpg"
import imgFour from "./assets/img/Brallet4.jpg"
import imgFive from "./assets/img/imagenPrueba1.jpg"
import imgSix from "./assets/img/imagenPrueba2.jpg"
import imgSeven from "./assets/img/imagenPrueba3.jpg"
import imgEight from "./assets/img/imagenPrueba4.jpg"
import iconOne from "./assets/img/icono1.png"
import iconTwo from "./assets/img/icono2.png"
import iconThree from "./assets/img/icono3.png"

function App() {
  return (
    <div className="App">
      <Header />
      <section className="seccion1">
        <CardOne title="Brallet Estilo Italiano" imageUrl={imgOne} />
        <CardOne title="Brallet Estilo Español" imageUrl={imgTwo} />
        <CardOne title="Brallet Estilo Frances" imageUrl={imgThree} />
        <CardOne title="Brallet Estilo Ingles" imageUrl={imgFour} />
      </section>

      <section className="features">
       <CardTwo title="Comentarios de nuestros clientes" text="La mejor experiencia la tuve con HOLOS" iconUrl={iconTwo} link="Mas comentarios→" imageUrl2={imgFive}/>
       <CardTwo title="Las Novedades de este mes" text="Aqui pudes ver los nuevos productos de este mes" iconUrl={iconOne} link="Lo mejor del mes→"  imageUrl2={imgSix}/>
       <CardTwo title="Proximos Lanzamientos" text="La mejor experiencia la tuve con HOLOS" iconUrl={iconThree} link="Preventa→"  imageUrl2={imgSeven}/>
       <CardTwo title="Comentarios de nuestros clientes" text="La mejor experiencia la tuve con HOLOS" iconUrl={iconTwo} link="Publish instantly →" imageUrl2={imgEight}/>
      </section>

      <Forma />
    </div>
  )
}

export default App
