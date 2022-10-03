import { ReactComponent as HomeIcon } from "../assets/homeIcon.svg";
import { ReactComponent as MailIcon } from "../assets/mailIcon.svg";
import { ReactComponent as NetIcon } from "../assets/netIcon.svg";
import { ReactComponent as PhoneIcon } from "../assets/phoneIcon.svg";
import { contactProps } from "../components/contact";

export const myContacts: contactProps[] = [
  { contact: "134 Rightward Way", icon: HomeIcon },
  { contact: "(000)954-987-2679", icon: PhoneIcon },
  { contact: "theresawebb@gmail.com", icon: MailIcon },
  { contact: "www.webb.com/mycv/", icon: NetIcon },
];
