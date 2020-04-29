import React from "react";

const Footer = () => {
  return (
    <div className="fixed-bottom border-top border-primary">
      <div className="text-center">
        <a
          href="https://stackoverflow.com/users/1599177/ghost-rider"
          className="fa fa-stack-overflow"
          title="Stackoverflow"
          target="blank"
        />
        <a
          href="https://www.linkedin.com/in/yuriy-golubnichenko-89185859/"
          className="fa fa-linkedin"
          title="Linkedin"
          target="blank"
        />
        <a
          href="https://github.com/Ghost-Rider-gu"
          className="fa fa-github"
          title="Github"
          target="blank"
        />
        <p className="text-muted">
          © {new Date().getFullYear()} Copyright:{" "}
          <a href="http://www.golubnichenko.com" target="blank">
            golubnichenko.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
