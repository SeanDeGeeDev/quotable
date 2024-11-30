import './Button.scss';

const Button = ({ label }: { label: string }) => {
  return <button className="button">{label}</button>;
};

export default Button;
