import React, { createContext, useContext, useState } from "react";

const defaultContent = {
  schoolName: "Vivekananda Vidyalaya",
  tagline: "Nurturing Young Minds in Nature's Embrace",
  aboutText:
    "Vivekananda Vidyalaya stands as a beacon of excellence in education, nestled in the heart of nature. We believe in holistic development of our students, combining academic rigor with environmental consciousness and character building. Our campus provides a serene learning environment where students can grow academically, socially, and emotionally.",
  vision:
    "To be a leading educational institution that nurtures environmentally conscious global citizens who excel academically and contribute positively to society.",
  mission:
    "Our mission is to provide quality education that combines academic excellence with environmental awareness, fostering critical thinking, creativity, and moral values in our students while preparing them for future challenges.",
  principalMessage:
    "Welcome to Vivekananda Vidyalaya, where we nurture young minds to bloom like flowers in a garden. Our commitment to excellence in education, combined with our love for nature, creates an environment where students thrive academically, socially, and emotionally. We believe every child is unique and has the potential to achieve greatness.",
  principalName: "Dr. Priya Sharma",
  management: [
    {
      name: "Mr. Rajesh Gupta",
      position: "Chairman",
      qualification: "M.A., B.Ed., 30+ years in Education",
      image: "/images/about-2.jpeg",
    },
    {
      name: "Mrs. Sunita Verma",
      position: "Secretary",
      qualification: "M.Com., MBA, Educational Administration",
      image: "/images/home-2.jpeg",
    },
    {
      name: "Dr. Amit Kumar",
      position: "Treasurer",
      qualification: "Ph.D. in Finance, CA",
      image: "/images/about-2.jpeg",
    },
  ],
  contactInfo: {
    phone: "+91 98765 43210",
    email: "info@Vivekananda Vidyalaya.edu",
    address: "123 Vivekananda VidyalayaRoad, Nature Park, Cityname - 560001",
    website: "www.Vivekananda Vidyalaya.edu",
  },
  academics: {
    cbseAffiliation:
      "Affiliated to Central Board of Secondary Education, New Delhi",
    schoolCode: "12345",
    curriculum: [
      {
        subject: "Mathematics",
        description:
          "Comprehensive mathematical concepts with practical applications and problem-solving skills.",
        icon: "📊",
      },
      {
        subject: "Science",
        description:
          "Integrated approach to Physics, Chemistry, and Biology with hands-on experiments.",
        icon: "🔬",
      },
      {
        subject: "English",
        description:
          "Language and literature studies focusing on communication and critical thinking.",
        icon: "📚",
      },
      {
        subject: "Social Science",
        description:
          "History, Geography, Civics, and Economics with emphasis on current affairs.",
        icon: "🌍",
      },
      {
        subject: "Environmental Studies",
        description:
          "Our signature program connecting students with nature and sustainability.",
        icon: "🌱",
      },
      {
        subject: "Computer Science",
        description:
          "Modern computing skills and programming fundamentals for digital literacy.",
        icon: "💻",
      },
    ],
    syllabus: [
      {
        class: "Classes I-V (Primary)",
        subjects: [
          "English",
          "Hindi",
          "Mathematics",
          "Environmental Studies",
          "Computer Science",
          "Art & Craft",
          "Physical Education",
        ],
        description:
          "Foundation years focusing on basic literacy, numeracy, and environmental awareness.",
      },
      {
        class: "Classes VI-VIII (Middle School)",
        subjects: [
          "English",
          "Hindi",
          "Mathematics",
          "Science",
          "Social Science",
          "Computer Science",
          "Art Education",
          "Physical Education",
        ],
        description:
          "Building strong academic foundations with introduction to specialized subjects.",
      },
      {
        class: "Classes IX-X (Secondary)",
        subjects: [
          "English",
          "Hindi",
          "Mathematics",
          "Science",
          "Social Science",
          "Computer Applications",
          "Physical Education",
        ],
        description:
          "Comprehensive CBSE curriculum preparing students for board examinations.",
      },
      {
        class: "Classes XI-XII (Senior Secondary)",
        subjects: [
          "English Core",
          "Physics",
          "Chemistry",
          "Mathematics/Biology",
          "Computer Science/Economics",
          "Physical Education",
        ],
        description:
          "Specialized streams in Science with optional subjects for career preparation.",
      },
    ],
    teachingMethodology: [
      {
        method: "Interactive Learning",
        description:
          "Smart boards and multimedia presentations for engaging classroom experiences.",
      },
      {
        method: "Experiential Learning",
        description:
          "Hands-on activities and real-world applications of theoretical concepts.",
      },
      {
        method: "Project-Based Learning",
        description:
          "Collaborative projects that develop critical thinking and teamwork skills.",
      },
      {
        method: "Nature-Integrated Learning",
        description:
          "Outdoor classrooms and environmental studies integrated across subjects.",
      },
    ],
    academicCalendar: [
      {
        event: "School Reopening",
        date: "April 1, 2024",
        description: "New academic session begins with orientation programs.",
      },
      {
        event: "First Term Examinations",
        date: "September 15-30, 2024",
        description: "Mid-year assessments for all classes.",
      },
      {
        event: "Annual Sports Day",
        date: "December 15, 2024",
        description: "Inter-house sports competitions and cultural events.",
      },
      {
        event: "Annual Examinations",
        date: "March 1-20, 2025",
        description: "Final examinations and project submissions.",
      },
      {
        event: "Results Declaration",
        date: "March 31, 2025",
        description: "Academic results and promotion to next class.",
      },
    ],
  },
  admissions: {
    process: [
      {
        step: "Application Form",
        description:
          "Submit online application form with required documents and photographs.",
        icon: "📝",
      },
      {
        step: "Document Verification",
        description:
          "Verification of academic records and other supporting documents.",
        icon: "✅",
      },
      {
        step: "Entrance Assessment",
        description:
          "Age-appropriate assessment for applicable grades and interaction session.",
        icon: "📋",
      },
      {
        step: "Parent Interview",
        description:
          "Personal interaction with parents and student to understand expectations.",
        icon: "👥",
      },
      {
        step: "Admission Confirmation",
        description:
          "Fee payment and final admission confirmation with class allocation.",
        icon: "🎓",
      },
    ],
    fees: [
      {
        grade: "Classes I-III",
        tuitionFee: "₹40,000",
        otherFees: "₹8,000",
        total: "₹48,000",
      },
      {
        grade: "Classes IV-V",
        tuitionFee: "₹45,000",
        otherFees: "₹9,000",
        total: "₹54,000",
      },
      {
        grade: "Classes VI-VIII",
        tuitionFee: "₹50,000",
        otherFees: "₹10,000",
        total: "₹60,000",
      },
      {
        grade: "Classes IX-X",
        tuitionFee: "₹55,000",
        otherFees: "₹12,000",
        total: "₹67,000",
      },
      {
        grade: "Classes XI-XII",
        tuitionFee: "₹60,000",
        otherFees: "₹15,000",
        total: "₹75,000",
      },
    ],
    requirements: [
      "Birth certificate (original and photocopy)",
      "Transfer certificate from previous school",
      "Academic records of previous two years",
      "Passport size photographs (6 copies)",
      "Medical certificate and vaccination records",
      "Address proof documents",
      "Caste certificate (if applicable)",
      "Income certificate (for fee concession)",
    ],
  },
  infrastructure: {
    facilities: [
      {
        title: "Smart Classrooms",
        description:
          "Technology-enabled learning spaces with interactive whiteboards, projectors, and multimedia systems for enhanced learning experiences.",
        features: [
          "Interactive whiteboards",
          "Projectors and audio systems",
          "Air conditioning",
          "Natural lighting",
          "Ergonomic furniture",
        ],
        image: "/images/home-1.webp",
      },
      {
        title: "Science Laboratories",
        description:
          "Well-equipped laboratories for Physics, Chemistry, Biology, and Computer Science with modern equipment and safety protocols.",
        features: [
          "Modern equipment",
          "Safety protocols",
          "Individual workstations",
          "Digital microscopes",
          "Chemical storage",
        ],
        image: "/images/infrastructure-1.webp",
      },
      {
        title: "Library & Resource Center",
        description:
          "Extensive collection of books, journals, and digital resources with quiet study areas and research facilities.",
        features: [
          "15,000+ books",
          "Digital library",
          "Reading areas",
          "Research sections",
          "Periodicals",
        ],
        image: "/images/infrastructure-2.jpeg",
      },
      {
        title: "Sports Facilities",
        description:
          "Comprehensive sports complex with indoor and outdoor facilities for various games and physical activities.",
        features: [
          "Swimming pool",
          "Basketball court",
          "Football field",
          "Indoor games room",
          "Athletics track",
        ],
        image: "/images/infrastructure-3.jpeg",
      },
      {
        title: "Transportation",
        description:
          "Safe and reliable bus service covering various routes with GPS tracking and trained drivers.",
        features: [
          "GPS tracking",
          "Trained drivers",
          "Bus attendants",
          "First aid kits",
          "Regular maintenance",
        ],
        image: "/images/infrastructure-4.jpeg",
      },
    ],
  },
  activities: {
    coActivities: [
      {
        title: "Music & Dance",
        description:
          "Classical and contemporary music lessons with dance performances and competitions.",
        image: "/images/activities-1.webp",
      },
      {
        title: "Art & Craft",
        description:
          "Creative workshops in painting, sculpture, and handicrafts to develop artistic skills.",
        image: "/images/activities-2.jpeg",
      },
      {
        title: "Drama & Theatre",
        description:
          "Annual plays and drama competitions to build confidence and communication skills.",
        image: "/images/home-3.jpeg",
      },
      {
        title: "Science Club",
        description:
          "Hands-on experiments and science fair participation to foster scientific thinking.",
        image: "/images/home-5.jpeg",
      },
      {
        title: "Environmental Club",
        description:
          "Tree plantation drives and environmental awareness programs for sustainability.",
        image: "/images/home-bg.jpeg",
      },
      {
        title: "Sports Activities",
        description:
          "Inter-house competitions and district-level participation in various sports.",
        image: "/images/infrastructure-3.jpeg",
      },
    ],
    events: [
      {
        title: "Annual Day Celebration",
        date: "December 20, 2024",
        description:
          "Grand celebration showcasing student talents in music, dance, and drama.",
        image: "/images/activities-1.webp",
      },
      {
        title: "Science Exhibition",
        date: "February 15, 2025",
        description:
          "Student projects and innovations displayed for parents and visitors.",
        image: "/images/home-5.jpeg",
      },
      {
        title: "Sports Day",
        date: "January 26, 2025",
        description:
          "Inter-house sports competitions and athletic events for all age groups.",
        image: "/images/infrastructure-3.jpeg",
      },
      {
        title: "Environment Day",
        date: "June 5, 2024",
        description:
          "Tree plantation and environmental awareness activities throughout the campus.",
        image: "/images/home-bg.jpeg",
      },
    ],
    gallery: [
      {
        title: "Annual Day Performance",
        image: "/images/activities-1.webp",
        category: "Events",
      },
      {
        title: "Science Laboratory",
        image: "/images/infrastructure-1.webp",
        category: "Infrastructure",
      },
      {
        title: "Sports Activities",
        image: "/images/infrastructure-3.jpeg",
        category: "Sports",
      },
      {
        title: "Art Workshop",
        image: "/images/activities-2.jpeg",
        category: "Activities",
      },
      {
        title: "Smart Classroom",
        image: "/images/home-1.webp",
        category: "Infrastructure",
      },
      {
        title: "Library Reading",
        image: "/images/infrastructure-2.jpeg",
        category: "Infrastructure",
      },
      {
        title: "Library Reading",
        image: "/images/infrastructure-2.jpeg",
        category: "Infrastructure",
      },
      {
        title: "Art Workshop",
        image: "/images/activities-2.jpeg",
        category: "Activities",
      },
    ],
  },
  disclosure: {
    basicInfo: {
      establishedYear: "2010",
      affiliationNumber: "1234567",
      schoolCode: "12345",
      societyRegistration: "SOC/2010/12345",
      trustRegistration: "TRUST/2010/67890",
    },
    documents: [
      {
        title: "CBSE Affiliation Certificate",
        type: "PDF",
        link: "#",
      },
      {
        title: "Society Registration Certificate",
        type: "PDF",
        link: "#",
      },
      {
        title: "Trust Registration Certificate",
        type: "PDF",
        link: "#",
      },
      {
        title: "Fire Safety Certificate",
        type: "PDF",
        link: "#",
      },
      {
        title: "Building Safety Certificate",
        type: "PDF",
        link: "#",
      },
      {
        title: "Water & Health Certificate",
        type: "PDF",
        link: "#",
      },
    ],
    academicResults: [
      {
        year: "2023-24",
        class10: "96.5%",
        class12: "94.2%",
      },
      {
        year: "2022-23",
        class10: "95.8%",
        class12: "93.7%",
      },
      {
        year: "2021-22",
        class10: "94.9%",
        class12: "92.8%",
      },
    ],
    staffInfo: {
      totalTeachers: "45",
      qualifiedTeachers: "43",
      studentTeacherRatio: "20:1",
    },
  },
};

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(defaultContent);

  const updateContent = (newContent) => {
    setContent((prev) => ({ ...prev, ...newContent }));
  };

  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};
