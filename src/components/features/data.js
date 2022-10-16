import { FaAccessibleIcon, FaHome, FaGg } from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";
import { MdConnectWithoutContact } from "react-icons/md";

export const FeatureListTop = [
  {
    id: 1,
    icon: <FaHome color="#FFFFFF" size={22} />,
    heading: "Find events happening on campus",
    text: "Always be in the know whenever something new happens with our intuitive home page design. No more digging around!",
  },
  // {
  //   id: 2,
  //   icon: <SiDatabricks color="#FFFFFF" size={22} />,
  //   heading: "Shout out / go to an event",
  //   text: "Shouting out and/or going to an event promotes the event to more users. The event also gets added to your organized personal calendar integrated within the app.",
  // },
  
];
export const FeatureListBot = [
  {
    id: 3,
    icon: <MdConnectWithoutContact color="#FFFFFF" size={22} />,
    heading: "Create events",
    text: "Have a party you want to blast? Do you want to organize a casual lunch meetup? Anyone can create an event, whether big or small!",
  }
  
];