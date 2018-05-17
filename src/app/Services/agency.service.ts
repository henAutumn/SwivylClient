import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';



const createAgency = gql`
  mutation createAgency($masteruser:String!, $name:String!, $img:String!){
    createAgency(masteruser:$masteruser, name:$name, img:$img){
      name
      img
      id
      
    }
  }
`; 

const updateAgency = gql`
  mutation updateAgency($id:ID!, $masteruser:String! $name:String, $img:String!){
    updateAgency(id:$id, masteruser:$masteruser, name:$name, img:$img){
      name
      img
      id
    }
  }
`;

const deleteAgency= gql`
  mutation deleteAgency($id:ID!, $masteruser:String!){
    deleteAgency(id:$id, masteruser:$masteruser){
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

  createAgency(masteruser, name, img){
    return this.apollo.mutate({
      mutation:createAgency,
      variables:{
        masteruser,
        name,
        img
      }
    })
  };

  updateAgency(id, masteruser, name, img){
    return this.apollo.mutate({
      mutation:updateAgency,
      variables:{
        name,
        img, 
        masteruser,
        id
      }
    })
  };

  deleteUser(id, masteruser){
    return this.apollo.mutate({
      mutation:deleteAgency,
      variables:{
        id,
        masteruser
      }
    })
  };

  getAgency(){
    return this.apollo.query({ query: getAgency })
  };

}
