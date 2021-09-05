import { FiGithub, FiLinkedin, FiInstagram} from "react-icons/fi";
import c_auto from '../Pics/Capabilities/C_Automation.png';
import c_web from '../Pics/Capabilities/C_Web.png';
import c_iot from '../Pics/Capabilities/C_IOT.png';
import c_mobile from '../Pics/Capabilities/C_Mobile.png';
import c_product from '../Pics/Capabilities/C_Product.png';
import c_solar from '../Pics/Capabilities/C_Solar.png';

export const dataLink = [
    {
        icon: FiGithub,
        lnk: "https://google.com"
    },
    {
        icon: FiLinkedin,
        lnk: "https://google.com"
    },
    {
        icon: FiInstagram,
        lnk: "https://google.com"
    }
]

export const dataSkill = [
    {
      title: 'Solar Powered System',
      pics: {
        url:c_solar,
        alt:'gambar',
      },
      usage: [
        "Engineering, Procurement, and Installation",
        "Operation & Maintanance",
        "Monitoring & Control",
        "Solar Product Development"
      ]
    },
    {
      title: 'Product Engineering',
      pics: {
        url:c_product,
        alt:'gambar',
      },
      usage: [
        "Industrial Product Development",
        "EV Charging",
        "Weight in Motion & Lidar",
        "Intelligent Transport System",
        "Automotive Product Development"
      ]
    },
    {
      title: 'Automation & Control',
      pics: {
        url:c_auto,
        alt:'gambar',
      },
      usage: [
        "PLC and SCADA Solution",
        "Process Automation & Instrumentation",
        "Power Plant Automation",
        "Grid Automation",
      ]
    },
    {
      title: 'Mobile Development',
      pics: {
        url:c_mobile,
        alt:'gambar',
      },
      usage: [
        "IoT-based Application",
        "E-commerce Application",
        "API Integration",
        "Native Development",
        "Cross-platform Development",

      ]
    },
    {
      title: 'Web Development',
      pics: {
        url:c_web,
        alt:'gambar',
      },
      usage: [
        "System Architecture",
        "Front-end Development",
        "Back-end Development",
        "Responsive Development",
        "UI/UX Prototypes",
        "Content Mgt. System",
        "System Integration",
      ]
    },
    {
      title: 'Internet of Things (IoT)',
      pics: {
        url:c_iot,
        alt:'gambar',
      },
      usage: [
        "Smart-home",
        "Smart monitoring",
        "Automation Control System",
        "Embedded System",
        "Industrial Internet of Things",
      ]
    },
  ]