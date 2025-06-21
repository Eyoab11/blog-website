const allBlogs = [
  {
    id: 1,
    title: "The Art of Clean Code",
    excerpt: "Exploring how philosophical principles can guide us to write better, more maintainable code.",
    category: "Philosophy",
    date: "May 15, 2023",
    tags: ["Philosophy", "Technology"],
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    content: `Exploring how philosophical principles can guide us to write better, more maintainable code.\n\nClean code is not just about syntax, but about clarity, simplicity, and purpose. Drawing from ancient philosophy, we can learn to approach programming with mindfulness and intention.\n\nA well-written function is like a well-formed argument: it is logical, concise, and leaves no room for ambiguity. By applying these principles, we elevate our craft and create software that stands the test of time.`
  },
  {
    id: 2,
    title: "React for Musicians: Harmonizing UI",
    excerpt: "How music theory can inspire better component architecture in React.",
    category: "Music",
    date: "June 2, 2023",
    tags: ["Music", "Technology"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    content: `How music theory can inspire better component architecture in React.\n\nJust as harmony in music is achieved by combining different notes, harmony in UI is achieved by combining reusable components.\n\nBy thinking like a composer, you can orchestrate your React components to create a seamless and beautiful user experience.`
  },
  {
    id: 3,
    title: "Laughing at Bugs: Humor in Debugging",
    excerpt: "Why a sense of humor is a developer's secret weapon against tough bugs.",
    category: "Humor",
    date: "July 10, 2023",
    tags: ["Humor", "Technology"],
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    content: `Why a sense of humor is a developer's secret weapon against tough bugs.\n\nDebugging can be frustrating, but laughter lightens the load. A funny error message or a clever comment can turn a tough day into a memorable one.\n\nRemember: every bug is just a feature waiting for a punchline!`
  },
  {
    id: 4,
    title: "Designing with Empathy",
    excerpt: "How understanding users' emotions leads to better product design.",
    category: "Design",
    date: "August 12, 2023",
    tags: ["Design", "Philosophy"],
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    content: `How understanding users' emotions leads to better product design.\n\nEmpathy is the foundation of great design. By putting yourself in the user's shoes, you can create products that truly resonate and solve real problems.\n\nDesign is not just about aesthetics—it's about connection.`
  },
  {
    id: 5,
    title: "JavaScript: The Language of the Web",
    excerpt: "A journey through the quirks and beauty of JavaScript.",
    category: "JavaScript",
    date: "September 5, 2023",
    tags: ["JavaScript", "Technology"],
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    content: `A journey through the quirks and beauty of JavaScript.\n\nFrom callbacks to promises, closures to prototypes, JavaScript is a language that rewards curiosity and creativity.\n\nEmbrace the weirdness, and you'll discover the magic that powers the modern web.`
  },
  {
    id: 6,
    title: "React vs. Vue: A Friendly Duel",
    excerpt: "Comparing two of the most popular frontend frameworks with a touch of humor.",
    category: "React",
    date: "October 1, 2023",
    tags: ["React", "Humor", "Technology"],
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    content: `Comparing two of the most popular frontend frameworks with a touch of humor.\n\nReact and Vue each have their fans, but at the end of the day, both help us build amazing apps.\n\nMay the best framework win—or better yet, may we all learn from each other!`
  },
  {
    id: 7,
    title: "The Zen of Coding",
    excerpt: "How mindfulness can improve your code and your life.",
    category: "Philosophy",
    date: "October 20, 2023",
    tags: ["Philosophy", "Wellness"],
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    content: `How mindfulness can improve your code and your life.\n\nTake a deep breath, clear your mind, and let your code flow. Mindful coding leads to fewer bugs and more joy.\n\nZen and the art of software maintenance!`
  },
  {
    id: 8,
    title: "Music in the Terminal",
    excerpt: "Exploring CLI tools that let you play and compose music right from your terminal.",
    category: "Music",
    date: "November 2, 2023",
    tags: ["Music", "Technology"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    content: `Exploring CLI tools that let you play and compose music right from your terminal.\n\nFrom beeps to full symphonies, the terminal is more musical than you think.\n\nTry it out and make your code sing!`
  },
  {
    id: 9,
    title: "Why Developers Love Memes",
    excerpt: "A humorous look at meme culture in the tech world.",
    category: "Humor",
    date: "November 15, 2023",
    tags: ["Humor", "Community"],
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    content: `A humorous look at meme culture in the tech world.\n\nMemes are the universal language of developers. They help us bond, vent, and laugh at the absurdities of our craft.\n\nKeep calm and meme on!`
  },
  {
    id: 10,
    title: "The Art of Refactoring",
    excerpt: "Refactoring code is like composing music: it takes practice and creativity.",
    category: "Design",
    date: "December 1, 2023",
    tags: ["Design", "Music"],
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    content: `Refactoring code is like composing music: it takes practice and creativity.\n\nA good refactor brings harmony to your codebase and makes future changes a breeze.\n\nDon't fear the refactor—embrace it!`
  },
  {
    id: 11,
    title: "Tech for Good: Coding with Purpose",
    excerpt: "How technology can be used to make a positive impact in the world.",
    category: "Technology",
    date: "December 15, 2023",
    tags: ["Technology", "Wellness"],
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    content: `How technology can be used to make a positive impact in the world.\n\nCode is a powerful tool for change. Use your skills to build a better, kinder, and more inclusive world.\n\nLet's code for good!`
  }
];

export default allBlogs; 