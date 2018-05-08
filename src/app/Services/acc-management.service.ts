import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const createUser = gql`
  mutation createUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
    user {
      name
      id
    }
    token
  }
}

`;

@Injectable()
export class AccManagementService {

  constructor(private apollo: Apollo){} 
createUser(email, password, name){
  return this.apollo.mutate({
    mutation: createUser,
    variables: {
      email,
      password,
      name
    }
  })
 }
}
