import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '@models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: '1',
      title: 'HealthPulse',
      shortDescription: 'A full-stack health content and e-commerce platform with blogs, products, accounts, comments, sharing, and checkout.',
      description: 'HealthPulse is a Next.js health and wellness platform that combines dynamic health articles, a product shop, authenticated user accounts, comment engagement, trackable sharing, cart management, and protected checkout into one responsive customer experience.',
      image: '/assets/projects/healthpulse.png?v=2',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
      livePreview: 'https://men-health-mu.vercel.app',
      gitHub: 'https://github.com/Gabrielduah055/menHealthClient',
      challenges: 'The project had to bring together content publishing, user authentication, product shopping, checkout protection, comments, email verification, admin reply notifications, and share tracking without making the interface feel heavy or fragmented.',
      solution: 'I structured the frontend around the Next.js App Router, reusable service modules, shared auth and cart contexts, protected middleware, responsive Tailwind layouts, and focused components for comments, sharing, product galleries, newsletter capture, and add-to-cart flows.',
      features: [
        'Dynamic Blog Platform',
        'E-Commerce Shop',
        'Authenticated Checkout'
      ],
      techStack: {
        frontend: ['Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        backend: ['RESTful APIs', 'JWT Authentication'],
        database: 'MongoDB',
        other: ['Brevo OTP Email', 'Vercel ISR', 'Share Tracking']
      },
      targetUsers: ['Health Readers', 'Online Shoppers', 'Registered Customers'],
      stats: {
        performance: 'SEO Ready',
        dataLatency: 'ISR Enabled',
        liveStatus: 'Operational'
      },
      detailSections: [
        {
          title: 'Blog & Content',
          items: [
            'Dynamic blog listing with a featured post hero, category filtering, and paginated article grid.',
            'Full article pages with rich HTML rendering, table of contents, read-time estimate, and related articles.',
            'Category chips for filtering posts by health topic.',
            'SEO-ready server-rendered pages with revalidate support for Incremental Static Regeneration.'
          ]
        },
        {
          title: 'E-Commerce / Shop',
          items: [
            'Product catalogue with category sidebar on desktop and chip filters on mobile.',
            'Product detail pages with image gallery, stock status, pricing, and add-to-cart action.',
            'Shopping cart with quantity management, subtotal, shipping, and tax calculation.',
            'Checkout flow with order form and payment summary.'
          ]
        },
        {
          title: 'Community & Engagement',
          items: [
            'Authenticated comment system for blog article discussions.',
            'Admin reply notifications by email when an admin responds to a comment.',
            'Share buttons for Facebook, Twitter/X, LinkedIn, WhatsApp, Email, and Copy Link.',
            'Unique trackable share links per post through a shareToken.',
            'Newsletter subscription sections on Home and Blog pages.'
          ]
        },
        {
          title: 'User Accounts',
          items: [
            'Registration with full name, email, phone, and location.',
            'Email verification through a 6-digit OTP code using Brevo/SendinBlue.',
            'Login and logout with JWT session management.',
            'User avatar with initials derived from the full name.',
            'Protected checkout route that redirects unauthenticated users to sign in.'
          ]
        },
        {
          title: 'UI / UX',
          items: [
            'Fully responsive mobile-first layout with hamburger navigation, stacked sections, and adaptive footer grid.',
            'Animated sections using Framer Motion fadeInUp on scroll.',
            'Sticky navbar with blur backdrop and active route highlighting.',
            'Optimistic UI for comment submission.',
            'Toast-style feedback for copied links, form errors, and success states.'
          ]
        },
        {
          title: 'Project Structure',
          items: [
            'Next.js App Router pages for Home, Blog, Blog Article, Products, Product Detail, Cart, Checkout, Sign In, Sign Up, and OTP Verify.',
            'Shared components for Navbar, Footer, CommentSection, ShareButtons, AddToCartButton, ProductGallery, and AnimatedSection.',
            'Context providers for AuthContext and CartContext.',
            'Service layer for blogs, products, categories, and comments.',
            'API helper for authenticated get/post requests, JSON parsing, token attachment, and ApiError handling.',
            'Middleware protects the checkout route.'
          ]
        },
        {
          title: 'Services & API Layer',
          items: [
            'All API calls flow through apiFetch in src/lib/api.ts.',
            'Authenticated requests attach Content-Type and Authorization: Bearer token headers.',
            'Token is read from localStorage using the mensHealthToken key.',
            'Non-2xx responses throw ApiError with message and status code.',
            'Service files include blogs.ts, products.ts, categories.ts, and comments.ts.'
          ]
        },
        {
          title: 'Authentication',
          items: [
            'AuthContext manages global user state, login, logout, registration, and session restoration.',
            'On mount, the app calls /api/auth/me when a token exists.',
            'Register returns an email for OTP verification.',
            'Logout clears the token and resets user state.',
            'Middleware redirects unauthenticated checkout visitors to /signin.'
          ]
        },
        {
          title: 'Comments, Sharing & Cart',
          items: [
            'Comments require authentication and validate content between 5 and 500 characters.',
            'Comment submission uses optimistic UI and displays approved comments with admin replies.',
            'ShareButtons support social platforms, email, clipboard copy, and Web Share API on supported mobile browsers.',
            'CartContext stores cart items, quantity updates, removal, clearCart, subtotal, and total quantity.',
            'Checkout remains protected so guests are redirected before placing an order.'
          ]
        },
        {
          title: 'Deployment',
          items: [
            'Frontend is designed for Vercel deployment with automatic production deployments from the main branch.',
            'NEXT_PUBLIC_API_BASE_URL controls the backend API target.',
            'Production API target is configured as https://menhealthbackend.onrender.com.',
            'Only NEXT_PUBLIC_ variables are exposed to the browser; secrets remain server-side.'
          ]
        }
      ],
      plannedFeatures: [
        {
          title: 'User Experience',
          items: [
            'Dark mode with system preference support and manual localStorage override.',
            'Progressive Web App support with offline access, installability, and push notifications.',
            'Infinite scroll for blog and product listing pages.',
            'Real-time debounced search across blog posts and products.',
            'Bookmark articles and reading progress on article pages.'
          ]
        },
        {
          title: 'Personalisation & Community',
          items: [
            'Editable user profile with image upload.',
            'Order history and wishlist support.',
            'Personalised recommendations based on viewed categories.',
            'Comment reactions, nested replies, moderation queue, and report comment flow.'
          ]
        },
        {
          title: 'Commerce, SEO & Reliability',
          items: [
            'Promo codes, multiple payment gateways, order tracking, product reviews, stock alerts, and related products.',
            'Dynamic Open Graph images and structured JSON-LD data for articles and products.',
            'Image optimisation with lazy loading, blur placeholders, and WebP conversion.',
            'CSRF protection, input sanitisation, error boundaries, retry logic, and WCAG 2.1 AA accessibility audit.',
            'Analytics, share click tracking, Sentry error monitoring, and Core Web Vitals monitoring.'
          ]
        }
      ]
    },
    {
      id: '5',
      title: 'HealthPulse Admin Dashboard',
      shortDescription: 'A full-featured Angular 19 admin dashboard for managing HealthPulse blogs, products, orders, customers, and comments.',
      description: 'HealthPulse Admin Dashboard is the administrator control center for the HealthPulse men\'s health platform. Built with Angular 19 standalone components and Tailwind CSS v4, it gives admins a clean responsive workspace for publishing blog content, managing products, reviewing orders, moderating comments, and tracking platform activity.',
      image: '/assets/projects/healthpulse-admin-dashboard.png?v=1',
      technologies: ['Angular 19', 'TypeScript 5.7', 'Tailwind CSS v4', 'RxJS'],
      livePreview: 'https://men-health-frontend-r2ng.vercel.app',
      gitHub: 'https://github.com/Gabrielduah055/mensHealthFrontend',
      previewCredentials: {
        email: 'admin@example.com',
        password: 'password123'
      },
      challenges: 'The admin app needed to centralize many operational workflows, including content publishing, Cloudinary image uploads, product inventory, order status transitions, customer views, and comment moderation, while keeping every protected route secure behind an admin-only JWT session.',
      solution: 'I built a standalone Angular admin interface with guarded dashboard routes, a functional HTTP interceptor for Bearer tokens, focused service classes for each domain area, reusable management pages, and a responsive Tailwind interface that keeps high-volume admin tasks easy to scan and act on.',
      features: [
        'Protected Admin Dashboard',
        'Content & Product Management',
        'Order and Comment Control'
      ],
      techStack: {
        frontend: ['Angular 19', 'Standalone Components', 'TypeScript 5.7', 'Tailwind CSS v4'],
        backend: ['RESTful API', 'JWT Authentication', 'Angular HttpClient'],
        database: 'Backend-managed data API',
        other: ['ngx-quill', 'quill-blot-formatter', 'RxJS BehaviorSubject', 'sessionStorage Auth']
      },
      targetUsers: ['Platform Administrators', 'Content Editors', 'Operations Teams'],
      stats: {
        performance: 'SPA Build',
        dataLatency: 'API Driven',
        liveStatus: 'Operational'
      },
      detailSections: [
        {
          title: 'Dashboard',
          items: [
            'Stats overview for total blogs, products, orders, customers, and revenue.',
            'Quick-access cards route admins directly to blog creation, product creation, and comment moderation.',
            'Recent blog posts, comments, products, orders, revenue analytics, and social media stats are presented in one responsive overview.'
          ]
        },
        {
          title: 'Authentication',
          items: [
            'Admin-only login flow backed by JWT authentication.',
            'Admin session and token are stored in sessionStorage as adminUser.',
            'AuthService manages login, logout, token access, and BehaviorSubject-based admin state.',
            'Demo admin access: admin@example.com / password123.'
          ]
        },
        {
          title: 'Security Layer',
          items: [
            'Protected dashboard routes use an authGuard CanActivateFn.',
            'Unauthenticated users are redirected to /admin/login.',
            'A functional HTTP interceptor automatically attaches Authorization: Bearer token to outgoing API requests.',
            'Logout clears the session and returns the admin to the login screen.'
          ]
        },
        {
          title: 'Blog Management',
          items: [
            'Admins can list all posts, including drafts, with status, category, date, comments, and view count.',
            'Create and edit forms support Quill rich text, cover image upload, excerpt, tags, topics, sections, quotes, gallery images, read time, featured labels, and comments toggle.',
            'Posts can be deleted, published, or moved back to draft status.',
            'Cover images and gallery assets are uploaded through the backend multipart Cloudinary endpoint.'
          ]
        },
        {
          title: 'Product Management',
          items: [
            'Product listing shows name, price, stock quantity, active status, and image preview.',
            'Admins can add, edit, view details, delete products, and upload up to four images.',
            'Active and inactive controls determine product visibility on the public shop.',
            'Product forms include name, slug, description, price, stock quantity, and gallery image handling.'
          ]
        },
        {
          title: 'Orders & Customers',
          items: [
            'Order list shows customer name, total, status, payment reference, and order date.',
            'Order detail pages show line items, customer contact details, delivery address, payment status, and timestamps.',
            'Admins can transition orders through pending, paid, processing, and delivered states.',
            'Customer pages derive registered users from order data and show contact details with order history.'
          ]
        },
        {
          title: 'Comment Moderation',
          items: [
            'Moderation view lists pending and approved comments across blog posts.',
            'Admins can approve comments so they become visible on the public site.',
            'Admin replies notify the original commenter by email through the backend.',
            'Inappropriate comments can be permanently deleted.'
          ]
        },
        {
          title: 'Routes & Pages',
          items: [
            '/admin/login handles unauthenticated admin access.',
            '/dashboard, /blogs, /products, /orders, /customers, /comments, /links, and /logout are protected routes.',
            'Create, edit, detail, and list pages are organized under feature folders for blogs, products, orders, and customers.',
            'All protected routes render inside AdminLayoutComponent with sidebar navigation and a top bar shell.'
          ]
        },
        {
          title: 'Services & API',
          items: [
            'Backend API: https://menhealthbackend.onrender.com/api.',
            'Public frontend: https://men-health-mu.vercel.app.',
            'AuthService, BlogService, ProductService, OrderService, CustomerService, and DashboardService are provided as root singletons.',
            'Environment files configure the API URL for development and production.'
          ]
        },
        {
          title: 'Build & Deployment',
          items: [
            'Angular CLI builds the production SPA into dist/mens-health-frontend/browser.',
            'The app can run locally with npm start or ng serve on http://localhost:4200.',
            'The static build is deployable to Vercel, Netlify, Firebase Hosting, or any static host with SPA fallback to index.html.',
            'Karma and Jasmine support unit testing, with spec files placed beside components or services.'
          ]
        }
      ],
      plannedFeatures: [
        {
          title: 'Analytics',
          items: [
            'Charts for orders over time, revenue trends, and top-performing blog posts.',
            'Real-time stats through WebSocket updates for orders and comments.',
            'CSV or PDF exports for orders, customers, and blog reports.',
            'Date range filtering for dashboard metrics.'
          ]
        },
        {
          title: 'Content Tools',
          items: [
            'Scheduled publishing with future publishedAt support.',
            'Live post preview before publishing.',
            'Revision history with restore support.',
            'Bulk publish, draft, and delete actions.',
            'SEO fields for meta title, meta description, and Open Graph image.'
          ]
        },
        {
          title: 'Commerce Tools',
          items: [
            'Inventory alerts when stock drops below a configurable threshold.',
            'CSV product imports and product variants.',
            'Promo codes with percentage or fixed discounts.',
            'Related products for cross-selling.',
            'Refund tracking through Paystack API.'
          ]
        },
        {
          title: 'Operations',
          items: [
            'Order confirmation emails triggered from the admin panel.',
            'Internal admin notes on orders.',
            'Customer profiles with total spend and account status.',
            'Customer segmentation by spend, location, or registration date.'
          ]
        },
        {
          title: 'Moderation',
          items: [
            'Bulk approval and deletion for comments.',
            'Spam filter dashboard for auto-flagged comments.',
            'Comment search by keyword, commenter name, or post title.',
            'Saved reply templates for common admin responses.'
          ]
        },
        {
          title: 'Security',
          items: [
            'Role-based access control for Super Admin, Editor, and Support roles.',
            'Admin audit log for create, update, and delete actions.',
            'Two-factor authentication using TOTP.',
            'Session timeout and IP allowlist support.'
          ]
        },
        {
          title: 'Experience',
          items: [
            'Dark mode with system preference and manual override.',
            'Notifications panel for new orders, pending comments, and low stock alerts.',
            'Keyboard shortcuts for power-user admin actions.',
            'Drag-and-drop ordering for blog sections, product images, and gallery items.',
            'Offline detection and graceful retry states.'
          ]
        }
      ]
    },
    {
      id: '2',
      title: 'Cindy E-Commerce',
      shortDescription: 'A React e-commerce storefront for a friend who handmakes Ghana-made shoes, slippers, and sandals.',
      description: 'Cindy E-Commerce is a custom online storefront built for a Ghanaian footwear maker who designs and handcrafts her own shoes, slippers, sandals, and everyday footwear. The platform gives her business a professional digital shop where customers can browse collections, discover new arrivals, create an account, verify their account, add products to cart, and move through a clear shopping experience designed around trust, craft, and local identity.',
      image: '/assets/projects/cindy.png?v=2',
      technologies: ['React', 'Node.js', 'MongoDB', 'E-commerce'],
      livePreview: 'https://slipper-client.vercel.app/',
      gitHub: 'https://github.com/Gabrielduah055/slipper-client',
      challenges: 'The main challenge was translating a small handmade footwear business into an online shopping experience that still feels personal. The site needed to show product variety, communicate that the shoes are locally made, help customers browse by collection, and support account creation and verification without making the buying journey feel complicated.',
      solution: 'I built a React-based storefront with a strong visual product catalogue, clear category sections, reusable product cards, cart-focused shopping flows, account creation, account verification, and responsive layouts. The interface highlights the handmade nature of the products while keeping navigation, product discovery, and purchasing actions simple for everyday customers.',
      features: [
        'Handmade Footwear Catalogue',
        'Verified Customer Accounts',
        'Shopping Cart Flow'
      ],
      techStack: {
        frontend: ['React', 'JavaScript', 'Responsive UI'],
        backend: ['Node.js'],
        database: 'MongoDB',
        other: ['Account Verification', 'Product Catalogue', 'Cart Management']
      },
      targetUsers: ['Footwear Customers', 'Handmade Product Buyers', 'Small Retail Businesses'],
      stats: {
        performance: '94/100',
        dataLatency: '< 300ms',
        liveStatus: 'Operational'
      },
      detailSections: [
        {
          title: 'Business Context',
          items: [
            'Built for a friend who personally makes Ghana-made shoes, slippers, sandals, and other footwear.',
            'The goal was to give the handmade brand a digital storefront that feels professional while still preserving the personal, craft-led nature of the business.',
            'The platform helps customers understand the product range, explore collections, and build confidence before making a purchase.'
          ]
        },
        {
          title: 'Shopping Experience',
          items: [
            'Customers can browse product collections such as men’s footwear, women’s footwear, kids’ styles, and seasonal specials.',
            'Product cards are designed for quick scanning, showing imagery, product names, pricing, and direct cart actions.',
            'The storefront supports a clean browsing path from hero section to categories, new arrivals, product cards, and footer contact actions.',
            'The layout is responsive so customers can shop comfortably on phones, tablets, and desktop screens.'
          ]
        },
        {
          title: 'Accounts & Verification',
          items: [
            'Users can create customer accounts so the shop can support repeat buyers and personalised order flows.',
            'Account verification helps protect the platform from fake signups and builds trust around customer identity.',
            'The verified account flow creates a stronger foundation for future features like order history, saved addresses, wishlists, and personalised recommendations.'
          ]
        },
        {
          title: 'E-Commerce Features',
          items: [
            'Product catalogue structured around the different footwear types the maker sells.',
            'Shopping cart flow for adding products and preparing purchases.',
            'Category-driven browsing to help customers find the right style quickly.',
            'Brand-focused sections that highlight Ghanaian craftsmanship and handmade quality.',
            'Contact and support areas for customer questions and business communication.'
          ]
        },
        {
          title: 'Technical Approach',
          items: [
            'Built with React for a component-based frontend structure.',
            'Product cards, category sections, navigation, cart actions, and footer areas are structured as reusable UI pieces.',
            'Node.js and MongoDB support the data model for products, users, account verification, and future order management.',
            'The interface uses a mobile-friendly layout so the shopping journey remains smooth on smaller screens.'
          ]
        },
        {
          title: 'Outcome',
          items: [
            'The final product gives the footwear maker a stronger online presence beyond social media or word-of-mouth selling.',
            'Customers can now explore her work visually and understand the range of handmade footwear available.',
            'The platform creates a foundation for scaling into full online ordering, customer accounts, stock management, and payment integration.'
          ]
        }
      ],
      plannedFeatures: [
        {
          title: 'Commerce Growth',
          items: [
            'Online payment integration for direct checkout.',
            'Order tracking and customer order history.',
            'Wishlist support for customers who want to save styles for later.'
          ]
        },
        {
          title: 'Business Tools',
          items: [
            'Admin dashboard for adding products, updating prices, and managing stock.',
            'Low-stock alerts for popular handmade items.',
            'Promo codes and seasonal discount campaigns.'
          ]
        },
        {
          title: 'Customer Experience',
          items: [
            'Product reviews and ratings.',
            'Size guide and care instructions for handmade footwear.',
            'WhatsApp ordering or support integration for faster communication.'
          ]
        }
      ]
    },
    {
      id: '3',
      title: 'Magee Beauty Parlour',
      shortDescription: 'A React booking system for a hairstylist business, supporting salon appointments and home-service requests.',
      description: 'Magee Beauty Parlour is a booking platform built for a hairstylist business owned by my friend’s mother. The system helps customers create and verify an account, explore hair styling services, choose a suitable appointment slot, and specify whether they will visit the shop or request home service. It was designed to make appointment booking clearer for customers and easier for the business owner to manage.',
      image: '/assets/projects/magee.png?v=2',
      technologies: ['React', 'Node.js', 'MongoDB', 'Booking System'],
      livePreview: 'https://magee-client.vercel.app',
      gitHub: 'https://github.com/Gabrielduah055/mageeClient',
      challenges: 'The key challenge was designing a booking flow that supports two different service modes: customers can either come to the shop or request home service. The system also needed to handle account creation, account verification, service discovery, appointment selection, and customer booking confidence in a way that feels simple for non-technical users.',
      solution: 'I built a React booking experience with clear service navigation, account registration and verification, appointment-focused calls to action, and a booking flow that captures whether the customer wants an in-shop appointment or home service. The design presents Magee Beauty Parlour as professional and trustworthy while keeping the booking process quick and friendly.',
      features: [
        'Appointment Booking',
        'Shop or Home Service',
        'Verified Customer Accounts'
      ],
      techStack: {
        frontend: ['React', 'JavaScript', 'Responsive UI'],
        backend: ['Node.js'],
        database: 'MongoDB',
        other: ['Account Verification', 'RESTful APIs', 'Booking Flow']
      },
      targetUsers: ['Salon Clients', 'Home-Service Customers', 'Beauty Service Providers'],
      stats: {
        performance: '93/100',
        dataLatency: '< 400ms',
        liveStatus: 'Operational'
      },
      detailSections: [
        {
          title: 'Business Context',
          items: [
            'Built for Magee Beauty Parlour, a hairstylist business owned by my friend’s mother.',
            'The business styles different kinds of hair and also provides home service for customers who prefer not to visit the shop.',
            'The goal was to replace informal appointment conversations with a clearer digital booking flow.'
          ]
        },
        {
          title: 'Booking Experience',
          items: [
            'Customers can create an account and verify it before using the booking system.',
            'The booking flow allows customers to choose the type of hair service they want.',
            'Customers can select an appointment slot that works for them.',
            'The system captures whether the customer will come to the shop or wants home service.',
            'The interface keeps the booking path short, direct, and easy to understand.'
          ]
        },
        {
          title: 'Service Model',
          items: [
            'Supports salon-based appointments for customers who want to visit the parlour.',
            'Supports home-service requests for customers who want the stylist to come to them.',
            'The service-mode distinction helps the business owner prepare better for each appointment.',
            'The system gives customers more flexibility while keeping appointment details organised.'
          ]
        },
        {
          title: 'Accounts & Verification',
          items: [
            'Customers can register with their details to create an account.',
            'Verification helps confirm that the user is real before appointment activity continues.',
            'The account flow creates a foundation for future features like booking history, cancellation management, and customer profiles.'
          ]
        },
        {
          title: 'Technical Approach',
          items: [
            'Built with React for a reusable component-based frontend.',
            'Node.js powers the backend API for users, verification, services, and bookings.',
            'MongoDB stores customer, service, and booking data.',
            'The UI is responsive so customers can book conveniently from mobile devices.'
          ]
        },
        {
          title: 'Outcome',
          items: [
            'The project gives Magee Beauty Parlour a more professional booking presence.',
            'Customers can understand the services and book without relying only on calls or messages.',
            'The business owner gets a clearer structure for appointment requests, especially when separating shop visits from home service.'
          ]
        }
      ],
      plannedFeatures: [
        {
          title: 'Booking Management',
          items: [
            'Admin dashboard for viewing and managing appointment requests.',
            'Booking status updates such as pending, confirmed, completed, or cancelled.',
            'Calendar view for daily and weekly appointment planning.'
          ]
        },
        {
          title: 'Customer Experience',
          items: [
            'Email or SMS appointment reminders.',
            'Customer booking history.',
            'Ability for customers to reschedule or cancel bookings within business rules.'
          ]
        },
        {
          title: 'Business Growth',
          items: [
            'Service pricing and duration management.',
            'Portfolio gallery for hairstyles.',
            'Reviews and ratings from verified customers.'
          ]
        }
      ]
    },
    {
      id: '4',
      title: 'Physiotherapy Hospital Website',
      shortDescription: 'A specialised physiotherapy hospital website for appointment booking, services, recovery process, and patient trust.',
      description: 'This physiotherapy hospital website is a polished healthcare landing experience for a specialised clinic focused on recovery, rehabilitation, pain management, and movement support. The site presents the clinic’s services, communicates trust, explains the recovery process, and gives patients a clear path to book an appointment.',
      image: '/assets/projects/physiotherapy.png?v=1',
      technologies: ['React', 'Responsive Design', 'Healthcare UI', 'Appointment Form'],
      livePreview: 'https://physiotherapy-website-nine.vercel.app/',
      gitHub: 'https://github.com/Gabrielduah055/physiotherapy-website',
      challenges: 'The main challenge was designing a healthcare website that feels professional and reassuring while still being modern and visually memorable. The page needed to communicate medical trust, show physiotherapy services clearly, and make appointment booking easy without overwhelming visitors.',
      solution: 'I designed a focused React website with a strong hero section, appointment form, service cards, clinic trust signals, recovery process content, patient review section, and a calm green visual system. The layout guides visitors from first impression to service discovery and finally toward booking a consultation.',
      features: [
        'Appointment Booking Form',
        'Physiotherapy Service Cards',
        'Recovery Process Flow'
      ],
      techStack: {
        frontend: ['React', 'JavaScript', 'Responsive UI'],
        backend: ['Form-ready Structure'],
        database: 'Not required for landing version',
        other: ['Healthcare UX', 'Service Landing Page', 'Vercel Deployment']
      },
      targetUsers: ['Physiotherapy Patients', 'Hospital Visitors', 'Rehabilitation Clients'],
      stats: {
        performance: 'Landing Ready',
        dataLatency: 'Static Fast',
        liveStatus: 'Operational'
      },
      detailSections: [
        {
          title: 'Project Context',
          items: [
            'Built for a specialised hospital website focused on physiotherapy care.',
            'The site communicates recovery, rehabilitation, manual therapy, pain management, and guided support.',
            'The design needed to feel trustworthy, calm, professional, and easy for patients to understand.'
          ]
        },
        {
          title: 'Patient Journey',
          items: [
            'Visitors land on a clear hero message centered on recovery: Recover, Rebuild, Rise Again.',
            'A visible appointment form helps patients take action immediately.',
            'Service cards explain the major physiotherapy offerings without making the page feel clinical or crowded.',
            'Trust indicators, testimonials, and process sections help patients feel more confident before booking.'
          ]
        },
        {
          title: 'Core Sections',
          items: [
            'Hero section with appointment form and healthcare-focused visual treatment.',
            'Physiotherapy services section covering manual therapy, injury rehabilitation, and pain management.',
            'About/value section explaining expert physiotherapy for a healthier, pain-free life.',
            'Three-step recovery process showing assessment, treatment plan, and continuous support.',
            'Patient testimonial and footer with contact, links, and newsletter subscription.'
          ]
        },
        {
          title: 'Design Approach',
          items: [
            'Used a deep green healthcare palette to create a calm, restorative, and trustworthy feel.',
            'Balanced large typography with soft image sections to make the page feel premium but approachable.',
            'Created strong spacing between sections so visitors can scan information without fatigue.',
            'Used repeated service and process cards for consistency and easy comprehension.'
          ]
        },
        {
          title: 'Technical Approach',
          items: [
            'Built with React and reusable section-based components.',
            'Structured as a responsive landing page that adapts across mobile, tablet, and desktop viewports.',
            'Deployed on Vercel for fast access and simple production hosting.',
            'Prepared the appointment form layout so it can later connect to email, dashboard, or database workflows.'
          ]
        },
        {
          title: 'Outcome',
          items: [
            'The website gives the physiotherapy clinic a strong online presence with a clear service story.',
            'Patients can quickly understand what the hospital specialises in and how the recovery process works.',
            'The design creates a professional foundation for future booking management and patient communication features.'
          ]
        }
      ],
      plannedFeatures: [
        {
          title: 'Booking Improvements',
          items: [
            'Connect appointment form submissions to email or a clinic dashboard.',
            'Add appointment status tracking for pending, confirmed, and completed bookings.',
            'Add calendar availability for selecting open consultation slots.'
          ]
        },
        {
          title: 'Patient Experience',
          items: [
            'Add detailed service pages for each physiotherapy treatment.',
            'Add FAQs about recovery, treatment duration, and appointment preparation.',
            'Add patient education articles about injury prevention and rehabilitation.'
          ]
        },
        {
          title: 'Clinic Operations',
          items: [
            'Add admin tools for managing enquiries and appointment requests.',
            'Add contact notifications for new patient form submissions.',
            'Add analytics to track service interest and appointment conversion.'
          ]
        }
      ]
    }
  ];

  constructor() {}

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return of(this.projects.find(project => project.id === id));
  }
}
