import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React from 'react';

export const Links = [
  {
    path: "https://github.com/JaiCode08",
    icon: <FaGithub className=" size-6"/>,
  },
  {
    path: "https://www.linkedin.com/in/jainish-patel-h/",
    icon: <FaLinkedin className=" size-6 "/>,
  },
  {
    path: "mailto:jaicode2020@gmail.com",
    icon: <MdEmail className=" size-6 "/>,
  },
];