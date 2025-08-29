import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Microscope,
  BookOpen,
  Trophy,
  Bus,
  Wifi,
  Shield,
  Zap,
} from "lucide-react";
import Section from "../components/UI/Section";
import Card from "../components/UI/Card";
import { useContent } from "../context/ContentContext";

const Infrastructure = () => {
  const { content } = useContent();

  const techFeatures = [
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Campus-wide WiFi connectivity",
    },
    {
      icon: Monitor,
      title: "Digital Learning",
      description: "Smart boards in every classroom",
    },
    {
      icon: Shield,
      title: "Security Systems",
      description: "CCTV monitoring and access control",
    },
    {
      icon: Zap,
      title: "Power Backup",
      description: "Uninterrupted power supply",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section className="relative min-h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/home-1.webp)",
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
            World-Class Infrastructure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-light"
          >
            Modern Facilities for Optimal Learning
          </motion.p>
        </div>
      </Section>

      {/* Campus Overview */}
      <Section background="white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Campus
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Spread across 10 acres of lush Vivekananda Vidyalayacampus, our
            infrastructure combines modern technology with nature-friendly
            design to create an ideal learning environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <div className="theme-bg-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 theme-text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Facilities */}
      <Section background="gray">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Facilities
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            State-of-the-art facilities designed for comprehensive education
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {content.infrastructure.facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                    />
                  </div>

                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                      {facility.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                      {facility.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-800">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {facility.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 theme-bg-primary rounded-full"></div>
                            <span className="text-sm md:text-base text-gray-600">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Safety & Security */}
      <Section background="white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Safety & Security
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Your child's safety is our top priority
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: Shield,
              title: "CCTV Surveillance",
              description:
                "24/7 monitoring with high-definition cameras throughout the campus",
            },
            {
              icon: Monitor,
              title: "Access Control",
              description:
                "Biometric entry systems and visitor management protocols",
            },
            {
              icon: Zap,
              title: "Emergency Systems",
              description:
                "Fire safety equipment and emergency evacuation procedures",
            },
            {
              icon: Bus,
              title: "Safe Transportation",
              description:
                "GPS-tracked buses with trained drivers and attendants",
            },
            {
              icon: BookOpen,
              title: "Medical Facility",
              description:
                "On-campus medical room with qualified nursing staff",
            },
            {
              icon: Trophy,
              title: "Trained Security",
              description:
                "Professional security personnel on duty round the clock",
            },
          ].map((safety, index) => (
            <motion.div
              key={safety.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <div className="theme-bg-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <safety.icon className="h-8 w-8 theme-text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                  {safety.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {safety.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Virtual Tour CTA */}
      <Section background="green">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Experience Our Campus
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Schedule a visit to see our world-class facilities in person and
              experience the learning environment that makes us special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="theme-bg-primary theme-bg-primary-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
                Schedule Campus Visit
              </button>
              <button className="bg-white hover:bg-gray-50 theme-text-primary px-8 py-4 rounded-lg text-lg font-semibold border-2 theme-border-primary transition-colors duration-200">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Infrastructure;
