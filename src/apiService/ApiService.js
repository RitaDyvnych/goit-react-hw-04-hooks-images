import axios from "axios";
import pixabay from "../apiService/pixabay.json";

export default class ImagesApiService {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
    this.base_url = pixabay.base_url;
    this.key = pixabay.key;
    this.per_page = pixabay.per_page;
  }

  resetPage() {
    this.page = 1;
  }
  get pages() {
    return this.page;
  }
  set pages(value) {
    this.page += value;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  searchImages() {
    const url = `${this.base_url}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${this.per_page}&key=${this.key}`;
    return axios.get(url).then((result) => result.data);
  }
}
