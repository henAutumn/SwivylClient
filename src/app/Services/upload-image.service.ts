import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const createUpload = gql`
  mutation createUpload($name: String!, $type: String!, $size: Int!, $path: String! ) {
    createUpload(name: $name, type: $type, size: $size, path: $path) {
      name
      type
      size
      path
    }
  }
`

@Injectable()
export class UploadImageService {

  constructor(private apollo: Apollo) { }

  createUpload(name, type, size, path) {
    return this.apollo.mutate({
      mutation: createUpload,
      variables: {
        name,
        type,
        size,
        path
      }
    })
  }
}
