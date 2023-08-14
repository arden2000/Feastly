import { NextResponse } from "next/server";
import { createApi } from 'unsplash-js';


const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  //...other fetch options
});
const getPhoto = () => {
  unsplash.search.getPhotos({
    query: 'cat',
    page: 1,
    perPage: 1
  }).then(result => {
    if (result.errors) {
      // handle error here
      console.log('error occurred: ', result.errors[0]);
    } else {
      // handle success here
      const photo = result.response;
      console.log(photo);
    }
  });
}
