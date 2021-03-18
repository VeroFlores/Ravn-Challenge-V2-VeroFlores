/* eslint-disable react/prop-types */
import React from 'react';
import {
  useQuery,
} from '@apollo/client';
// import { useParams } from '@reach/router';
import getDetail from '../../hoc/getDetail';

const Detail = ({ id }) => {
  console.log(id);
  const { loading, error, data } = useQuery(getDetail, {
    variables: { id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { person } = data;
  return (
    <section>
      <div>
        <h1>{person.name}</h1>
      </div>
      <h3>General information</h3>
      <div>
        <p>Eye Color</p>
        <p>{person.hairColor}</p>
      </div>
      <div>
        <p>Hair Color </p>
        <p>{person.hairColor}</p>
      </div>
      <div>
        <p>Skin Color </p>
        <p>{person.hairColor}</p>
      </div>
      <div>
        <p>Hair Color </p>
        <p>{person.skinColor}</p>
      </div>
      <div>
        <p>Birth Year </p>
        <p>{person.birthYear}</p>
      </div>
    </section>
  );
};
export default Detail;
