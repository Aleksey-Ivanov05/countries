import React from 'react';

interface Props {
  name: string;
  onClick: React.MouseEventHandler;
}

const Country: React.FC<Props> = ({name, onClick}) => {
  return (
    <p className="text-decoration-underline m-1" onClick={onClick}>{name}</p>
  );
};

export default Country;