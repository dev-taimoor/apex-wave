import "./slidercard.css";

const SlideCard = ({title, desc, cover}) => {
  return (
    <div className='banner-box' >
      <img className='banner-image' src={cover} alt="#" />
      <div className="banner-text">{title}</div>
    </div>
  )
}

export default SlideCard;
