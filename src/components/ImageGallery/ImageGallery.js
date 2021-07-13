import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.scss";
import fetchApi from "../../services/pixabay-api.js";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    // console.log(prevName);
    // console.log(nextName);
    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });
      setTimeout(() => {
        fetchApi
          .fetchImage(nextName)
          .then((hits) =>
            this.setState({ images: hits, status: Status.RESOLVED })
          )
          .catch((error) => this.setState({ error, status: Status.REJECTED }));
      }, 2000);
    }
  }

  render() {
    const { images, error, status } = this.state;
    // console.log(images);
    //const { imageName } = this.props;
    // console.log(imageName);

    return (
      <ul className={s.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            onSelect={() => this.props.onSelectImage(largeImageURL)}
          />
        ))}
      </ul>
    );
  }
}
