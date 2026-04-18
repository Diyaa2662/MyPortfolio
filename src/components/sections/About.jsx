import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo, education, experience } from "../../data/personalInfo";
import {
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGithub,
} from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section bg-dark-100">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">
              Who Am I?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {personalInfo.shortBio}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300 flex-wrap">
                <FaMapMarkerAlt className="text-primary flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 flex-wrap">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary transition break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300 flex-wrap">
                <FaPhone className="text-primary flex-shrink-0" />
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-primary transition"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300 flex-wrap">
                <FaGithub className="text-primary flex-shrink-0" />
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition break-all"
                >
                  {personalInfo.github}
                </a>
              </div>
            </div>

            <a
              href={personalInfo.cvLink}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold hover:shadow-lg transition-all"
            >
              Download CV
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </motion.div>

          {/* Right Side - Education & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Education */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <FaGraduationCap className="text-2xl md:text-3xl text-primary" />
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Education
                </h3>
              </div>
              <p className="text-white font-medium">{education.degree}</p>
              <p className="text-gray-400">{education.institution}</p>
              <p className="text-primary text-sm mt-2">
                Class of {education.year}
              </p>
            </div>

            {/* Current Experience */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <FaBriefcase className="text-2xl md:text-3xl text-primary" />
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Current Position
                </h3>
              </div>
              <p className="text-white font-medium">
                {experience.current.position}
              </p>
              <p className="text-gray-400">{experience.current.company}</p>
              <p className="text-primary text-sm mt-2">
                {experience.current.period}
              </p>
              <ul className="mt-4 space-y-2">
                {experience.current.achievements.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-300 text-sm flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Freelance */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
              <p className="text-white font-semibold">
                ✨ {experience.freelance.years}+ Years of Freelance Experience
              </p>
              <p className="text-gray-300 text-sm mt-2">
                {experience.freelance.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
