import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Award, Users, Building, BookOpen, Calendar, Phone } from 'lucide-react';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import { useContent } from '../context/ContentContext';

const MandatoryDisclosure = () => {
  const { content } = useContent();

  return (
    <div>
      {/* Hero Section */}
      <Section className="relative min-h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/home-1.webp)',
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
            Mandatory Disclosure
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-light"
          >
            Transparency in Education - As per CBSE Guidelines
          </motion.p>
        </div>
      </Section>

      {/* Basic Information */}
      <Section background="white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Basic Information</h2>
          <p className="text-lg md:text-xl text-gray-600">Essential details about our institution</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="text-center h-full">
              <div className="theme-bg-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 theme-text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Established</h3>
              <p className="text-2xl font-bold theme-text-primary">{content.disclosure.basicInfo.establishedYear}</p>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="text-center h-full">
              <div className="theme-bg-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 theme-text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Affiliation No.</h3>
              <p className="text-2xl font-bold theme-text-primary">{content.disclosure.basicInfo.affiliationNumber}</p>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="text-center h-full">
              <div className="theme-bg-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 theme-text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">School Code</h3>
              <p className="text-2xl font-bold theme-text-primary">{content.disclosure.basicInfo.schoolCode}</p>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="text-center h-full">
              <div className="theme-bg-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 theme-text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Society Registration</h3>
              <p className="text-lg font-bold theme-text-primary">{content.disclosure.basicInfo.societyRegistration}</p>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="text-center h-full">
              <div className="theme-bg-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 theme-text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Trust Registration</h3>
              <p className="text-lg font-bold theme-text-primary">{content.disclosure.basicInfo.trustRegistration}</p>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Important Documents */}
      <Section background="green">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Important Documents</h2>
          <p className="text-lg md:text-xl text-gray-600">Official certificates and compliance documents</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content.disclosure.documents.map((document, index) => (
            <motion.div
              key={document.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                    <FileText className="h-6 w-6 theme-text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{document.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">{document.type}</span>
                      <button className="theme-text-primary hover:theme-text-primary-dark transition-colors duration-200">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Academic Results */}
      <Section background="white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Academic Results</h2>
          <p className="text-lg md:text-xl text-gray-600">Board examination results for the past three years</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-800">Academic Year</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-800">Class X Pass %</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-800">Class XII Pass %</th>
                  </tr>
                </thead>
                <tbody>
                  {content.disclosure.academicResults.map((result, index) => (
                    <motion.tr
                      key={result.year}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-4 px-4 font-medium text-gray-800">{result.year}</td>
                      <td className="py-4 px-4 text-center">
                        <span className="theme-bg-primary-light theme-text-primary-dark px-3 py-1 rounded-full font-semibold">
                          {result.class10}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="theme-bg-primary-light theme-text-primary-dark px-3 py-1 rounded-full font-semibold">
                          {result.class12}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </Section>

      {/* Staff & Infrastructure */}
      <Section background="gray">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Staff & Infrastructure</h2>
          <p className="text-lg md:text-xl text-gray-600">Details about our teaching staff and facilities</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="text-center h-full">
              <div className="theme-bg-primary-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 theme-text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold theme-text-primary mb-2">
                {content.disclosure.staffInfo.totalTeachers}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Total Teachers</h3>
              <p className="text-sm md:text-base text-gray-600">Experienced and qualified educators</p>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="text-center h-full">
              <div className="theme-bg-primary-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 theme-text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold theme-text-primary mb-2">
                {content.disclosure.staffInfo.qualifiedTeachers}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Qualified Teachers</h3>
              <p className="text-sm md:text-base text-gray-600">With proper teaching credentials</p>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="text-center h-full">
              <div className="theme-bg-primary-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 theme-text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold theme-text-primary mb-2">
                {content.disclosure.staffInfo.studentTeacherRatio}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Student-Teacher Ratio</h3>
              <p className="text-sm md:text-base text-gray-600">Ensuring personalized attention</p>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Contact for Queries */}
      <Section background="white">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">For Any Queries</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              If you need any additional information or have questions about our mandatory disclosure, please feel free to contact us.
            </p>
            
            <Card className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="theme-bg-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 theme-text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                  <p className="text-gray-600">{content.contactInfo.phone}</p>
                </div>
                
                <div className="text-center">
                  <div className="theme-bg-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 theme-text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600">{content.contactInfo.email}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default MandatoryDisclosure;