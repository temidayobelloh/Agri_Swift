import './about_us.css';
import Footer from '../../Footer/footer';

const About =()=> {
    return (
        <>
        <div className="about-container">    
        <h2>About Us</h2>
        <p>Welcome to AgriSwift, where we are committed to revolutionizing the agricultural industry and combating food wastage through innovative technology solutions. At AgriSwift, we recognize the challenges faced by farmers, distributors, retailers, and consumers in the current food supply chain. With inefficiencies in transportation, distribution, and access to markets, a significant amount of fresh produce goes to waste every year. We believe that by leveraging technology and fostering direct connections between farmers and consumers, we can create a more sustainable and efficient agricultural ecosystem</p>
        <h2>Our Mission</h2>
        <p>Our mission at AgriSwift is to empower farmers, streamline distribution channels, and provide consumers with access to fresh, locally sourced produce. By connecting farmers directly with buyers, we aim to reduce food wastage, support local economies, and promote sustainable farming practices.</p>
        <h2>Our Team</h2>
        <p>Behind AgriSwift is a dedicated team of professionals passionate about leveraging technology for social good. From software developers and data scientists to agricultural experts and sustainability advocates, we bring together diverse expertise to tackle the challenges of food wastage head-on.</p>
        </div>
        <Footer/>
        </>
    );
};

export default About;