"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLarge"
        background="fluid"
        cardStyle="solid"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Products",
          id: "products",
        },
        {
          name: "The 23 Flavors",
          id: "flavors",
        },
        {
          name: "Nutrition Mixer",
          id: "calculator",
        },
        {
          name: "Where to Buy",
          id: "contact",
        },
      ]}
      button={{
        text: "Find a Pepper",
        href: "#contact",
      }}
      brandName="Dr Pepper"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="The One and Only"
      description="Authentic, bold, and unapologetically delicious. Discover the secret 23 flavors that define the Dr Pepper legacy."
      imageSrc="http://img.b2bpic.net/free-photo/supermarket-banner-concept-with-ingredients_23-2149421138.jpg"
      imageAlt="Dr Pepper Can"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-female-student-walks-through-city-with-coffee-her-hands_169016-66671.jpg",
          alt: "Happy fan 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-young-man-showing-beer-glass-camera_23-2148154031.jpg",
          alt: "Happy fan 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-drinking-coffee-city-listening-music-headphones_169016-66419.jpg",
          alt: "Happy fan 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-with-soda-can-her-head_23-2148751482.jpg",
          alt: "Happy fan 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-with-croissant-cup-coffee-city-walk_169016-23318.jpg",
          alt: "Happy fan 5",
        },
      ]}
      avatarText="Join 10M+ loyal fans"
    />
  </div>

  <div id="flavors" data-section="flavors">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "Amaretto",
          author: "Hint 01",
          description: "A sweet, nutty warmth that anchors the blend.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-pink-white-paint-mix_23-2148292471.jpg",
        },
        {
          id: "f2",
          title: "Vanilla",
          author: "Hint 02",
          description: "Creamy, smooth notes that soften the bold edges.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-texture-cream_23-2149409616.jpg",
        },
        {
          id: "f3",
          title: "Allspice",
          author: "Hint 03",
          description: "The subtle kick of aromatic spice in every glass.",
          imageSrc: "http://img.b2bpic.net/free-photo/tossed-colorful-powder-black-backdrop_23-2148209015.jpg",
        },
      ]}
      title="The 23 Flavors"
      description="Unlock the mystery in every sip. Hover over the notes to experience the craftsmanship behind our blend."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Classic",
          price: "12pk",
          imageSrc: "http://img.b2bpic.net/free-photo/composition-juice-bottles-table_23-2148037104.jpg",
        },
        {
          id: "p2",
          name: "Cherry",
          price: "12pk",
          imageSrc: "http://img.b2bpic.net/free-photo/cherries-bowl-with-jam-cocktail-high-angle-view-wooden_176474-7582.jpg",
        },
        {
          id: "p3",
          name: "Zero Sugar",
          price: "12pk",
          imageSrc: "http://img.b2bpic.net/free-photo/refreshing-drink-with-kiwi-arrangement_23-2150928896.jpg",
        },
        {
          id: "p4",
          name: "Cream Soda",
          price: "12pk",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-sugar-cubes-cocktail-glass-shape-soft-drink-can_23-2148691296.jpg",
        },
        {
          id: "p5",
          name: "Dark Berry",
          price: "12pk",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-heap-fresh-blueberries-small-bucket_181624-59669.jpg",
        },
        {
          id: "p6",
          name: "Family Pack",
          price: "Bundle",
          imageSrc: "http://img.b2bpic.net/free-photo/glass-cup-fresh-lemonade-with-slices-lemon_114579-88671.jpg",
        },
      ]}
      title="Classic Varieties"
      description="Explore the full spectrum of our refreshment lineup."
    />
  </div>

  <div id="calculator" data-section="calculator">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "150",
          description: "Calories",
        },
        {
          id: "m2",
          value: "39g",
          description: "Sugar Content",
        },
        {
          id: "m3",
          value: "41mg",
          description: "Caffeine",
        },
      ]}
      title="Flavor Mixer"
      description="Calculate your nutrition impact in real-time."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Alice M.",
          role: "Collector",
          company: "Fan Club",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-with-tasty-kombucha_23-2150210079.jpg",
        },
        {
          id: "t2",
          name: "Bob D.",
          role: "Enthusiast",
          company: "Pepper Nation",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-pretty-woman-model-holding-teapot_114579-90508.jpg",
        },
        {
          id: "t3",
          name: "Carol S.",
          role: "Member",
          company: "Soda Lovers",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-having-fun-food-festival_23-2149500421.jpg",
        },
        {
          id: "t4",
          name: "Dan W.",
          role: "Fan",
          company: "The Pepper Guys",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-pretty-woman-model-holding-teapot_114579-38367.jpg",
        },
        {
          id: "t5",
          name: "Eve R.",
          role: "Subscriber",
          company: "Global Fans",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-self-portrait-cute-smiling-hipster-black-woman-making-self-portrait_273443-1898.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "10M+",
          label: "Fans Served",
        },
        {
          value: "4.9",
          label: "Rating",
        },
        {
          value: "125",
          label: "Years Strong",
        },
      ]}
      title="Fan Favorites"
      description="Hear what the loyal Pepper fans have to say."
    />
  </div>

  <div id="proof" data-section="proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Walmart",
        "Kroger",
        "Target",
        "Costco",
        "Safeway",
        "Publix",
        "Walgreens",
      ]}
      title="Available Everywhere"
      description="Your favorite soda is just a short trip away."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",
          title: "Is it prune juice?",
          content: "No, it's a unique blend of 23 secret flavors.",
        },
        {
          id: "faq2",
          title: "Where can I find it?",
          content: "Check our store locator at the top of the site.",
        },
        {
          id: "faq3",
          title: "Is it gluten free?",
          content: "Yes, Dr Pepper is gluten-free.",
        },
      ]}
      sideTitle="Questions?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      title="Find Your Pepper"
      description="Sign up for rewards, updates, and flavor alerts."
      tag="Stay Updated"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "History",
              href: "#",
            },
            {
              label: "Ethics",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#",
            },
            {
              label: "Compliance",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Dr Pepper Brand."
      bottomRightText="All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
