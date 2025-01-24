const Projects = () => (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 py-16 px-8 bg-animate-gradient">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">My Projects</h2>
        <p className="text-lg text-white mb-10">
          Here are a few projects I've worked on, showcasing my skills in software development, data science, and machine learning.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Project 1: Email Spam Detection */}
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 transform">
            <h3 className="text-2xl font-semibold text-white mb-4">Email Spam Detection</h3>
            <p className="text-white mb-4">
              A machine learning project that classifies emails as spam or not spam using natural language processing (NLP) techniques.
            </p>
            <a
              href="https://github.com/your-repo/spam-detection"  // Replace with your project link
              className="text-white hover:underline transition"
            >
              View Project
            </a>
          </div>
  
          {/* Project 2: E-commerce Sales Prediction */}
          <div className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 transform">
            <h3 className="text-2xl font-semibold text-white mb-4">E-commerce Sales Prediction</h3>
            <p className="text-white mb-4">
              This project uses machine learning to predict future sales for e-commerce platforms, helping businesses optimize inventory and promotions.
            </p>
            <a
              href="https://github.com/your-repo/ecommerce-sales-prediction"  // Replace with your project link
              className="text-white hover:underline transition"
            >
              View Project
            </a>
          </div>
  
          {/* Project 3: BMI Calculator */}
          <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 transform">
            <h3 className="text-2xl font-semibold text-white mb-4">BMI Calculator</h3>
            <p className="text-white mb-4">
              A responsive BMI calculator built with React, allowing users to easily calculate their body mass index and track their fitness goals.
            </p>
            <a
              href="https://github.com/your-repo/bmi-calculator"  // Replace with your project link
              className="text-white hover:underline transition"
            >
              View Project
            </a>
          </div>
  
          {/* Project 4: Chronic Disease Assistance */}
          <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 transform">
            <h3 className="text-2xl font-semibold text-white mb-4">Chronic Disease Assistance</h3>
            <p className="text-white mb-4">
              An application that assists people with chronic diseases by providing personalized health advice based on their symptoms and health data.
            </p>
            <a
              href="https://github.com/your-repo/chronic-disease-assistance"  // Replace with your project link
              className="text-white hover:underline transition"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default Projects;
  