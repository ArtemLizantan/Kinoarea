import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import { Link } from "react-router-dom";
import "./checkbox.scss";

interface CheckboxComponentProps {
  text: string;
  withLink?: boolean;
  path?: string;
  nameLink?: string;
  name: string;
}

const onChange: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
  text,
  withLink,
  nameLink,
  name,
  path,
}) => (
  <Checkbox name={name} onChange={onChange}>
    {text}
    &nbsp;
    {withLink && <Link to={path}>{nameLink}</Link>}
  </Checkbox>
);

export default CheckboxComponent;
