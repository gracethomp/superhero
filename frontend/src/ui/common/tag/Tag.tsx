import { FC } from "react";
import "./Tag.css";

type TagProps = {
  children: string;
};

const Tag: FC<TagProps> = (props) => {
  return (
    <div className="tag">
      <p>{props.children}</p>
    </div>
  );
};

export default Tag;
