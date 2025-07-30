import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award, Leaf, GraduationCap, Building } from 'lucide-react';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import { useContent } from '../context/ContentContext';

const Home = () => {
  const { content } = useContent();

  const features = [
    {
      icon: BookOpen,
      title: 'CBSE Excellence',
      description: 'Comprehensive curriculum following CBSE guidelines with modern teaching methodologies.'
    },
    {
      icon: Leaf,
      title: 'Nature Integration',
      description: 'Learning experiences connected with nature, fostering environmental consciousness.'
    },
    {
      icon: Users,
      title: 'Holistic Development',
      description: 'Focus on academic, physical, and emotional development of every student.'
    },
    {
      icon: Award,
      title: 'Excellence Awards',
      description: 'Recognized for outstanding academic achievements and innovative teaching practices.'
    }
  ];

    const quickLinks = [
    {
      title: "Academics",
      description:
        "Comprehensive CBSE curriculum with innovative teaching methods",
      image:
        "/images/home-3.jpeg",
      link: "/academics",
      icon: GraduationCap,
    },
    {
      title: "Infrastructure",
      description:
        "Modern facilities designed for optimal learning experiences",
      image:
        "/images/home-4.jpeg",
      link: "/infrastructure",
      icon: Building,
    },
    {
      title: "Admissions",
      description: "Join our community of learners and grow with us",
      image:
        "/images/home-5.jpeg",
      link: "/admissions",
      icon: Users,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(/images/home-bg.jpeg)",          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            {content.schoolName}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 font-light"
          >
            {content.tagline}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/admissions"
              className="theme-bg-primary theme-bg-primary-hover text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm border border-white border-opacity-30"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Features Section */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose {content.schoolName.split(' ')[0]} {content.schoolName.split(' ')[1]}?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a unique educational experience that combines academic excellence with environmental consciousness and holistic development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
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
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* About Preview Section */}
      <Section background="green">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Our School</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {content.aboutText}
            </p>
            <Link
              to="/about"
              className="theme-bg-primary theme-bg-primary-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              Read More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/images/home-1.webp"
              alt="Students in classroom"
              className="rounded-xl shadow-lg w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* Principal's Message */}
      <Section background="white">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/home-2.jpeg"
              alt="Principal"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Principal's Message</h2>
            <blockquote className="text-xl text-gray-700 italic leading-relaxed">
              "{content.principalMessage}"
            </blockquote>
            <p className="text-lg text-gray-600 mt-4 font-semibold">- {content.principalName}, Principal</p>
          </motion.div>
        </div>
      </Section>

      {/* Quick Links */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our School</h2>
          <p className="text-xl text-gray-600">Discover what makes {content.schoolName} special</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickLinks.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={item.link} className="block group">
                <Card className="overflow-hidden p-0 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-green-500 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-full">
                      <item.icon className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="green">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-600">Numbers that speak for our excellence</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '15+', label: 'Years of Excellence' },
            { number: '500+', label: 'Happy Students' },
            { number: '50+', label: 'Qualified Teachers' },
            { number: '95%', label: 'Board Pass Rate' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl md:text-3xl font-bold theme-text-primary">{stat.number}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{stat.label}</h3>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;