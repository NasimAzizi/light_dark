import { notification1, robot } from "../assets";
import { notificationImages } from "../constants";

import coding from '../assets/coding.webp'

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={coding}
        width={92}
        height={72}
        alt="image"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            intuitive design for all devices -
          </ul>
          <div className="body-2 text-n-13"></div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
