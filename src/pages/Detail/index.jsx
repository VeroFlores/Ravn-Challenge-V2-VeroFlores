/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  useQuery,
} from '@apollo/client';
import { FaArrowLeft } from 'react-icons/fa';
import {
  Header, Link, Subtitle, InfoCell, LowEmphasis, DetailText,
} from './style';
// import { useParams } from '@reach/router';
import getDetail from '../../hoc/getDetail';
import Loading from '../../components/Loading/index';
import Failed from '../../components/Failed/index';

const Detail = ({ id }) => {
  const { loading, error, data } = useQuery(getDetail, {
    variables: { id },
  });
  if (loading) return <Loading />;
  if (error) return <Failed />;
  const { person } = data;
  return (
    <section>
      <Header>
        <Link to="/"><FaArrowLeft /></Link>
        <h1>{person.name}</h1>
      </Header>
      <Subtitle>General information</Subtitle>
      <InfoCell>
        <LowEmphasis>Eye Color</LowEmphasis>
        <DetailText>{person.hairColor}</DetailText>
      </InfoCell>
      <InfoCell>
        <LowEmphasis>Hair Color </LowEmphasis>
        <DetailText>{person.hairColor}</DetailText>
      </InfoCell>
      <InfoCell>
        <LowEmphasis>Skin Color </LowEmphasis>
        <DetailText>{person.hairColor}</DetailText>
      </InfoCell>
      <InfoCell>
        <LowEmphasis>Hair Color </LowEmphasis>
        <DetailText>{person.skinColor}</DetailText>
      </InfoCell>
      <InfoCell>
        <LowEmphasis>Birth Year </LowEmphasis>
        <DetailText>{person.birthYear}</DetailText>
      </InfoCell>
      <Subtitle>Vehicles</Subtitle>
      <div>
        {person.vehicleConnection.vehicles.map((vehicle, i) => (
          <InfoCell key={i}>
            <LowEmphasis>{vehicle.name}</LowEmphasis>
          </InfoCell>

        ))}
      </div>
    </section>
  );
};
export default Detail;
