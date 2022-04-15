import "./image-frame.scss";

const ImageFrame = ({ name, images, extraClass }) => {
  return (
    <div className={`${extraClass ? extraClass : ""} image-frame`}>
      <picture>
        {images.svg ? (
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

        {images.png ? (
          <source
            className='image'
            src={require("../../../" + images.png)}
            alt={name}
          />
        ) : null}

        {images.jpg ? (
          <source
            type='image/jpeg'
            srcSet={require("../../../" + images.jpg)}
          />
        ) : null}

        <img className='image' src='' alt={name} />
      </picture>
    </div>
  );
};

export default ImageFrame;
