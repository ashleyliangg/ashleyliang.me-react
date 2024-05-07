import { useState } from "react"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const sliderStyles = {
        height: "100%",
        width: "100%",
        position: "relative",
				marginBottom: "20px",
    };

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(/public/${slides[currentIndex].url})`
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0%, -50%)',
        left: '32px',
        fontSize: '25px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
				borderRadius: '10px',
				backgroundColor: 'rgba(169, 245, 242, .8)',
				padding: '5px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '25px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
				borderRadius: '10px',
				backgroundColor: 'rgba(169, 245, 242, .8)',
				padding: '5px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
    };
    
    const dotContainer = {
        display: 'flex',
        justifyContent: 'center',
				marginBottom: '20px'
    }

    const dotStyle = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '40px',
				color: '#6cd9d5',
    }

    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1: currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0: currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrev}><ArrowBackIosNewIcon/></div>
            <div style={rightArrowStyles} onClick={goToNext}><ArrowForwardIosIcon/></div>
            <div style={slideStyles}></div>
            <div style={dotContainer}>
                {slides.map((slide) => (
                    <div style={dotStyle} onClick={() => goToSlide(slide.index)}>•</div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider