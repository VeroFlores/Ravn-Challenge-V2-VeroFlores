import React from 'react';
import {
  useQuery,
} from '@apollo/client';
import { getPeopleData } from '../hoc/getPeople';

const GetData = () => {
  const { loading, error, data } = useQuery(getPeopleData);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    data.allPeople.people.map((el) => (
      <>
        <p>{el.name}</p>
        {el.species === null ? <p>Human from</p> : (
          <p>
            {el.species.name}
            {' '}
            from
          </p>
        )}
        <p>
          {el.homeworld.name}
        </p>
      </>
    ))
  );
};
export default GetData;
