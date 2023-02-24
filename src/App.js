import { useState } from 'react';
import './App.css';
import Form from './components/form';
import Table from './components/table';

function App() {
  const [btnRegister, setBtnRegister] = useState(true);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [register, setRegister] = useState([]);
  const [indexVetor, setIndexVetor] = useState('');

  const signingUp = () => {
    const peopleInformation = {
      registerName: name,
      registerAge: age,
      registerCity: city,
    };

    setRegister([...register, peopleInformation]);

    setName('');
    setAge('');
    setCity('');
  };

  const handleSelectUser = (index) => {
    setIndexVetor(index);

    setName(register[index].registerName);
    setAge(register[index].registerAge);
    setCity(register[index].registerCity);

    setBtnRegister(false);
  };

  const handleToAlter = () => {
    const peopleInformation = {
      registerName: name,
      registerAge: age,
      registerCity: city,
    };

    const registerCopy = [...register];
    registerCopy[indexVetor] = peopleInformation;
    setRegister(registerCopy);

    setName('');
    setAge('');
    setCity('');

    setBtnRegister(true);
  };

  const handleDeletePeople = () => {
    const registerCopy = [...register];
    registerCopy.splice(indexVetor, 1);
    setRegister(registerCopy);

    setName('');
    setAge('');
    setCity('');

    setBtnRegister(true);
  };

  const handleCancelAction = () => {
    setName('');
    setAge('');
    setCity('');

    setBtnRegister(true);
  };

  return (
    <div>
      <Form
        btnRegister={btnRegister}
        setName={setName}
        setAge={setAge}
        setCity={setCity}
        signingUp={signingUp}
        name={name}
        city={city}
        age={age}
        handleToAlter={handleToAlter}
        handleDeletePeople={handleDeletePeople}
        handleCancelAction={handleCancelAction}
      />

      <Table handleSelectUser={handleSelectUser} register={register} />
    </div>
  );
}

export default App;
