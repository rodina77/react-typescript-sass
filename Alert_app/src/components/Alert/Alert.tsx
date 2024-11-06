import { X } from "lucide-react";

interface IProps
{
  type:AlertType,
  icon:ReactNode,
  title:string,
  description:string,
}

import "./Alert.scss";
import { ReactNode } from "react";
import { AlertType } from "../../assets/types";
const Alert = ({type , icon , title , description}:IProps) => {
  return (
    <>
      <div className={type}>
        <div className="Alert-Header">
          <div className="Alert-title">
            {icon}
            <h5 className="Alert-h1">{title}</h5>
          </div>
          <X />
        </div>
        <p>
          {description}
        </p>
      </div>
    </>
  );
};

export default Alert;
