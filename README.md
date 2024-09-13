# SuperCarSphere

Table of Contents

    1. Project Overview

    2. Features

    3. Technologies Used

    4. Installation and Setup

    5. Usage

    6. Project Structure
    

1. Project Overview

       SuperCarSphere is an engaging and sleek webpage that presents a curated selection of supercars. The 
       site emphasizes performance and style, using interactive animations and modern design elements to 
       offer a dynamic and captivating browsing experience. It is built using HTML for structure, CSS for 
       styling, and JavaScript for dynamic interactions, while libraries like SwiperJS and GSAP enhance its 
       functionality and visual appeal.

2. Features

       • Responsive Design: Optimized for multiple screen sizes and devices, providing a consistent 
       experience on desktops, tablets, and smartphones.

       • Sleek Animations: Smooth, interactive animations powered by GSAP (GreenSock Animation Platform).

       • Interactive Car Slider: Integrated with SwiperJS to offer a touch-friendly, responsive car gallery 
       slider with swipe functionality.

       • Engaging Car Profiles: Each supercar is displayed with its image, detailed specifications, and key 
       features.


3. Technologies Used

       • HTML5: Structure of the webpage.
   
       • CSS3: Styling and layout of the web pages.
   
          • Flexbox and Grid for responsive design.
   
          • Custom animations and hover effects.
   
       • JavaScript: Dynamic functionality and DOM manipulation.
   
       • SwiperJS: Responsive slider functionality for showcasing supercars.
   
       • GSAP (GreenSock Animation Platform): Smooth and highly performant animations.
       
3.1 External Libraries and Frameworks:

       • SwiperJS: For creating touch sliders with a rich array of features.
       
       • GSAP: For animating elements with smooth transitions, scroll-based triggers, and advanced timeline 
       controls.

4. Installation and Setup
Follow the steps below to set up SuperCarSphere on your local machine:

       1. Clone the Repository

           git clone https://github.com/your-username/SuperCarSphere.git
           cd SuperCarSphere

       2.  Open the Project
   
          Open the index.html file in your browser to see the webpage in action.

       3. (Optional) Local Development Environment

           To set up a local development environment, you can use a simple HTTP server (like VSCode’s live 
            server extension, Python's HTTP server, or Node.js).
              Using Python HTTP Server:
                 python -m http.server

                     Then visit http://localhost:8000 in your browser.

5. Usage

       The webpage allows users to explore different supercars through a dynamic and visually appealing 
       interface. Users can swipe through cars, view detailed information, and enjoy smooth animations and 
       transitions as they browse.

6. Project Structure

SuperCarSphere/

       │
       ├── index.html                # Main entry point of the webpage
       ├── assets/
       ├── css/
       │   ├── styles.css                       # Main CSS file for styling the webpage
       |   ├──  swiper-bundle.min.css           # Main CSS file for styling the swiper class
       │
       ├── js/
       │   ├── main.js               # JavaScript for webpage functionality
       │   ├── swiper.min.js         # SwiperJS library for sliders
       │   ├── gsap.min.js           # GSAP animation library
       │
       ├── images/
       │   ├── car-1.png              # Images of the supercars
       │   ├── car-2.png              # ...
       │
       └── README.md  

Thank you for checking out SuperCarSphere! If you have any questions or suggestions, feel free to reach out.
