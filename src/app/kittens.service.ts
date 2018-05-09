// import { Injectable } from '@angular/core';
// import { Apollo } from 'apollo-angular';
// import gql from 'graphql-tag';

// const getKittens = gql`
//   query kittens{
//     kittens{
//       name
//       fierce
//       owner {
//       name
//       }
//     }
//   }
// `;

// const createKitten = gql`
//   mutation createKitten($name: String!, $color: String!, $fat: Boolean!, $fierce: Boolean!){
//     createKitten(name: $name, color: $color, fat: $fat, fierce: $fierce){
//       name
//       color
//     }
//   }
// `;

// const updateKitten = gql`
//   mutation updateKitten($id: ID!, $name: String, $color: String, $fat: Boolean, $fierce: Boolean){
//     updateKitten(id: $id, name: $name, color: $color, fat: $fat, fierce: $fierce){
//       name
//       color
//       fat
//       fierce
//     }
//   }
// `;

// const deleteKitten = gql`
//   mutation deleteKitten($id: ID!){
//     deleteKitten(id: $id){
//       name
//     }
//   }
// `;

// @Injectable()
// export class KittensService {

//   constructor(private apollo: Apollo) { }

//   getAllKittens() {
//     return this.apollo.query({
//       query: getKittens
//     })
//   }

//   newKitten(name, color, fat, fierce) {
//     return this.apollo.mutate({
//       mutation: createKitten,
//       variables: {
//         name,
//         color,
//         fat,
//         fierce
//       }
//     })
//   }

//   updatedKitten(id, name, color, fat, fierce) {
//     return this.apollo.mutate({
//       mutation: updateKitten,
//       variables: {
//         id,
//         name,
//         color,
//         fat,
//         fierce
//       }
//     })
//   }

//   deletedKitten(id) {
//     return this.apollo.mutate({
//       mutation: deleteKitten,
//       variables: {
//         id
//       }
//     })
//   }

// }
