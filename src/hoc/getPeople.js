import { gql } from '@apollo/client';

const getPeopleData = gql`
query{allPeople{
    people{
      id
      name
      species{name}
      homeworld{name}
      birthYear
    }
  }}
`;
export default getPeopleData;
