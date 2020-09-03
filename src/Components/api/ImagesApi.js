import axios from "axios";

const fetchImagesWithQuery = (searchQuery, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=17617972-3da791f5653deb15d8df96d4c&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default { fetchImagesWithQuery };
