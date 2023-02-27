import { useState } from 'react';
import Form from './components/form/form';
import Table from './components/table/table';

function App() {
  const [btnRegister, setBtnRegister] = useState(true);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [register, setRegister] = useState([]);
  const [indexVetor, setIndexVetor] = useState('');

  // Function to register people
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

  //Fuction to select people
  const handleSelectUser = (index) => {
    setIndexVetor(index);

    setName(register[index].registerName);
    setAge(register[index].registerAge);
    setCity(register[index].registerCity);

    setBtnRegister(false);
  };

  // Function to change person information
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

  // Function to delete people
  const handleDeletePeople = () => {
    const registerCopy = [...register];
    registerCopy.splice(indexVetor, 1);
    setRegister(registerCopy);

    setName('');
    setAge('');
    setCity('');

    setBtnRegister(true);
  };

  // Function to cancel action
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
