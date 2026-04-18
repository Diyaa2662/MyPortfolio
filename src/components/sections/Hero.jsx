import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "../../data/personalInfo";

const Hero = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: personalInfo.github,
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: <FaFacebook />,
      url: personalInfo.facebook,
      label: "Facebook",
      color: "hover:text-[#1877f2]",
    },
    {
      icon: <FaInstagram />,
      url: personalInfo.instagram,
      label: "Instagram",
      color: "hover:text-[#e4405f]",
    },
    {
      icon: <FaWhatsapp />,
      url: personalInfo.whatsapp,
      label: "WhatsApp",
      color: "hover:text-[#25D366]",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#16213e]"
    >
      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00f2fe]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4facfe]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Simple Grid Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <span className="text-[#00f2fe] font-mono text-sm tracking-wider border border-[#00f2fe]/30 px-4 py-2 rounded-full bg-[#00f2fe]/10">
              ✨ WELCOME TO MY PORTFOLIO ✨
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
              Diyaa Altaweel
            </span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4"
          >
            Frontend Developer & UI/UX Specialist
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 px-4"
          >
            Software Engineer crafting beautiful, responsive web and mobile
            experiences. I blend technical expertise with design thinking to
            create products that users love.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a
              href="#projects"
              className="px-6 md:px-8 py-3 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-[#00f2fe]/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 md:px-8 py-3 border-2 border-[#00f2fe] rounded-lg text-[#00f2fe] font-semibold hover:bg-[#00f2fe]/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links - Full Set */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 justify-center mt-12 flex-wrap"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`text-gray-400 ${social.color} transition-all duration-300 text-2xl md:text-3xl`}
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#00f2fe] rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
