import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const createUser = gql`
  mutation createUser($email: String!, $password: String!, $firstName:String!, $lastName:String!, $title:String!, $isMU:Boolean, $agency:String!) {
    createUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName, title: $title, isMU:$isMU, agency:$agency) {
    user {
      firstName
      lastName
      id
    }
    token
  }
}`;

const getUsers = gql`
  query agency($id:ID!){
    agency(id:$id){
      teammembers{
        email
        id
        firstName
        lastName
        title
        isMU
      }
    }
  }`;

const addTeamMember = gql `
  mutation addTeamMember($id:ID!, $teammember:String!){
    addTeamMember(id:$id, teammember:$teammember)
    {teammembers{
        id
        firstName
        lastName
        title
        isMU
      }
    }
  }
  `


const updateUser = gql`
    mutation updateUser($id: ID!, $email: String, $firstName: String, $lastName: String, $title: String){
      updateUser(id: $id, email: $email, firstName: $firstName, lastName: $lastName, title: $title){
        id
        email
        firstName
        lastName
        title
      }
    }`;

const deleteUser = gql`
mutation deleteUser($id: ID!){
  deleteUser(id: $id){
    firstName
    lastName
  }
}`

@Injectable()
export class AccManagementService {


  constructor(private apollo: Apollo) { }

  updateUser(id, email, firstName, lastName, title) {
    return this.apollo.mutate({
      mutation: updateUser,
      variables: {
        id,
        email,
        firstName,
        lastName,
        title
      }
    })
  };

  getUsers(id) {
    return this.apollo.query({ 
      query: getUsers,
        variables:{
          id
        },
       fetchPolicy: 'network-only' })
  };

  addTeamMember(id, teammember){
    return this.apollo.mutate({
      mutation:addTeamMember,
      variables:{
        id,
        teammember
      }
    })
  };

  createUser(email, password, firstName, lastName, title, isMU, agency) {
    return this.apollo.mutate({
      mutation: createUser,
      variables: {
        email,
        password,
        firstName,
        lastName,
        title,
        isMU,
        agency
      }
    })
  };

  deleteUser(id){
    return this.apollo.mutate({
      mutation: deleteUser,
      variables: {
        id
      }
    })
  }
}
