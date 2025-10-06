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
    title: "ConnectVision",
    description:
      "A modern video conferencing platform built with Next.js and Tailwind CSS, featuring real-time communication and screen sharing.",
    image: "/video-conferencing-app-interface.jpg",
    tech: ["Next.js", "Tailwind", "WebRTC"],
    liveUrl: "https://connectvision.example.com",
    githubUrl: "https://github.com/ronaldbelonwu/connectvision",
    screens: [
      {
        url: "/video-conferencing-dashboard.jpg",
        caption: "Dashboard View",
      },
      {
        url: "/video-call-interface.png",
        caption: "Video Call Interface",
      },
      {
        url: "/screen-sharing-view.jpg",
        caption: "Screen Sharing",
      },
      {
        url: "/settings-panel.png",
        caption: "Settings Panel",
      },
    ],
  },
  {
    type: "web",
    title: "NaijaShine",
    description:
      "A vibrant e-commerce platform showcasing Nigerian products with seamless shopping experience and payment integration.",
    image: "/ecommerce-website-interface.png",
    tech: ["React", "Firebase", "Stripe"],
    liveUrl: "https://naijashine.example.com",
    githubUrl: "https://github.com/ronaldbelonwu/naijashine",
    screens: [
      {
        url: "/ecommerce-homepage.png",
        caption: "Homepage",
      },
      {
        url: "/product-catalog-grid.jpg",
        caption: "Product Catalog",
      },
      {
        url: "/shopping-cart-checkout.jpg",
        caption: "Shopping Cart",
      },
      {
        url: "/order-confirmation-page.png",
        caption: "Order Confirmation",
      },
    ],
  },
  {
    type: "web",
    title: "Monobudget Clone",
    description:
      "An expense tracking application with intuitive UI for managing personal finances and visualizing spending patterns.",
    image: "/expense-tracker-dashboard.jpg",
    tech: ["React", "Node.js", "Chart.js"],
    liveUrl: "https://monobudget.example.com",
    githubUrl: "https://github.com/ronaldbelonwu/monobudget",
    screens: [
      {
        url: "/expense-tracker-dashboard-with-charts.jpg",
        caption: "Dashboard Overview",
      },
      {
        url: "/transaction-list-view.jpg",
        caption: "Transactions",
      },
      {
        url: "/budget-categories-view.jpg",
        caption: "Budget Categories",
      },
      {
        url: "/financial-reports-analytics.jpg",
        caption: "Reports & Analytics",
      },
    ],
  },
]

export const mobileApps: MobileApp[] = [
  {
    type: "mobile",
    title: "Collaborative Expense Tracker",
    description:
      "A React Native app for tracking shared expenses with friends and family, featuring real-time sync and split calculations.",
    image: "/expense-tracker-mobile-app.jpg",
    tech: ["React Native", "Firebase", "Expo"],
    githubUrl: "https://github.com/ronaldbelonwu/expense-tracker",
    demoVideo: {
      type: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  },
  {
    type: "mobile",
    title: "Lazio",
    description:
      "A social networking app with Firebase authentication and real-time messaging, built with Expo for cross-platform deployment.",
    image: "/social-media-mobile-app.jpg",
    tech: ["React Native", "Firebase Auth", "Expo"],
    githubUrl: "https://github.com/ronaldbelonwu/lazio",
    demoVideo: {
      type: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  },
  {
    type: "mobile",
    title: "QuickWash",
    description:
      "A service booking application for laundry services with scheduling, payment integration, and order tracking.",
    image: "/service-booking-mobile-app.jpg",
    tech: ["React Native", "Node.js", "Stripe"],
    githubUrl: "https://github.com/ronaldbelonwu/quickwash",
    demoVideo: {
      type: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  },
]
