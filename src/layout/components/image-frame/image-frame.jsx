import "./image-frame.scss";
import "../../../assets/destination/image-moon.webp";

const ImageFrame = ({ name, images, extraClass }) => {
  return (
    <div className={`${extraClass ? extraClass : null} image-frame`}>
      <picture>
        {images.svg === null ? (
          <source
            type='image/svg+xml'
            srcSet={require("../../../" + images.svg)}
          />
        ) : null}

        {images.webp ? (
          <source
            type='image/webp'
            srcSet={require("../../../" + images.webp)}
          />
        ) : null}

        <img
          className='image'
          src={require("../../../" + images.png)}
          alt={name}
        />
      </picture>
    </div>
  );
};

export default ImageFrame;
