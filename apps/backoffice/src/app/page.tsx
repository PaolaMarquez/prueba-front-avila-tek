import Card from "@/components/landing/Card";
import Navbar from "@/components/landing/Navbar";
import Link from "next/link";
import React from "react";
import {
  ChatBubbleLeftIcon,
  BoltIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/24/outline";
import Stats from "@/components/landing/Stats";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Gallery from "@/components/landing/Gallery";
import Collage from "@/components/landing/Gallery";
import Testimonials from "@/components/landing/Testimonials";
import Slide from "@/components/landing/Slide";
import Footer from "@/components/landing/Footer";
import Chart from "@/components/landing/charts/Chart";
import EmailCTA from "@/components/landing/EmailCTA";

const integrations = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    name: "Notion integration",
    description:
      "Work faster and smarter by integrating directly with Notion, right in the app.",
    href: "#",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png",
    name: "Slack integration",
    description:
      "Work faster and smarter by integrating directly with Slack, right in the app.",
    href: "#",
  },
  {
    img: "https://cdn.iconscout.com/icon/free/png-512/free-google-drive-14-721942.png?f=webp&w=256",
    name: "Google Drive integration",
    description:
      "Work faster and smarter by integrating directly with Google Drive, right in the app.",
    href: "#",
  },
  {
    img: "https://cdn.iconscout.com/icon/free/png-512/free-intercom-2296057-1912016.png?f=webp&w=256",
    name: "Intercom integration",
    description:
      "Work faster and smarter by integrating directly with Intercom, right in the app.",
    href: "#",
  },
  {
    img: "https://cdn.iconscout.com/icon/free/png-512/free-jira-3628861-3030001.png?f=webp&w=256",
    name: "Jira integration",
    description:
      "Work faster and smarter by integrating directly with Jira, right in the app.",
    href: "#",
  },
  {
    img: "https://cdn.iconscout.com/icon/free/png-512/free-dropbox-163-721946.png?f=webp&w=256",
    name: "Dropbox integration",
    description:
      "Work faster and smarter by integrating directly with Dropbox, right in the app.",
    href: "#",
  },
];

const features = [
  {
    img: <ChatBubbleLeftIcon className="w-6" />,
    name: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    href: "#",
  },
  {
    img: <BoltIcon className="w-6" />,
    name: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    href: "#",
  },
  {
    img: <DocumentChartBarIcon className="w-6" />,
    name: "Manage your team with reports",
    description:
      "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    href: "#",
  },
];

export default function Home() {
  return (
    <>
      <EmailCTA />
      {/* <Chart /> */}
      <Card
        features={integrations}
        info={"Integrations"}
        title={"Get more value from your tools"}
        description={
          "Connect your tools, connect your teams. With over 100 apps already available in our directory, your team's favourite tools are just a click away."
        }
        arrow={"View integration"}
      />
      <Card
        features={features}
        info={"Features"}
        title={"Cutting-edge features for advanced analytics"}
        description={
          "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
        }
        arrow={"Learn more"}
      />
      <Stats />
      <FAQ />
      <CTA
        title={<span>Give us a shot.</span>}
        desc={"Join over 4,000+ startups already growing with Untitled."}
        img={
          "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
        }
        bg="bg-purple"
      />
      <CTA
        title={
          <span>
            No long-term contracts. <br />
            No catches.
          </span>
        }
        desc={"Start your 30-day free trial today."}
        gallery={<Gallery />}
        bg="bg-transparent items-center"
      />
      <Testimonials />
      <Slide />
      <Footer />
    </>
  );
}
