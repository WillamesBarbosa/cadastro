import { useContext } from 'react';
import { ContextForm } from './App';

function Form() {
  const {
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
  } = useContext(ContextForm);
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

export default Form;
