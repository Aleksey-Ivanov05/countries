import React from 'react';

interface Props {
  name: string;
}

const Country: React.FC<Props> = ({name}) => {
  return (
    <p className="text-decoration-underline m-1">{name}</p>
  );
};

export default Country;