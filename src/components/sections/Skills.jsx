import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../../data/personalInfo";
import { FaCode, FaTools, FaMobileAlt, FaPalette } from "react-icons/fa";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Mobile Development",
      icon: <FaMobileAlt />,
      skills: ["React Native", "Expo", "Mobile UI/UX"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "UI/UX Design",
      icon: <FaPalette />,
      skills: ["Figma", "Wireframing", "Prototyping", "User Research"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Tools & Technologies",
      icon: <FaTools />,
      skills: skills.tools,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="skills" className="section bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Technical Skills Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Technical Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.technical.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: inView ? `${skill.level}%` : "0%",
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                    }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Programming Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.languages.map((lang, index) => (
              <motion.span
                key={lang}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Specializations
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <div
                  className={`text-4xl mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
