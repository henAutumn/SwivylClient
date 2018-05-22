import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';



const createAgency = gql`
  mutation createAgency( $name:String!, $img:String!){
    createAgency(name:$name, img:$img){
      name
      img
      id  
    }
  }
`; 

const updateAgency = gql`
  mutation updateAgency($id:ID!, $name:String, $img:String!){
    updateAgency(id:$id, name:$name, img:$img){
      name
      img
      id
    }
  }
`;

const deleteAgency= gql`
  mutation deleteAgency($id:ID!){
    deleteAgency(id:$id, ){
      name
    }
  }
`;

const getAgency = gql`
query agencies{
  agencies{
    name
    img
    id
  }
}
`;


@Injectable()
export class AgencyService {

  constructor(private apollo:Apollo) { }

  createAgency( name, img){
    return this.apollo.mutate({
      mutation:createAgency,
      variables:{
        name,
        img
      }
    })
  };

  updateAgency(id, name, img){
    return this.apollo.mutate({
      mutation:updateAgency,
      variables:{
        name,
        img, 
        id
      }
    })
  };

  deleteUser(id){
    return this.apollo.mutate({
      mutation:deleteAgency,
      variables:{
        id
      }
    })
  };

  getAgency(){
    return this.apollo.query({ query: getAgency })
  };

}
