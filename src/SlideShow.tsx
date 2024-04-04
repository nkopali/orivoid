import "react-image-gallery/styles/css/image-gallery.css";
import image1 from './assets/photos/image00009.jpeg';
import image2 from './assets/photos/image00008.jpeg';
import image3 from './assets/photos/image00007.jpeg';
import ImageGallery from "react-image-gallery";

const slideImages = [
    {
        original: image1,
    },
    {
        original: image2,
    },
    {
        original: image3,
    },
];

export const Slideshow = () => {
    return (
        <div className="slide-container">
            <ImageGallery
                items={slideImages}
                showFullscreenButton={false}
                showPlayButton={false}
                original={slideImages}
                showThumbnails={false}
                showBullets={true}
                showNav={false}
                slideDuration={500}
                autoPlay={true} />
        </div>
    )
}