import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Camera,
  Music,
  Palette,
  Trophy,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Section from "../components/UI/Section";
import Card from "../components/UI/Card";
import { useContent } from "../context/ContentContext";

const Activities = () => {
  const { content } = useContent();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    "All",
    "Events",
    "Infrastructure",
    "Sports",
    "Activities",
  ];

  const filteredGallery =
    selectedCategory === "All"
      ? content.activities.gallery
      : content.activities.gallery.filter(
          (item) => item.category === selectedCategory
        );

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredGallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredGallery.length - 1 : prev - 1
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <Section className="relative min-h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/activities-1.webp)",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Activities & Events
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-light"
          >
            Beyond Academics - Nurturing Talents & Creativity
          </motion.p>
        </div>
      </Section>

      {/* Co-curricular Activities */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Co-curricular Activities
          </h2>
          <p className="text-lg text-gray-600">
            Diverse programs to develop skills beyond the classroom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.activities.coActivities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group">
                <div className="relative">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Upcoming Events */}
      <Section background="green">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Mark your calendar for these exciting events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {content.activities.events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-1">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-32 sm:h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="h-5 w-5 theme-text-primary" />
                      <span className="theme-text-primary font-semibold">
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      {event.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Event Calendar */}
      <Section background="white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Event Calendar
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Annual events and celebrations throughout the year
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                month: "April",
                events: ["New Session Begins", "Orientation Program"],
              },
              { month: "June", events: ["Environment Day", "Summer Camp"] },
              {
                month: "August",
                events: ["Independence Day", "Teacher's Day"],
              },
              {
                month: "October",
                events: ["Diwali Celebration", "Sports Day"],
              },
              {
                month: "December",
                events: ["Annual Day", "Christmas Celebration"],
              },
              {
                month: "January",
                events: ["Republic Day", "Science Exhibition"],
              },
              {
                month: "February",
                events: ["Cultural Fest", "Parent-Teacher Meet"],
              },
              { month: "March", events: ["Holi Celebration", "Annual Exams"] },
            ].map((monthData, index) => (
              <motion.div
                key={monthData.month}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <h3 className="text-lg font-semibold theme-text-primary mb-3 text-center">
                    {monthData.month}
                  </h3>
                  <ul className="space-y-2">
                    {monthData.events.map((event) => (
                      <li
                        key={event}
                        className="text-sm text-gray-600 flex items-center"
                      >
                        <div className="w-2 h-2 theme-bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {event}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Image Gallery */}
      <Section background="gray">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Capturing moments of joy, learning, and achievement
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentImageIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? "theme-bg-primary text-white"
                  : "bg-white text-gray-700 hover:theme-bg-primary-light"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-0 overflow-hidden">
            <div className="relative">
              <img
                src={filteredGallery[currentImageIndex]?.image}
                alt={filteredGallery[currentImageIndex]?.title}
                className="w-full h-64 md:h-96 object-cover"
              />

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-lg font-semibold">
                  {filteredGallery[currentImageIndex]?.title}
                </h3>
                <p className="text-sm opacity-90">
                  {filteredGallery[currentImageIndex]?.category}
                </p>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="p-4">
              <div className="flex space-x-2 overflow-x-auto">
                {filteredGallery.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      index === currentImageIndex
                        ? "border-green-500"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {filteredGallery.slice(0, 8).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cursor-pointer"
              onClick={() => setCurrentImageIndex(index)}
            >
              <div className="relative overflow-hidden rounded-lg group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 md:h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Camera className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Activities;
