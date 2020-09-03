import React, { Component } from "react";
import Loading from "./Loader/Loader";
import ImageGallery from "./ImageGallery/ImageGallery";
import Notification from "./Notification/Notification";
import ImagesApi from "./api/ImagesApi";
import SearchBar from "./SearchBar/SearchBar";
import Modal from "./Modal/Modal";
import Button from "./Button/Button";
import "./App.css";

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    searchQuery: "",
    page: 1,
    // largeImageUrl: null,
    webformatURL: null,
    isShown: false,
    imgSrc: "",
    imgAlt: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
      // console.log("need request");
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });
    ImagesApi.fetchImagesWithQuery(searchQuery, page)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => {
        // console.log(error)
        this.setState({ error });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  openModal = (e) => {
    // console.log("e.target", e.target);
    const target = e.target;

    if (target.nodeName === "IMG") {
      this.setState(
        (prevState) => ({
          isShown: !prevState.isShown,
        }),
        this.setState({
          imgSrc: target.src,
          imgAlt: target.alt,
        })
      );
    } else return;
  };

  closeModal = () => {
    this.setState({
      isShown: false,
    });
  };

  render() {
    const { images, isLoading, error, isShown, imgSrc, imgAlt } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSearchFormSubmit} />

        {error && (
          <Notification message={`Whoops, something went wrong: ${error}`} />
        )}
        {isLoading && <Loading />}

        {images.length > 0 && (
          <ImageGallery images={images} openModal={this.openModal} />
        )}

        {images.length > 0 && !isLoading && (
          <Button loadMore={this.fetchImages} />
        )}

        {isShown && (
          <Modal imgSrc={imgSrc} imgAlt={imgAlt} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}
