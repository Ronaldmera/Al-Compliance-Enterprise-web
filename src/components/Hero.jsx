const Hero = ({
  image,
  text,
  iconClass = "",
  iconColor = "text-secondary",
  containerAnimation,
  textAnimation,
}) => {
  return (
    <div className="container-fluid px-0 hero-container">
      <img src={image} alt="hero" className="images-hero" />
      <div className="overlay"></div>
      <div className="hero-content">
        {text && (
          <h1 className="hero-text text-light">
            <i className={`${iconClass} ${iconColor}  `}></i>
            {text}
            <i className={`${iconClass} ${iconColor} `}></i>
          </h1>
        )}
      </div>
    </div>
  );
};

export default Hero;
