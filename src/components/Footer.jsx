import React from "react";
import { resourcesLinks } from "../constants";
import { platformLinks } from "../constants";
import { communityLinks } from "../constants";

const Footer = () => {
  return (
    <div className=" mt-10 border-t border-neutral-700 px-10 py-10">
      <div className="flex justify-around">
        <div className="flex flex-col">
          <p className="  font-semibold mb-2">Resources</p>
          {resourcesLinks.map((item, index) => (
            <a className="mb-1" href={item.href}>
              {item.text}
            </a>
          ))}
        </div>
        <div className=" flex flex-col">
          <p className="font-semibold mb-2">Platform</p>
          {platformLinks.map((item, index) => (
            <a className="mb-1" href={item.href}>
              {item.text}
            </a>
          ))}
        </div>
        <div className=" flex flex-col">
          <p className="font-semibold mb-2">Comunity</p>
          {communityLinks.map((item, index) => (
            <a className="mb-1" href={item.href}>
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
