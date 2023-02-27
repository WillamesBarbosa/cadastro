import { useState } from 'react';
import P from 'prop-types';
import './style.css';

function Table({ register, handleSelectUser }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <input
        type="search"
        className="form-control search"
        placeholder="Pesquisar"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Cidade</th>
            <th>Selecionar</th>
          </tr>
        </thead>

        <tbody>
          {register
            .filter(
              (people) =>
                people.registerName.toUpperCase().includes(searchTerm) ||
                people.registerName.toLowerCase().includes(searchTerm),
            )
            .map((people, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th>{people.registerName}</th>
                  <th>{people.registerAge}</th>
                  <th>{people.registerCity}</th>
                  <th>
                    <button className="btn btn-success" onClick={() => handleSelectUser(index)}>
                      Selecionar
                    </button>
                  </th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  register: P.array.isRequired,
  handleSelectUser: P.func.isRequired,
};

export default Table;
