import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddNewOne = ({ onAdd }) => {
   const [taskName, setTaskName] = useState('');
   const [taskCount, setTaskCount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(taskName, taskCount);
    setTaskName('');
    setTaskCount(0);
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4 w-100">
      <Form.Group className="container mb-3 row" >
        <Form.Label
          className='d-block'
        >Dodaj nowe zadanie:</Form.Label>
        <div class="row">
          <Form.Control 
            className='col me-2 w-75'
            type="text"
            placeholder="Wpisz nazwę zadania"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <Form.Control
            className='col'
            type="number"
            placeholder="ilosc"
            
            defaultValue={2}
            value={taskCount}
            onChange={(e) => setTaskCount(e.target.value)}
          />
        </div>
      </Form.Group>
      <Button variant="primary" type="submit">
        Dodaj
      </Button>
    </Form>
  );
};

export default AddNewOne;
