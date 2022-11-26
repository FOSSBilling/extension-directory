// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { Extension } from 'path/to/interfaces';

export type Extension = {
  id: string
  type: string
  name: string
  description: string
  author: {
    name: string
    URL?: string
  }
  download_url: string
  version: string
  license: string
  icon_url?: string
}