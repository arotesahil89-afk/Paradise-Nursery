import { useNavigate } from 'react-router-dom';
import '../styles/AboutUs.css';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div className="landing-page">
      <div className="landing-overlay"></div>
      <div className="landing-content">
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-description">
          Welcome to Paradise Nursery, your one-stop destination for premium houseplants and
          natural home décor. We offer a carefully curated collection of air-purifying plants,
          medicinal herbs, and decorative specimens that bring nature's beauty and wellness
          benefits into your home. Each plant is nurtured with care and expertise to ensure
          you receive the healthiest specimens. Whether you're a seasoned plant parent or just
          starting your green journey, our knowledgeable team is here to help you find the
          perfect plants for your space.
        </p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
