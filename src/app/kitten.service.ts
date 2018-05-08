import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag'

const getKittens= gql`
  query kittens{
    kittens{
      name
    }
  }
`;

const createKitten=gql`
  mutation createKitten($name:String!, $color:String!, $isFat:Boolean!, $isFierce:Boolean!){
    createKitten(name:$name, color:$color, isFat:$isFat, isFierce:$isFierce){
      name
      color
    }
  }
`;

const updateKitten= gql`
  mutation updateKitten($id:ID!, $name:String, $color:String, $isFat:Boolean, $isFierce:Boolean){
    updateKitten(id:$id, name:$name, color:$color, isFat:$isFat, isFierce:$isFierce){
      name
      color
    }
  }
`;
const deleteKitten=gql`
  mutation deleteKitten($id:ID!){
    deleteKitten(id:$id){
      name
    }
  }
`;

@Injectable()
export class KittenService {

  constructor( private apollo:Apollo) {}

  getAllKittens(){
    return this.apollo.query({
      query:getKittens
    }) 
  }
  newKitten(name, color, isFat, isFierce){
    return this.apollo.mutate({
      mutation:createKitten,
      variables:{
        name,
        color,
        isFat,
        isFierce
      }
    })
  }

  updatedKitten(id, name, color, isFat, isFierce){
    return this.apollo.mutate({
      mutation:updateKitten,
      variables:{
        id,
        name, 
        color,
        isFat,
        isFierce
      }
    })
  }

  deletedKitten(id){
    return this.apollo.mutate({
      mutation:deleteKitten,
      variables:{
        id
      }
    })
  }

}
