import { ReactComponent as HomeIcon } from "../assets/homeIcon.svg";
import { ReactComponent as MailIcon } from "../assets/mailIcon.svg";
import { ReactComponent as PhoneIcon } from "../assets/phoneIcon.svg";
import { ReactComponent as TelegramIcon } from "../assets/telegramIcon.svg";
import { contactProps } from "../components/contact";

export const myContacts: contactProps[] = [
  { contact: "Санкт-Петербург", icon: HomeIcon },
  {
    contact: "@AlexandrTorasov",
    icon: TelegramIcon,
    link: "https://t.me/AlexandrTorasov",
  },
  { contact: "torasov.alexandr@gmail.com", icon: MailIcon },
  { contact: "+7 (911) 780-42-81", icon: PhoneIcon },
];
