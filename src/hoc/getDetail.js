import { gql } from '@apollo/client';

const getDetail = gql`
query person($id: ID) {
  person(id: $id) {
    name
    birthYear
   eyeColor
   hairColor
   skinColor
   vehicleConnection{
     vehicles{name}
   }
  }
}
`;
export default getDetail;
