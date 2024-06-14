import React from "react";
import { Link } from "react-router-dom";
import healthArticleImg from "../assets/images/health article.jpg"; // Placeholder image for health article
import personalInsightImg from "../assets/images/personal insight.jpg"; // Placeholder image for personal insight
import blogBg from "../assets/images/blog bg.jpg"; // Background image

const Blog = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat p-8 min-h-screen flex flex-col items-center animate-fadeIn"
      style={{ backgroundImage: `url(${blogBg})` }}
    >
      <div className="bg-blue-100 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-5xl animate-fadeInUp mt-32 mb-14 ">
        <h2 className="text-4xl font-bold mb-8 text-blue-800 text-center animate lg:text-5xl">
          Blog
        </h2>
        <p className="text-xl mb-10 text-gray-700 text-center animate-fadeIn">
          Stay updated with the latest health tips, medical advancements, and
          personal insights from Dr. Peter.
        </p>
        <article className="mb-8 animate-slideInLeft">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <img
              src={healthArticleImg}
              alt="Health Article"
              className="md:w-1/3 rounded-lg object-cover"
            />
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-2">Health Article Title</h3>
              <p className="text-lg mb-2">Published on: 01/01/2024</p>
              <p className="text-lg">
                A brief summary of the health article.{" "}
                <a
                  href="https://askdrpeter.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 block mt-2"
                >
                  Read More
                </a>
              </p>
            </div>
          </div>
        </article>
        <article className="mb-8 animate-slideInRight">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <img
              src={personalInsightImg}
              alt="Personal Insight"
              className="md:w-1/3 rounded-lg object-cover"
            />
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-2">
                Personal Insight Title
              </h3>
              <p className="text-lg mb-2">Published on: 01/01/2024</p>
              <p className="text-lg">
                A brief summary of the personal insight.{" "}
                <a
                  href="https://askdrpeter.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 block mt-2"
                >
                  Read More
                </a>
              </p>
            </div>
          </div>
        </article>
        <div className="text-center mt-8">
          <Link to="/contact">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 animate-bounce">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
