import React from "react";

import LogoWhite from "assets/logo/logo_white.png";
import LinkedInLogo from "assets/contact/linkedin_logo.png";
import EmailLogo from "assets/contact/gmail_logo.png";
import ResumeLogo from "assets/contact/resume.png";
import LastFmLogo from "assets/contact/lastfm_logo.png";
import TwitterLogo from "assets/contact/twitter_logo.png";

const ContactSection = () => {
  return (
    <div className="w-screen bg-sky-900 h-[600px] text-white flex flex-col items-center p-10 mt-20">
      <div className="flex flex-col sm:w-4/5 2xl:w-3/5 items-start ">
        <div className="flex flex-col w-fit">
          <text className="font-bold text-3xl leading-7">Contact Me</text>
          <div className="w-full h-4 bg-white"></div>
        </div>
        <div className="mt-10 w-full">
          <div className="flex flex-row">
            <div className="flex flex-col w-1/2 space-y-8">
              <div
                className="flex flex-row items-center space-x-8 hover:cursor-pointer group"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/daniel-levy789/",
                    "_blank"
                  )
                }
              >
                <div className="w-8">
                  <img src={LinkedInLogo} alt="LinkedIn Logo" />
                </div>
                <text className="font-normal group-hover:font-bold">
                  Connect with me on LinkedIn
                </text>
              </div>
              <div
                className="flex flex-row items-center space-x-8 hover:cursor-pointer group"
                onClick={() =>
                  (window.location.href = "mailto:daniel.levy789@gmail.com")
                }
              >
                <div className="w-8">
                  <img src={EmailLogo} alt="Email Logo" />
                </div>
                <text className="font-normal group-hover:font-bold">
                  Reach out to me by email
                </text>
              </div>
              <a
                href="/Daniel_Levy_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <div className="flex flex-row items-center space-x-8 hover:cursor-pointer group">
                  <div className="w-8">
                    <img src={ResumeLogo} alt="Resume" />
                  </div>
                  <text className="font-normal group-hover:font-bold">
                    Download my resume
                  </text>
                </div>
              </a>
              <div
                className="flex flex-row items-center space-x-8 hover:cursor-pointer group"
                onClick={() =>
                  window.open("https://www.last.fm/user/diznatch123", "_blank")
                }
              >
                <div className="w-8">
                  <img src={LastFmLogo} alt="Lastfm Logo" />
                </div>
                <text className="font-normal group-hover:font-bold">
                  Follow me on Last.fm
                </text>
              </div>
              <div
                className="flex flex-row items-center space-x-8 hover:cursor-pointer group"
                onClick={() =>
                  window.open("https://twitter.com/DanielL20315417", "_blank")
                }
              >
                <div className="w-8">
                  <img src={TwitterLogo} alt="Twitter Logo" />
                </div>
                <text className="font-normal group-hover:font-bold">
                  Follow me on Twitter
                </text>
              </div>
            </div>
            <div className="flex w-1/2 justify-center items-center">
              <div className="w-96">
                <img src={LogoWhite} alt="Daniel's Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
