// ✅ All imports remain unchanged
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Calendar, GraduationCap, Target, Lightbulb, Globe } from 'lucide-react';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import { useContent } from '../context/ContentContext';

const Academics = () => {
  const { content } = useContent();

  return (
    <div>
      {/* Hero Section */}
      <Section className="relative min-h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/home-3.jpeg)',          }}
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
            Academic Excellence
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-light"
          >
            CBSE Curriculum with Modern Teaching Methods
          </motion.p>
        </div>
      </Section>

      {/* CBSE Affiliation */}
      <Section background="white">
        <div className="text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold theme-text-heading mb-6">CBSE Affiliation</h2>
            <Card className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="text-center">
                  <div className="theme-bg-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 theme-text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold theme-text-heading mb-2">Affiliation Status</h3>
                  <p className="theme-text-subtle">{content.academics.cbseAffiliation}</p>
                </div>
                <div className="text-center">
                  <div className="theme-bg-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 theme-text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold theme-text-heading mb-2">School Code</h3>
                  <p className="text-xl font-bold theme-text-primary">{content.academics.schoolCode}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Curriculum Overview */}
      <Section background="green">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold theme-text-heading mb-4">Our Curriculum</h2>
          <p className="text-lg md:text-xl theme-text-subtle">Comprehensive subjects designed for holistic development</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content.academics.curriculum.map((subject, index) => (
            <motion.div
              key={subject.subject}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <div className="text-4xl mb-4">{subject.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold theme-text-heading mb-3">{subject.subject}</h3>
                <p className="text-sm md:text-base theme-text-subtle">{subject.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Class-wise Syllabus */}
      <Section background="white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold theme-text-heading mb-4">Class-wise Syllabus</h2>
          <p className="text-lg md:text-xl theme-text-subtle">Structured learning path from foundation to specialization</p>
        </div>
        
        <div className="space-y-6 md:space-y-8">
          {content.academics.syllabus.map((classInfo, index) => (
            <motion.div
              key={classInfo.class}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                  <div className="lg:col-span-1">
                    <h3 className="text-xl md:text-2xl font-bold theme-text-primary mb-2">{classInfo.class}</h3>
                    <p className="text-sm md:text-base theme-text-subtle">{classInfo.description}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold theme-text-heading mb-3">Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {classInfo.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="theme-bg-primary-light theme-text-primary px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Teaching Methodology */}
      <Section background="gray">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold theme-text-heading mb-4">Teaching Methodology</h2>
          <p className="text-lg md:text-xl theme-text-subtle">Modern approaches to enhance learning experiences</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {content.academics.teachingMethodology.map((method, index) => (
            <motion.div
              key={method.method}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="flex items-start space-x-4">
                  <div className="theme-bg-primary-light w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 theme-text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold theme-text-heading mb-3">{method.method}</h3>
                    <p className="text-sm md:text-base theme-text-subtle">{method.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Academic Calendar */}
      <Section background="white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold theme-text-heading mb-4">Academic Calendar</h2>
          <p className="text-lg md:text-xl theme-text-subtle">Important dates and events for the academic year</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            {content.academics.academicCalendar.map((event, index) => (
              <motion.div
                key={event.event}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center space-x-4 mb-3 md:mb-0">
                      <div className="theme-bg-primary-light w-12 h-12 rounded-full flex items-center justify-center">
                        <Calendar className="h-6 w-6 theme-text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold theme-text-heading">{event.event}</h3>
                        <p className="text-sm md:text-base theme-text-subtle">{event.description}</p>
                      </div>
                    </div>
                    <div className="theme-bg-muted px-4 py-2 rounded-lg">
                      <p className="theme-text-primary font-semibold">{event.date}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Academic Achievements */}
      <Section background="green">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold theme-text-heading mb-4">Academic Achievements</h2>
          <p className="text-lg md:text-xl theme-text-subtle">Excellence in education and student performance</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[ 
            { icon: Target, title: 'Board Results', value: '95%', description: 'Average pass percentage' },
            { icon: Users, title: 'Student Satisfaction', value: '98%', description: 'Happy students and parents' },
            { icon: Globe, title: 'Global Recognition', value: '5+', description: 'International awards' }
          ].map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <achievement.icon className="h-8 w-8 theme-text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold theme-text-primary mb-2">{achievement.value}</div>
                <h3 className="text-lg md:text-xl font-semibold theme-text-heading mb-2">{achievement.title}</h3>
                <p className="text-sm md:text-base theme-text-subtle">{achievement.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Academics;
