import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const createUser = gql`
  mutation createUser($email: String!, $password: String!, $firstName:String!, $lastName:String!, $title:String!) {
    createUser(email: $email, password: $password, firstName:$firstName, lastName:$lastName, title:$title ) {
    user {
      firstName
      lastName
      id
    }
    token
  }
}`;

const getUsers = gql`
  query users{
    users{
      id
      email
      password
      firstName
      lastName
      title
    }
  }`;

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

  getUsers() {
    return this.apollo.query({ query: getUsers, fetchPolicy: 'network-only' })
  };

  createUser(email, password, firstName, lastName, title) {
    return this.apollo.mutate({
      mutation: createUser,
      variables: {
        email,
        firstName,
        lastName,
        title
      }
    })
  }
}
