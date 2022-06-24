import React, { useEffect, useState } from 'react';
import { GetCinemas } from './api';
import './App.scss';

export const App: React.FC = () => {
  const [cinemas, setCinemas] = useState<Cinema[] | null>(null);

  const cinem = async () => {
    const getCinema:Cinema[] = await GetCinemas();

    setCinemas(getCinema);
  };

  useEffect(() => {
    cinem();
  }, []);

  return (
    <div className="starter">
      {cinemas && cinemas.map(elem => (
        <h4 key={elem.id}>
          {elem.title}
        </h4>
      ))}
    </div>
  );
};
