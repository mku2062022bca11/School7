import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import Section from "../components/UI/Section";
import Card from "../components/UI/Card";
import { useContent } from "../context/ContentContext";

const Contact = () => {
  const { content } = useContent();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

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
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-light"
          >
            Get in Touch - We're Here to Help
          </motion.p>
        </div>
      </Section>

      {/* Contact Information */}
      <Section background="white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="text-center h-full">
              <div className="theme-bg-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 theme-text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                Phone
              </h3>
              <p className="text-gray-600">{content.contactInfo.phone}</p>
              <p className="text-sm text-gray-500 mt-2">
                Mon - Fri, 8:00 AM - 5:00 PM
              </p>
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
                <Mail className="h-8 w-8 theme-text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                Email
              </h3>
              <p className="text-gray-600 break-all">
                {content.contactInfo.email}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                We'll respond within 24 hours
              </p>
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
                <MapPin className="h-8 w-8 theme-text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                Address
              </h3>
              <p className="text-gray-600">{content.contactInfo.address}</p>
              <p className="text-sm text-gray-500 mt-2">Visit us anytime</p>
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
                <Clock className="h-8 w-8 theme-text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                Office Hours
              </h3>
              <p className="text-gray-600">Mon - Fri: 8:00 AM - 5:00 PM</p>
              <p className="text-gray-600">Sat: 8:00 AM - 1:00 PM</p>
              <p className="text-sm text-gray-500 mt-2">Closed on Sundays</p>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Contact Form & Map */}
      <Section background="green">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 theme-border-primary focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 theme-border-primary focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 theme-border-primary focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 theme-border-primary focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="academic">Academic Information</option>
                    <option value="infrastructure">Infrastructure Query</option>
                    <option value="transport">Transportation</option>
                    <option value="fees">Fee Structure</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 theme-border-primary focus:border-transparent"
                    placeholder="Enter your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full theme-bg-primary theme-bg-primary-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </Card>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Find Us Here
              </h3>
              <div className="relative h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/images/home-bg.jpeg"
                  alt="School Location Map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-green-500 bg-opacity-20 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                    <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-gray-800">
                      Vivekananda Vidyalaya
                    </p>
                    <p className="text-xs text-gray-600">
                      Nature Park, Cityname
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 theme-text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">
                      {content.contactInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 theme-text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">{content.contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 theme-text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600 break-all">
                      {content.contactInfo.email}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Quick answers to common questions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {[
              {
                question: "What are the school timings?",
                answer:
                  "School timings are from 8:00 AM to 2:30 PM for all classes. Extended care is available until 5:00 PM.",
              },
              {
                question: "Is transportation facility available?",
                answer:
                  "Yes, we provide safe and reliable bus transportation covering various routes across the city with GPS tracking.",
              },
              {
                question: "What is the admission process?",
                answer:
                  "The admission process includes application submission, document verification, entrance assessment, parent interview, and final confirmation.",
              },
              {
                question: "Are there any scholarship programs?",
                answer:
                  "Yes, we offer merit-based scholarships and need-based financial assistance for deserving students.",
              },
              {
                question: "What extracurricular activities are offered?",
                answer:
                  "We offer a wide range of activities including sports, music, dance, art, drama, science club, and environmental club.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="flex items-start space-x-4">
                    <div className="theme-bg-primary-light w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageCircle className="h-4 w-4 theme-text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
