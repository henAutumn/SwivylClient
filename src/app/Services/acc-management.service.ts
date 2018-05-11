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

  // const subscribeUsers=gql `
  //   subscription userSubscription{
  //     node{
  //       firstName
  //       lastName
  //       email
  //     }
  //   }`;

@Injectable()
export class AccManagementService {


  constructor(private apollo: Apollo) { }

  getUsers(){
    return this.apollo.query({query:getUsers, fetchPolicy:'network-only'})
  };

<<<<<<< HEAD
  // subcribeUsers(){
  //   return this.apollo.subscription()
  // }

  createUser(email, password, firstName, lastName) {
=======
  createUser(email, password, firstName, lastName, title) {
>>>>>>> 0dfa47b994a0e94c76e24e9108940ef1dc1adcdb
    return this.apollo.mutate({
      mutation: createUser,
      variables:{
        email,
        password,
        firstName,
        lastName,
        title
      }
    })
  }
}
