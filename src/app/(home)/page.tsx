
import UsersPage from '../users/page';
import WasteManagement from '../../components/ui/homepage';

import HeroSection from './homepageComp/hero';
import AboutSection from './homepageComp/part1';
import ServicesSection from './homepageComp/part2Services';

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
    </main>
  );
}

/*
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Waste Management</title>
  <link rel="icon" href="/images/favicon-enhanced.png">
  <link rel="stylesheet" href="css/style.css" />
  <link rel="manifest" href="manifest.json">
  <link rel="apple-touch-icon" href="/images/favicon-enhanced.png" />
  <meta name="theme-color" content="#000000" />
  <link rel="stylesheet" text="text/CSS"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
  <link rel="stylesheet" type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
  <link rel="stylesheet" text="text/CSS"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>
<style>
  html {
    scroll-behavior: smooth;

  }

  .hidden {
    visibility: hidden;
  }

  .back-top-wrap {
    position: fixed;
    bottom: 5rem;
    right: 1rem;
    background-color: #80F7D1;
    padding: 1rem 1.2rem;
    border-radius: 50%;
    cursor: pointer;
    transition: .3s ease-in-out;
    z-index: 100;
  }

  .back-top-wrap:hover {
    background-color: #00a2ff;
    color: #80F7D1;
  }

  .back-top-wrap:hover .fas.fa-arrow-up {
    color: white;
  }

  .fas.fa-arrow-up {
    color: #00488F;
    transition: 0.3s ease-in-out;
  }
</style>

<body onload="myFunction()">
  <div class="loading-wrapper">
    <img src="./logo.jpg" id="loading" />
  </div>

  <!-- Back to top button -->
  <div id="back-top-div" class="back-top-wrap">
    <i class="fas fa-arrow-up"></i>
  </div>
  <header>
    <nav class="nav" id="nav">
      <div>
        <a class="navbar-brand" href="#!"> <img src="logo.jpg" alt="Logo" class="logo" style="margin: 20px ; border-radius: 70%;" /></a>
      </div>
      <div class="nav-links" id="navLinks">
        <ul class="links" id="navmenu">
          <li><a href="#">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#services">SERVICES </a></li>
          <li><a href="html/contact.html">CONTACT US </a></li>
        </ul>
      </div>
      <button class="login-button"><a href="html/login.html">SignUp / Login</a></button>
      <div class="hamburger" id="ham">
        <i class="cancel fa-solid fa-xmark"></i>

        <svg class="burger" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z">
          </path>
        </svg>
      </div>
    </nav>
    <div class="menu" id="menu">
      <ul class="menu-link">
        <li><a href="#">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICES </a></li>
        <li><a href="html/contact.html">CONTACT US </a></li>
      </ul>
    </div>
    <div class="content">
      <h1>Scrap Smart, Save the Planet!</h1>
      <div class="container">
        <h3><span class="auto-type" style="font-size: 40px;font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;"></a></span></h3>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
      <script>
        var typed = new Typed(".auto-type", {
          strings: ["Sustainable solutions for a cleaner tomorrow, starting with waste today."],
          typeSpeed: 50,
          backspeed: 50,
          loop: true
        })
      </script>
      <a href="#services" class="rainbow-button" alt="Explore"></a>
    </div>

  </header>

  <!-- About Section -->
  <section id="about" class="about">
    <h1 data-aos="flip-right">About Waste Management Inc.</h1>
    <div class="max-width">
      <h2>Our Mission</h2>
      <div data-aos="zoom-in" class="photo"><img src="./images/about.jpg" alt="" height="300px" width="330px"></div>
      <div class="about-content">
        <p data-aos="fade-left" class="text-1">At Waste Management Inc., we're dedicated to provide sustainable waste management solutions to preserve the environment for future generations. We believe in reducing waste, promoting recycling, and minimizing our ecological footprint.</p>
        
      </div>
    </div>
   </section>
      </div>

    </div>
  </section>




  <!-- SERVICES SECTION -->
  <section id="services">
    <h1>Services</h1>
    <div data-aos="zoom-in" data-aos-duration="800" class="container">
      <div class="responsive audio">
        <div class="round-image">
          <img src="./images/residential.jpg" alt="audio" loading="lazy" />
        </div>
        <div class="description">
          <h2>Residential Collection</h2>
          <p>
            Bringing convenience to your doorstep, one bin at a time – residential waste collection done right.
          </p>
          <a href="html/residential.html">
            Let's Explore
          </a>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-duration="800" class="responsive reading">
        <div class="round-image">
          <img src="./images/recycling.jpeg" alt="read" loading="lazy" />
        </div>
        <div class="description">
          <h2>Recycling Programs</h2>
          <p>
            Empowering communities through recycling initiatives – turning waste into opportunity, one program at a time.
          </p>
          <a href="html/recycling.html">
            Let's Explore
          </a>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-duration="800" class="responsive yoga">
        <div class="round-image">
          <img src="./images/segregation.png" alt="segregation" loading="lazy" />
        </div>
        <div class="description">
          <h2>Waste Segregation Guidelines</h2>
          <p>
            Provide guidelines on how residents should segregate their waste
          </p>
          <a href="html/segregation.html">
            Let's Explore
          </a>
        </div>
      </div>
      
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <!-- Testimonials Section -->
  <section id="testimonial" class="section-100">
    <div class="testimonials_heading">
      <h1>Innovative Waste Management Services and Solutions</h1>
    </div>
    <div class="testimonial-view">
      <div class="owl-carousel">
        <div class="testimonial-box">

          <figure class="testimonal-Card">
            <blockquote>Developing circular economy models that emphasize waste prevention, product redesign for recyclability, and closed-loop systems where materials are continuously reused or recycled. This fosters a sustainable approach to waste management by minimizing waste generation and maximizing resource recovery.
              <div class="arrow"></div>
            </blockquote>
            <div class="author">
              <h5>Circular Economy Initiatives</h5>
            </div>
        </div>
        <div class="testimonial-box">
          <!-- <i class="fa fa-quote-left quote-icon"></i> -->
          <figure class="testimonal-Card hover">
            <blockquote>Deploying innovative technologies like anaerobic digestion and thermal treatment (e.g., incineration with energy recovery) to convert organic waste into biogas or electricity. This reduces the volume of waste going to landfills and generates renewable energy.<div class="arrow"></div>
            </blockquote>
            <div class="author">
              <h5>Waste-to-Energy Technologies</h5>
            </div>
          </figure>
        </div>
        <div class="testimonial-box">
          <!-- <i class="fa fa-quote-left quote-icon"></i> -->
          <figure class="testimonal-Card">
            <blockquote>Implementing IoT (Internet of Things) sensors and data analytics to optimize waste collection routes, schedule pickups based on fill-level sensors in bins, and reduce operational costs. This ensures timely and efficient waste collection while minimizing carbon emissions.
              <div class="arrow"></div>
            </blockquote>
            <div class="author">
              <h5>Smart Waste Collection Systems</h5>
            </div>
          </figure>

        </div>
        <div class="testimonial-box">
          <!-- <i class="fa fa-quote-left quote-icon"></i> -->
          <figure class="testimonal-Card">
            <blockquote>Utilizing cutting-edge sorting technologies such as optical sorting, robotics, and artificial intelligence to efficiently separate and process different types of waste streams. This improves recycling rates and reduces contamination in recycling facilities.
              <div class="arrow"></div>
            </blockquote>
            
            <div class="author">
              <h5>Advanced Sorting Technologies</h5>
            </div>
          </figure>

        </div>
      </div>
    </div>
    </div>
  </section>
  <!-- Faq section -->
  <section class="faq">
    <div class="faq_heading">
      <h1>Frequently Asked Questions</h1>
    </div>
    <div class="accordion">
      <div class="accordion__item">
        <button class="accordion__btn">

          <span class="accordion__caption"><i class="far fa-lightbulb"></i>What is waste management?</span>
          <span class="accordion__icon"><i class="fa fa-plus"></i></span>
        </button>

        <div class="accordion__content">
          <p> Waste management involves the collection, transportation, processing, recycling, and disposal of waste materials generated by human activities. The goal is to minimize the negative impact of waste on the environment and public health while maximizing resource recovery and sustainability.</p>
        </div>
      </div>

      <div class="accordion__item">
        <button class="accordion__btn">

          <span class="accordion__caption"><i class="far fa-lightbulb"></i>Why is proper waste management important?</span>
          <span class="accordion__icon"><i class="fa fa-plus"></i></span>
        </button>

        <div class="accordion__content">
          <p>Proper waste management is crucial to prevent environmental pollution, conserve natural resources, reduce greenhouse gas emissions, and protect public health. It also promotes circular economy principles by maximizing the value of waste through recycling and reuse.
          </p>
        </div>
      </div>

      <div class="accordion__item">
        <button class="accordion__btn">

          <span class="accordion__caption"><i class="far fa-lightbulb"></i>What are the different types of waste?</span>
          <span class="accordion__icon"><i class="fa fa-plus"></i></span>
        </button>

        <div class="accordion__content">
          <p> Waste can be categorized into various types, including municipal solid waste (MSW), hazardous waste, electronic waste (e-waste), construction and demolition (C&D) waste, industrial waste, and biomedical waste. Each type requires specific handling and disposal methods.
          </p>
        </div>
      </div>

      <div class="accordion__item">
        <button class="accordion__btn">

          <span class="accordion__caption"><i class="far fa-lightbulb"></i>How can I reduce waste at home?</span>
          <span class="accordion__icon"><i class="fa fa-plus"></i></span>
        </button>

        <div class="accordion__content">
          <p>You can reduce waste at home by practicing the 3R's: Reduce (minimize consumption and avoid single-use items), Reuse (use items multiple times or repurpose them), and Recycle (sort and recycle materials like paper, plastics, glass, and metals).</p>
        </div>
      </div>

      <div class="accordion__item">
        <button class="accordion__btn">

          <span class="accordion__caption"><i class="far fa-lightbulb"></i>What should I do with hazardous waste?</span>
          <span class="accordion__icon"><i class="fa fa-plus"></i></span>
        </button>

        <div class="accordion__content">
          <p> Hazardous waste, such as batteries, paints, chemicals, and electronic devices, should be disposed of properly at designated drop-off locations or hazardous waste facilities. Never dispose of hazardous waste in regular trash or down drains.</p>
        </div>
      </div>

      <div class="accordion__item">
        <button class="accordion__btn">

          <span class="accordion__caption"><i class="far fa-lightbulb"></i> How does recycling benefit the environment?</span>
          <span class="accordion__icon"><i class="fa fa-plus"></i></span>
        </button>

        <div class="accordion__content">
          <p>Recycling conserves natural resources, reduces energy consumption and greenhouse gas emissions, prevents pollution associated with extracting raw materials, and helps minimize the amount of waste sent to landfills.</p>
        </div>
      </div>

      <div class="accordion__item">
        <button class="accordion__btn">

          <span class="accordion__caption"><i class="far fa-lightbulb"></i>What happens to waste after it is collected?</span>
          <span class="accordion__icon"><i class="fa fa-plus"></i></span>
        </button>

        <div class="accordion__content">
          <p>Collected waste is transported to facilities where it undergoes sorting, processing, and treatment. Recyclable materials are separated for recycling, while non-recyclable waste may be processed for energy recovery or disposed of in landfills.</p>
        </div>
      </div>

      <div class="accordion__item">
        <button class="accordion__btn">

          <span class="accordion__caption"><i class="far fa-lightbulb"></i>How can businesses improve waste management practices?</span>
          <span class="accordion__icon"><i class="fa fa-plus"></i></span>
        </button>

        <div class="accordion__content">
          <p>Businesses can implement waste reduction strategies, such as source reduction, adopting sustainable packaging, setting up recycling programs, and collaborating with waste management providers for proper disposal and recycling of materials.</p>
        </div>
      </div>

      <div class="accordion__item">
        <button class="accordion__btn">

          <span class="accordion__caption"><i class="far fa-lightbulb"></i>What is composting and how can I do it at home?</span>
          <span class="accordion__icon"><i class="fa fa-plus"></i></span>
        </button>

        <div class="accordion__content">
          <p>Composting is a natural process that breaks down organic waste (e.g., food scraps, yard trimmings) into nutrient-rich compost. You can compost at home using a compost bin or pile, combining organic materials with air, water, and microorganisms.</p>
        </div>
      </div>

      <div class="accordion__item">
        <button class="accordion__btn">

          <span class="accordion__caption"><i class="far fa-lightbulb"></i>How can I dispose of electronic waste (e-waste) responsibly?</span>
          <span class="accordion__icon"><i class="fa fa-plus"></i></span>
        </button>

        <div class="accordion__content">
          <p> Dispose of e-waste responsibly by taking it to designated e-waste recycling facilities or drop-off locations. Many electronics retailers and local municipalities offer e-waste recycling programs to ensure proper disposal and recycling of electronic devices.</p>
        </div>
      </div>
    </div>
    </div>
  </section>

  

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script>

    let preloader = document.querySelector(".loading-wrapper");
    function myFunction() {
      preloader.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
    let navbar = document.querySelector("#nav");
    let navmenu = document.querySelector("#navmenu");

    window.onscroll = function () {
      if (window.pageYOffset >= navmenu.offsetTop) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.onscroll = () => {
      if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
      } else {
        navbar.classList.remove('nav-active');
      }
    };
  </script>
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./serviceworker.js')
          .then((reg) => console.log('Success', reg.scope))
          .catch((err) => console.log('Error', err))
      })
    }
  </script>
  <script src="js/index.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
  <script src="js/script.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
</body>

</html>
*/
