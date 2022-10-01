import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <button className='footer-btn'> Inicio de página </button>
      <section>
        <div>
            <strong>Cónocenos</strong>
            <p>Trabaja con nosotros</p>
            <p>Información corporativa</p>
            <p>Departamento de prensa</p>
        </div>
        <div>
            <strong>Gana dinero con nosotros</strong>
            <p>Vender en </p>
            <p>Pogramas afiliados</p>
            <p>Anuncia tus productos</p>
        </div>
        <div>
            <strong>Métodos de pago</strong>
            <p>Tarjeta de crédito y débito</p>
            <p>Tarjetas de regalo</p>
            <p>Pago en efectivo</p>
            <p>Meses sin intereses</p>
        </div>
      </section>
      <section>
        <h1>Logo de la tienda</h1>
        <div>
            <span>México</span>
            <span>Colombia</span>
            <span>Venezuela</span>
            <span>Argentina</span>
            <span>Uruguay</span>
            <span>Brasil</span>
            <span>Web Services</span>
        </div>
        <div>
            <span>Condiciones de uso</span>
            <span>Aviso de privacidad</span>
        </div>
      </section>
    </div>
  )
}

export default Footer
