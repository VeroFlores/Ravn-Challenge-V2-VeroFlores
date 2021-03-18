import React from 'react';
import {
  useQuery,
} from '@apollo/client';
import { FaAngleRight } from 'react-icons/fa';
import getPeopleData from '../../hoc/getPeople';
import Loading from '../Loading/index';
import Failed from '../Failed/index';
import {
  Header, TextBox, Item, PersonTitle, LowEmphasis, Link,
} from './style';

const People = () => {
  const { loading, error, data } = useQuery(getPeopleData);
  if (loading) return <Loading />;
  if (error) return <Failed />;
  return (
    <section>
      <Header>People of Stars Wars</Header>
      <ul>
        {data.allPeople.people.map((el) => (
          <Item key={el.id}>
            <TextBox>
              <PersonTitle>{el.name}</PersonTitle>
              {el.species === null ? (
                <LowEmphasis>
                  Human from
                  {el.homeworld.name}
                </LowEmphasis>
              ) : (
                <LowEmphasis>
                  {el.species.name}
                  {' '}
                  from
                  {el.homeworld.name}
                </LowEmphasis>
              )}
            </TextBox>
            <Link to={`/detail/${el.id}`}><FaAngleRight /></Link>
          </Item>
        ))}
      </ul>
    </section>
  );
};
export default People;
