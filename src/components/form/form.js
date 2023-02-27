import P from 'prop-types';
import './style.css';

function Form({
  btnRegister,
  setName,
  setAge,
  setCity,
  signingUp,
  name,
  age,
  city,
  handleToAlter,
  handleDeletePeople,
  handleCancelAction,
}) {
  return (
    <form>
      <input
        value={name}
        type="text"
        placeholder="Nome"
        className="form-control"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={age}
        type="text"
        placeholder="Idade"
        className="form-control"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        value={city}
        type="text"
        placeholder="Cidade"
        className="form-control"
        onChange={(e) => setCity(e.target.value)}
      />

      {btnRegister ? (
        <input type="button" value="Cadastrar" className="btn btn-primary" onClick={signingUp} />
      ) : (
        <div>
          <input type="button" value="Alterar" className="btn btn-secondary" onClick={handleToAlter} />
          <input type="button" value="Excluir" className="btn btn-danger" onClick={handleDeletePeople} />
          <input type="button" value="Cancelar" className="btn btn-success" onClick={handleCancelAction} />
        </div>
      )}
    </form>
  );
}

Form.propTypes = {
  setName: P.func.isRequired,
  setAge: P.func.isRequired,
  setCity: P.func.isRequired,
  signingUp: P.func.isRequired,
  btnRegister: P.bool,
  name: P.string.isRequired,
  age: P.string.isRequired,
  city: P.string.isRequired,
  handleToAlter: P.func.isRequired,
  handleDeletePeople: P.func.isRequired,
  handleCancelAction: P.func.isRequired,
};

export default Form;
