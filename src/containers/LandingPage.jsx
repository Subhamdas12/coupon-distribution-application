import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const faqs = [
    {
      question: "How exactly does the round-robin system work?",
      answer:
        "The round-robin system ensures fair distribution by sequentially allocating coupons to users in a rotating manner.",
    },
    {
      question: "How long do I have to wait for my turn?",
      answer:
        "The wait time depends on the number of users ahead of you in the queue. You'll be notified when it's your turn.",
    },
    {
      question: "What happens if I don't claim my coupon?",
      answer:
        "If you don't claim your coupon within the given timeframe, it will be reassigned to another user.",
    },
    {
      question: "Can I trade or transfer my coupon to someone else?",
      answer:
        "No, coupons are non-transferable and must be used by the account holder who claimed them.",
    },
    {
      question: "How do I redeem a coupon after claiming it?",
      answer:
        "You can redeem your coupon by entering the provided code at checkout on the partner store's website.",
    },
  ];

  const coupons = [
    {
      id: 1,
      title: "Fashion Outlet",
      discount: "25% OFF",
      validity: "Valid until 12/31/2023",
      description:
        "Get 25% off on all clothing items. Valid for online purchases only.",
      claimed: 7,
      image:
        "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Tech Gadgets",
      discount: "$15 OFF",
      validity: "Valid until 11/30/2023",
      description:
        "$15 off on purchases over $75. Electronics and accessories included.",
      claimed: 60,
      image:
        "https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Home Essentials",
      discount: "FREE SHIPPING",
      validity: "Valid until 1/15/2024",
      description:
        "Free shipping on all home goods. No minimum purchase required.",
      claimed: 66,
      image:
        "https://images.unsplash.com/photo-1595257841889-eca2678454e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
  ];
  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Get your share of
                <br />
                <span className="text-yellow-500">exclusive coupons</span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-indigo-100">
                CouponShare distributes valuable coupons to users in a fair,
                round-robin manner. Sign up, claim your coupon, and save on your
                next purchase!
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:justify-start gap-4">
                <Link to="/couponsAvailable">
                  <button className="h-10 rounded-md shadow px-5 py-3 bg-white text-indigo-600 font-medium hover:bg-gray-50">
                    View Available Coupons
                  </button>
                </Link>
                <button
                  className="h-10 rounded-md px-5 py-3 bg-indigo-600 text-white font-medium hover:bg-indigo-700"
                  onClick={() => scrollToSection("how-it-works")}
                >
                  Learn How It Works
                </button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-6 flex justify-center items-center relative">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute animate-bounce top-[10%] left-[10%]">
                  <div className="bg-white shadow-lg rounded-lg p-4 transform -rotate-6 border-2 border-dashed border-yellow-500">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-yellow-500 font-bold">20% OFF</span>
                      <svg
                        className="h-6 w-6 text-yellow-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 7h.01M7 17h.01M17 7h.01M17 17h.01M3 3h18v18H3V3zm4 4l10 10m0-10L3 17"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm">Fashion Store</p>
                  </div>
                </div>
                <div className="absolute animate-bounce top-[30%] right-[5%]">
                  <div className="bg-white shadow-lg rounded-lg p-4 transform rotate-12 border-2 border-dashed border-indigo-500">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-indigo-500 font-bold">$10 OFF</span>
                      <svg
                        className="h-6 w-6 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v13m0 0l-4-4m4 4l4-4M4 8h16"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm">Electronics</p>
                  </div>
                </div>
                <div className="absolute animate-bounce bottom-[10%] left-[20%]">
                  <div className="bg-white shadow-lg rounded-lg p-4 transform -rotate-12 border-2 border-dashed border-green-500">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-green-500 font-bold">
                        FREE SHIPPING
                      </span>
                      <svg
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm">Home Goods</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <svg
            className="w-full h-12 text-gray-50 fill-current"
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
          >
            <path d="M0,48 L1440,48 L1440,0 C1380,24 1320,36 1260,42 C1180,50 1100,42 1020,28 C940,14 860,0 780,0 C700,0 620,14 540,16 C460,18 380,10 300,10 C220,10 140,18 60,24 C40,26 20,28 0,30 L0,48 Z"></path>
          </svg>
        </div>
      </section>{" "}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How Our Coupon Distribution Works
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Fair round-robin distribution ensures equal access to exclusive
              deals
            </p>
          </div>
          <div className="mt-16 lg:grid lg:grid-cols-3 lg:gap-8">
            {[
              {
                step: "1",
                title: "Request a Coupon",
                description:
                  "Browse available coupons and submit your request. No waiting in line yet - just express your interest.",
                icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
              },
              {
                step: "2",
                title: "Get in Queue",
                description:
                  "Your request joins our round-robin queue. We'll notify you when the coupon becomes available for distribution.",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
              },
              {
                step: "3",
                title: "Receive Automatically",
                description:
                  "When the coupon expires, our system automatically distributes it to all requesters in fair round-robin fashion.",
                icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z",
              },
            ].map(({ step, title, description, icon }) => (
              <div key={step} className="relative mt-10 lg:mt-0">
                <div className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-md h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
                    {step}
                  </div>
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-base text-gray-500 text-center">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Automatic Round-Robin Distribution
            </h3>
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <p className="text-gray-600 mb-4 text-left">
                  Our system ensures fair distribution after coupon expiration:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 text-left">
                  <li>
                    Simply request any available coupon you're interested in
                  </li>
                  <li>
                    Your request joins the distribution queue automatically
                  </li>
                  <li>
                    When the coupon expires, our system processes all requests
                  </li>
                  <li>
                    Coupons are distributed equally in round-robin sequence
                  </li>
                  <li>
                    You'll automatically receive the coupon when it's your turn
                  </li>
                  <li>
                    No active claiming needed - it's all handled by our system
                  </li>
                  <li>
                    You can request another coupon after 1 hour of your previous
                    request
                  </li>
                </ul>
              </div>
              <div className="mt-6 lg:mt-0">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h4 className="font-medium text-gray-900 mb-4">
                    Automatic Distribution Flow
                  </h4>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="bg-indigo-100 p-3 rounded-lg">
                        <span className="font-medium">Coupon Expires</span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                      </svg>
                      <div className="bg-indigo-100 p-3 rounded-lg">
                        <span className="font-medium">System Processes</span>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                    <div className="flex items-center justify-center space-x-2">
                      {["U1", "U2", "U3"].map((user, index) => (
                        <div key={user} className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center mb-1">
                            <span className="text-xs">{user}</span>
                          </div>
                          <div className="text-xs">Receives</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    The system automatically sends coupons to all requesters in
                    sequence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">CouponShare by the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="5,000+" label="Active Users" />
            <StatCard number="12,750" label="Coupons Claimed" />
            <StatCard number="$350K+" label="User Savings" />
            <StatCard number="28" label="Partner Stores" />
          </div>
        </div>
      </section>
      <section id="faq" className="py-16 bg-gray-50 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Everything you need to know about our coupon distribution system
            </p>
          </div>
          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:p-20">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">
                  Ready to start saving?
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-indigo-100">
                  Join our community today and get in line for exclusive deals
                  and discounts. It's completely free!
                </p>
              </div>
              <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="flex h-10 border bg-background text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 w-full px-5 py-3 border-white rounded-md"
                    id="email-address"
                    name="email"
                    placeholder="Enter your email"
                    required
                    //   value={email}
                    //   onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 h-10 px-4 py-2 mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto bg-indigo-100 text-indigo-900 hover:bg-white"
                    type="submit"
                  >
                    Get Started
                  </button>
                </form>
                <p className="mt-3 text-sm text-indigo-100">
                  We care about your data. Read our
                  <a href="#" className="font-medium text-white underline ml-1">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-400">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-white mr-2"
              >
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                <path d="M13 5v2"></path>
                <path d="M13 17v2"></path>
                <path d="M13 11v2"></path>
              </svg>
              <span className="font-bold text-xl">CouponShare</span>
            </div>
            <p className="text-base">
              Fair coupon distribution for everyone. Get exclusive deals from
              your favorite brands without the hassle.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-black">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-black">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-black">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-black">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#how-it-works" className="hover:text-black">
                      How it Works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Partner Stores
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Coupon Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-black">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="hover:text-black">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="hover:text-black">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="hover:text-black">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Partner Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Report an Issue
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-base">© 2023 CouponShare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const StatCard = ({ number, label }) => {
  return (
    <div className="text-center">
      <p className="text-4xl font-extrabold">{number}</p>
      <p className="mt-2 text-indigo-100">{label}</p>
    </div>
  );
};
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b bg-white shadow rounded-lg overflow-hidden">
      <h3 className="flex">
        <button
          type="button"
          className="flex flex-1 items-center justify-between transition-all px-6 py-4 text-lg font-medium text-gray-900 hover:no-underline"
          onClick={() => setIsOpen(!isOpen)}
        >
          {question}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
      </h3>
      {isOpen && (
        <div className="px-6 py-4 text-sm text-gray-600">{answer}</div>
      )}
    </div>
  );
};

export default LandingPage;
