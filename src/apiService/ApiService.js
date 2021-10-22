import axios from "axios";
import pixabay from "../apiService/pixabay.json";

export default function ImagesApiService(searchQuery, page) {
  const base_url = pixabay.base_url;
  const key = pixabay.key;
  const per_page = pixabay.per_page;
  const url = `${base_url}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=${per_page}&key=${key}`;
 
  return axios.get(url).then((result) => result.data);
  
}