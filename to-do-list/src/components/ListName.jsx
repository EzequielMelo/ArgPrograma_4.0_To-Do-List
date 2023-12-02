import React, { useState } from 'react';

const ListName = ({ tittle, onTittleChange, darkMode }) => {
  const [editing, setEditing] = useState(false);
  const [editedTittle, setTittleEditado] = useState(tittle || 'Título de la lista');

  const handleTittleClick = () => {
    setEditing(true);
  };

  const handleTittleChange = (event) => {
    setTittleEditado(event.target.value);
  };

  const handleTittleBlur = () => {
    if (editedTittle.trim() === '') {
        setTittleEditado('Título de la lista'); // Restaurar el título por defecto si el texto está vacío
      }
    setEditing(false);
    onTittleChange(editedTittle);
  };

  return (
    <div>
      {editing ? (
        <input
          type="text"
          value={editedTittle}
          onChange={handleTittleChange}
          onBlur={handleTittleBlur}
          maxLength="20"
          autoFocus
          style={{backgroundColor: darkMode ? '#121F3D' : '#D9D9D9', color: darkMode ? '#ffff' : '#000'}}
        />
      ) : (
        <h3 onClick={handleTittleClick}>{editedTittle}</h3>
      )}
    </div>
  );
};

export default ListName;