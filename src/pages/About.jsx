import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Eye, Award } from "lucide-react";
import Section from "../components/UI/Section";
import Card from "../components/UI/Card";
import { useContent } from "../context/ContentContext";

const About = () => {
  const { content } = useContent();

  return (
    <div>
      {/* Hero Section */}
      <Section className="relative min-h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/about-1.webp)",
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
            About {content.schoolName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-light"
          >
            Nurturing Excellence Since 2010
          </motion.p>
        </div>
      </Section>

      {/* About School Section */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Our School
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              {content.aboutText}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold theme-text-primary">
                  15+
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  Years of Excellence
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold theme-text-primary">
                  500+
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  Happy Students
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold theme-text-primary">
                  50+
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  Qualified Teachers
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold theme-text-primary">
                  95%
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  Board Pass Rate
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/images/about-1.webp"
              alt="School campus"
              className="rounded-xl shadow-lg w-full h-64 md:h-96 object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section background="green">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Guiding principles that shape our educational approach
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <div className="theme-bg-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 theme-text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                {content.vision}
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <div className="theme-bg-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 theme-text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                {content.mission}
              </p>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Principal's Message */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <img
              src="/images/home-2.jpeg"
              alt="Principal"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Principal's Message
            </h2>
            <Card className="text-left">
              <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6">
                "{content.principalMessage}"
              </blockquote>
              <div className="text-center">
                <p className="text-lg md:text-xl text-gray-800 font-semibold">
                  - {content.principalName}
                </p>
                <p className="text-base md:text-lg theme-text-primary">
                  Principal
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Management Team */}
      <Section background="gray">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Management Team
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Experienced leaders dedicated to educational excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content.management.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-4 object-cover shadow-md"
                />
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="theme-text-primary font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  {member.qualification}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section background="white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Achievements
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Recognition and awards that reflect our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              icon: Award,
              title: "Best CBSE School",
              year: "2023",
              description: "Regional Excellence Award",
            },
            {
              icon: Users,
              title: "Outstanding Faculty",
              year: "2023",
              description: "Teacher Training Excellence",
            },
            {
              icon: Target,
              title: "100% Results",
              year: "2022",
              description: "Class X Board Exams",
            },
            {
              icon: Eye,
              title: "Vivekananda VidyalayaSchool",
              year: "2022",
              description: "Environmental Initiative Award",
            },
          ].map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <div className="theme-bg-primary-light w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-6 w-6 md:h-8 md:w-8 theme-text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="theme-text-primary font-medium mb-2">
                  {achievement.year}
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  {achievement.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
