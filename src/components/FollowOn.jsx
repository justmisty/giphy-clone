import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const FollowOn = () => {
  return (
    <div className="faded-text pt-2">
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/brightanyasi/">
          <FaLinkedin size={20}/>
        </a>
        <a href="https://www.instagram.com/__justmisty/">
          <FaInstagram size={20}/>
        </a>
        <a href="https://github.com/justmisty">
          <FaGithub size={20}/>
        </a>
      </div>
    </div>
  );
};

export default FollowOn;
