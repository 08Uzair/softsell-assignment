"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { marked } from "marked"; // Import marked for Markdown parsing

dotenv.config();

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is not set in the environment variables");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Context for AI to follow
const CONTEXT_PROMPT = `\
You can reach us via email at support@SoftSell.com, by phone at 80804 63271, or through SoftSell Instagram https://www.instagram.com/SoftSell_inc and LinkedIn-https://www.linkedin.com/company/SoftSell-inc/.

SoftSell is a digital agency specializing in:

- **Web Development**: Creating modern, responsive websites.
- **Expertise in React, Next.js, and React Native**: Delivering high-performance solutions.
- **SEO Optimization**: Enhancing online visibility and search engine rankings.
- **Three-in-One Combo Solution**: Providing a comprehensive package including a website, app, and admin panel.

### Tech Stack:
- HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, TypeScript, WordPress, Shopify, React Native.

### Project Timelines:
- **WordPress projects**: Typically take **1 week**.
- **React/Next.js projects**: Usually take **3-4 weeks**, depending on complexity.

The AI assistant will only address queries related to these services. For unrelated questions, users will be politely informed about the scope limitation.`;

// Predefined responses with regex patterns
const predefinedResponses: { pattern: RegExp; response: string }[] = [
  // Greetings
  {
    pattern: /^(hi|hello)$/i,
    response: "Hello! 👋 How can I assist you with SoftSell's services today?",
  },
  {
    pattern: /how are you/i,
    response:
      "I'm just a digital assistant, but thank you for asking! How can I assist you today?",
  },

  // Identity and Creator
  {
    pattern: /who (are you|created you)/i,
    response:
      "I'm an AI assistant created by the SoftSell team to assist with their services.",
  },

  // Contact Info
  {
    pattern:
      /give me (your )?contact (info|details)|what is your contact (number|info)|share your contact (info|details)|how can I contact/i,
    response: `You can reach us through:
    
    - Email: **uzerqureshi26@gmail.com**
    - Phone: **98962214**
    - Instagram: [SoftSell Instagram](https://www.instagram.com)
    - LinkedIn: [SoftSell LinkedIn](https://www.linkedin.com)`,
  },

  // SoftSell Services
  {
    pattern: /what services (does|do) SoftSell (offer|provide)/i,
    response: `SoftSell offers a variety of services:

      - **Web Development**: Modern, responsive websites.
      - **App Design**: Custom designs for mobile apps.
      - **SEO Optimization**: Enhance online visibility.
      - **Three-in-One Combo Solution**: Website, app, and admin panel in one.
      - **Graphic Design**: Custom branding and marketing materials.`,
  },

  // Software Development
  {
    pattern: /what types of software do you develop/i,
    response: `We specialize in:

      - **Enterprise Applications**
      - **Mobile Apps**
      - **Web-based Platforms**`,
  },
  {
    pattern: /what is your software development process/i,
    response: `Our process includes:

      1. **Consultation**: Understanding your needs.
      2. **Requirement Analysis**: Defining project specifications.
      3. **Design**: Crafting the UI/UX.
      4. **Development**: Building the solution.
      5. **Testing**: Ensuring quality and performance.
      6. **Deployment**: Going live.
      7. **Ongoing Support**: Post-launch assistance.`,
  },

  // Website and App Design
  {
    pattern: /do you offer custom (website|app) designs/i,
    response:
      "Yes, we provide **custom designs** tailored to your brand and user experience needs.",
  },
  {
    pattern: /are your designs (responsive|mobile-friendly)/i,
    response:
      "Absolutely! All our designs are **responsive**, ensuring they work seamlessly across all devices.",
  },

  // Tech Stack
  {
    pattern: /what tech stack do you use/i,
    response: `SoftSell uses a robust tech stack, including:

      - <h1>Frontend</h1>: HTML, CSS, JavaScript, React, Next.js, Tailwind CSS
      - <h1>Backend</h1>: Node.js, Express, and others
      - <h1>Mobile</h1>: React Native
      - <h1>Content Management</h1>: WordPress, Shopify
      - <h1>Others</h1>: TypeScript for added reliability.`,
  },

  // Project Timelines
  {
    pattern: /how long does it take to (complete|finish) a project/i,
    response: `Project timelines vary depending on the platform:

      - **WordPress projects**: Typically take **1 week**.
      - **React/Next.js projects**: Typically take **3-4 weeks** (depending on complexity).`,
  },

  // SEO Services
  {
    pattern: /what seo services do you provide/i,
    response: `Our **SEO** services include:

      -**Keyword Research**
      -**On-page Optimization**
      -**Technical SEO**
      -**Content Creation**
      -**Link Building**
      -**Performance Analysis**`,
  },
  {
    pattern: /how long does it take to see results from seo/i,
    response:
      "SEO results generally take **3 to 6 months**, depending on your industry and the strategies applied.",
  },

  // Graphic Design
  {
    pattern: /what graphic design services do you offer/i,
    response: `We offer a range of **graphic design services**:

      - **Logo Design**
      - **Branding Materials**
      - **Marketing Collateral**
      - **Custom Graphics**`,
  },
  {
    pattern: /can you work with our existing brand guidelines/i,
    response:
      "Yes, we can either work with your existing brand guidelines or assist in creating new ones.",
  },

  // Project Management and Communication
  {
    pattern: /how do you manage projects/i,
    response: `We use **agile project management methodologies** to ensure timely delivery. This includes:

      - **Regular updates**
      - **Clear communication**
      - **Consistent feedback**`,
  },
  {
    pattern: /will I have a dedicated point of contact/i,
    response:
      "Yes, you'll have a dedicated **project manager** to ensure seamless communication throughout the project.",
  },

  // Pricing and Payment
  {
    pattern: /how do you determine the cost of a project/i,
    response:
      "Project costs depend on the **scope**, **complexity**, and **requirements**. After our consultation, we'll provide a detailed quote.",
  },
  {
    pattern: /what payment methods do you accept/i,
    response:
      "We accept **bank transfers**, **credit cards**, and other secure payment methods.",
  },

  // Post-Project Support
  {
    pattern:
      /do you offer ongoing support|maintenance after project completion/i,
    response:
      "Yes, we provide ongoing support and maintenance to ensure your solutions stay up-to-date.",
  },
  {
    pattern: /can you assist with future updates or enhancements/i,
    response:
      "Absolutely! We’re here to help with **updates**,**enhancements**, or any **future projects** as your **business grows**.",
  },
];

export async function generateGeminiResponse(message: string) {
  try {
    const normalizedMessage = message.trim().toLowerCase();

    // Check predefined responses
    for (const { pattern, response } of predefinedResponses) {
      if (pattern.test(normalizedMessage)) {
        const parsedResponse = marked(response); // Parse Markdown into HTML
        return { success: true, data: parsedResponse };
      }
    }

    // Fallback to AI generation
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `${CONTEXT_PROMPT}\n\nUser Query: ${message}`;
    const result = await model.generateContent(prompt);

    const response = await result.response;
    const text = await response.text();

    const parsedText = marked(text); // Parse Markdown into HTML
    return { success: true, data: parsedText };
  } catch (error) {
    console.error("Error generating Gemini response:", error);
    return { success: false, error: "Failed to generate response" };
  }
}
