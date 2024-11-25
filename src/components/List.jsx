import React from 'react';
import { Table, Button } from 'react-bootstrap';

const List = ({ tasks, onRemove, onRefresh}) => {
  return (
    <div>
      {tasks.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nr</th>
              <th>Zadanie</th>
              <th>Akcja</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id}>
                <td>{index + 1}</td>
                <td>{task.name} : {task.count}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => onRemove(task.id)}
                  >
                    Usuń
                  </Button>
                  <Button
                    variant="warning"
                    onClick={() => onRefresh(task.id)}
                  >
                    Na koniec listy
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p className="text-center">Brak zadań na liście.</p>
      )}
    </div>
  );
};

export default List;
