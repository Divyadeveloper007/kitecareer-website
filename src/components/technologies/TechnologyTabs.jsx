import { useState, useEffect, useRef } from "react"

const categories = [
  "UI/UX",
  "Front-end",
  "Back-end",
  "Database",
  "Mobile",
  "Emerging",
]

const techItems = [
  { name: "Figma", category: "UI/UX", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "Photoshop", category: "UI/UX", icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
  { name: "Illustrator", category: "UI/UX", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" },
 { name: "Canva", category: "UI/UX", icon: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" },

  { name: "React", category: "Front-end", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Vue.js", category: "Front-end", icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
  { name: "Angular", category: "Front-end", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" },
  { name: "HTML5", category: "Front-end", icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" },
  { name: "CSS3", category: "Front-end", icon: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },

  { name: "Node.js", category: "Back-end", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "Express", category: "Back-end", icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },

  { name: "MongoDB", category: "Database", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "MySQL", category: "Database", icon: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
  { name: "PostgreSQL", category: "Database", icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },

  { name: "Flutter", category: "Mobile", icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" },
  { name: "React Native", category: "Mobile", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Swift", category: "Mobile", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg" },

  { name: "TensorFlow", category: "Emerging", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
  { name: "ChatGPT", category: "Emerging", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  { name: "Docker", category: "Emerging", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
]

const TechnologyTabs = () => {
  const [activeCategory, setActiveCategory] = useState("UI/UX")
  const scrollRef = useRef()

  // Scroll to active tab in mobile view
  useEffect(() => {
    const activeButton = scrollRef.current?.querySelector(".active-tab")
    if (activeButton && scrollRef.current) {
      scrollRef.current.scrollTo({
        left: activeButton.offsetLeft - 16,
        behavior: "smooth",
      })
    }
  }, [activeCategory])

  const filteredItems = techItems.filter(
    (item) => item.category === activeCategory
  )

  return (
    <section id="technologies" className="w-full py-10 leading-loose px-4 md:px-10 text-center">
      <h4 className="text-[#00a4f0] font-bold text-lg tracking-wide mb-2">
        Technologies We Use
      </h4>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 py-4 leading-snug text-gray-800">
        Powering Innovation Through Modern Tools <br />
        and Proven Tech Stacks
      </h1>

      {/* Category Tabs - Scrollable on mobile */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto no-scrollbar bg-[#0077b5] rounded-full px-4 py-2 w-full md:w-fit mx-auto mb-6 shadow-md"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === category
                ? "bg-white text-[#0077b5] scale-105 shadow active-tab"
                : "text-white hover:bg-white hover:text-[#0077b5]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Dropdown alternative (optional) */}
      {/*
      <div className="block md:hidden mb-6">
        <select
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
          className="w-full p-2 border rounded-md text-center"
        >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>
      */}

      <p className="text-sm text-gray-600 mb-10 max-w-xl mx-auto">
        Explore the trusted technologies and platforms we leverage to build
        scalable, secure, and future-ready solutions.
      </p>

      {/* Tech Items Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center items-center px-4">
        {filteredItems.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center justify-center gap-2 p-4 bg-white border rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-16 h-16 object-contain mx-auto"
            />
            <p className="text-sm font-medium text-gray-800">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologyTabs
