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
    title: "Gote-Marketplace",
    description:
      "An e-commerce platform showcasing products with a seamless shopping experience, secure payment integration, and opportunities for sellers to easily sign up and grow their business.",
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
    title: "LeaveWise-App",
    description:
      "A lightweight leave management tool designed for growing teams: quick setup, clear approval flows, notification and simple reporting so  managers spend less time on admin and more on building",
    image: "/leaveimg2.png",
    tech: ["Pure Javascript", "Tailwind",'Express'],
    liveUrl: "https://leave-mangment-system.vercel.app//",
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
    title: "NOVABOARD",
    description:
      "NOVABOARD is a concept dashboard showcasing real-time analytics, data integration, and secure cloud storage,  designed to demonstrate clean UI and powerful data visualization.",
    image: "/novaimg2.png",
    tech: ["Next.js", "Tailwind.css", "Chart.js"],
    liveUrl: "https://novaboard-nine.vercel.app/",
    githubUrl: "https://github.com/belbelbelbel/novaboard",
    screens: [
      {
        url: "/novaimg1.png",
        caption: "Dashboard Overview",
      },
      {
        url: "/novaimg2.png",
        caption: "Transactions",
      },
      {
        url: "/novaimg3.png",
        caption: "Budget Categories",
      },
      {
        url: "/novaimg4.png",
        caption: "Reports & Analytics",
      },
    ],
  },
    {
    type: "web",
    title: "NOVABOARD",
    description:
      "NOVABOARD is a concept dashboard showcasing real-time analytics, data integration, and secure cloud storage,  designed to demonstrate clean UI and powerful data visualization.",
    image: "/novaimg2.png",
    tech: ["Next.js", "Tailwind.css", "Chart.js"],
    liveUrl: "https://novaboard-nine.vercel.app/",
    githubUrl: "https://github.com/belbelbelbel/novaboard",
    screens: [
      {
        url: "/novaimg1.png",
        caption: "Dashboard Overview",
      },
      {
        url: "/novaimg2.png",
        caption: "Transactions",
      },
      {
        url: "/novaimg3.png",
        caption: "Budget Categories",
      },
      {
        url: "/novaimg4.png",
        caption: "Reports & Analytics",
      },
    ],
  },
]

export const mobileApps: MobileApp[] = [
 
  {
    type: "mobile",
    title: "SHOPNEST",
    description:
      "A modern mobile e-commerce app that delivers a seamless shopping experience with secure payments, and seller–buyer interactions.",
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
    title: "WALLETWISE",
    description:
      "A smart expense tracker and collaborative savings app that empowers users to manage spending, set financial goals, and save together combining simplicity, and automation",
    image: "/social-media-mobile-app.jpg",
    tech: ["React Native", "Firebase", "Expo"],
    githubUrl: "https://github.com/ronaldbelonwu/expense-tracker",
    demoVideo: {
      type: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  },
  {
    type: "mobile",
    title: "NEWSBEAT",
    description:
      "A sleek and engaging news app that brings real-time updates, trending headlines, and personalized feeds keeping users informed with speed and clarity",
    image: "/newsimg.png",
    tech: ["React Native", "Node.js", "Stripe"],
    githubUrl: "https://github.com/ronaldbelonwu/quickwash",
    demoVideo: {
      type: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  },
  
]
