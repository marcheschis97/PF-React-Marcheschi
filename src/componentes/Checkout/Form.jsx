import "./Checkout.css"

const Form = ({ datosForm, guardarDatosInput, enviarOrder }) => {
  return (
    <div>
      <h2>Porfavor complete con sus datos para terminar la compra:</h2>
      <form className="formulario" onSubmit={enviarOrder}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={datosForm.nombre}
          onChange={guardarDatosInput}
          required
        />

        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={datosForm.apellido}
          onChange={guardarDatosInput}
          required
        />

        <label htmlFor="telefono">Telefono</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          value={datosForm.telefono}
          onChange={guardarDatosInput}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={datosForm.email}
          onChange={guardarDatosInput}
          required
        />

        <label htmlFor="emailRepetido">Repetir Email</label>
        <input
          type="email"
          id="emailRepetido"
          name="emailRepetido"
          value={datosForm.emailRepetido}
          onChange={guardarDatosInput}
          required
        />

        <label htmlFor="direccion">Direccion</label>
        <input
          type="address"
          id="direccion"
          name="direccion"
          value={datosForm.direccion}
          onChange={guardarDatosInput}
          required
        />

        <button type="submit">Finalizar compra</button>
      </form>
    </div>
  );
};
export default Form;
