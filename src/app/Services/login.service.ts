import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const login = gql`
mutation login($email: String!, $password: String!){
  login(email: $email, password: $password){
 user{
   name
   id
    }
    token
  }
}`

const getUsers = gql`
  query users{
    id
    name
    agency
  }`
@Injectable()
export class LoginService {
  constructor(private apollo: Apollo) { }
  getUser(){
    return this.apollo.query({
      query: getUsers
    })
  }
  loginUser(email, password){
    return this.apollo.mutate({
      mutation: login,
      variables:{
        email,
        password

      }

    })
  }

}
