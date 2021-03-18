import { gql } from '@apollo/client';

export const getPeopleData = gql`
query{allPeople{
    people{
      id
      name
      species{name}
      homeworld{name}
      birthYear
       __typename
      eyeColor
      hairColor
      skinColor
      vehicleConnection{
        vehicles{name}
      }   
    }
  }}
`;
export default getPeopleData;
