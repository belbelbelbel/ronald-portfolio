export interface WebProject {
  type: "web"
  title: string
  description: string
  image: string
  tech: string[]
  liveUrl: string
  githubUrl: string
  screens: {
    url: string
    caption: string
  }[]
}

export interface MobileApp {
  type: "mobile"
  title: string
  description: string
  image: string
  tech: string[]
  githubUrl: string
  demoVideo: {
    type: "youtube" | "mp4"
    url: string
  }
}

export const webProjects: WebProject[] = [
  {
    type: "web",
    title: "GOTE-MARKETPLACE",
    description:
      "A modern e-commerce/marketplace platform with product listings, responsive layouts, and a clean shopping experience.",
    image: "/goteimg3.png",
    tech: ["Next.js", "Firebase", "Tailwind"],
    liveUrl: "https://gote-marketplace.vercel.app/",
    githubUrl: "https://github.com/belbelbelbel/gote-marketplace",
    screens: [
      {
        url: "/goteimg1.png",
        caption: "Homepage",
      },
      {
        url: "/goteimg5.png",
        caption: "Product Catalog",
      },
      {
        url: "/goteimg2.png",
        caption: "Shopping Cart",
      },
      {
        url: "/goteimg6.png",
        caption: "Order Confirmation",
      },
    ],
  },
  {
    type: "web",
    title: "LEAVEWISE-APP",
    description:
      "Role-based workflow system allowing staff to request leave and admins to approve or decline",
    image: "/leaveimg2.png",
    tech: ["Pure Javascript", "Tailwind",'Express'],
    liveUrl: "https://leave-mangment-system.vercel.app/",
    githubUrl: "https://github.com/belbelbelbel/leave-mangment-system",
    screens: [
      {
        url: "/leaveimg1.png",
        caption: "Landing Page",
      },
      {
        url: "/leaveimg2.png",
        caption: "Admin Panel",
      },
      {
        url: "/leaveimg3.png",
        caption: "Employee Dashboard",
      },
      {
        url: "/leaveimg4.png",
        caption: "Quick leave form",
      },
    ],
  },
      {
      type: "web",
      title: "FLAVORIT",
      description: "A food discovery and meal planning platform for exploring recipes and organizing weekly meals.",
    image: "/flavoimg.png",
      tech: ["Next.js", "Tailwind.css", "Chart.js"],
      liveUrl: "https://food-recipe-app-nine-inky.vercel.app/",
      githubUrl: "https://github.com/belbelbelbel/novaboard",
      screens: [
        {
          url: "/flavoimg.png",
          caption: "Home Page Overview",
        },
        {
          url: "/flavoimg2.png",
          caption: "Recipe description page",
        },
        {
          url: "/flavoimg4.png",
          caption: "Meal Plan Page",
        },
        {
          url: "/flavoimg5.png",
          caption: "Recipe detail page",
        },
      ],
    },


]
  // {
  //   type: "web",
  //   title: "NOVABOARD",
  //   description:
  //     "NOVABOARD is a concept dashboard showcasing real-time analytics, data integration, and secure cloud storage,  designed to demonstrate clean UI and powerful data visualization.",
  //   image: "/novaimg2.png",
  //   tech: ["Next.js", "Tailwind.css", "Chart.js"],
  //   liveUrl: "https://novaboard-nine.vercel.app/",
  //   githubUrl: "https://github.com/belbelbelbel/novaboard",
  //   screens: [
  //     {
  //       url: "/novaimg1.png",
  //       caption: "Dashboard Overview",
  //     },
  //     {
  //       url: "/novaimg2.png",
  //       caption: "Transactions",
  //     },
  //     {
  //       url: "/novaimg3.png",
  //       caption: "Budget Categories",
  //     },
  //     {
  //       url: "/novaimg4.png",
  //       caption: "Reports & Analytics",
  //     },
  //   ],
  // },

export const mobileApps: MobileApp[] = [
 
  {
    type: "mobile",
    title: "SHOPNEST",
    description:
      "A full shopping flow built in React Native with clean mobile UI and cart management.",
    // image: "/social-media-mobile-app.jpg",
    image: "/shopimg.png",
    tech: ["React Native", "Firebase Auth", "Expo"],
    githubUrl: "https://github.com/ronaldbelonwu/lazio",
    demoVideo: {
      type: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  },
  {
    type: "mobile",
    title: "NEWSBEAT",
    description:
      "A lightweight app that fetches real-time news from an external API with category filtering and search.",
    image: "/newsimg.png",
    tech: ["React Native", "Node.js", "Stripe"],
    githubUrl: "https://github.com/ronaldbelonwu/quickwash",
    demoVideo: {
      type: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  },
    {
    type: "mobile",
    title: "WALLETWISE",
    description:
      "A financial tracking tool that helps users understand where their money goes using analytics and clean UI.",
    image: "/social-media-mobile-app.jpg",
    tech: ["React Native", "Firebase", "Expo"],
    githubUrl: "https://github.com/ronaldbelonwu/expense-tracker",
    demoVideo: {
      type: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  },
  
]
