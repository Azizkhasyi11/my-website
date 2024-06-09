import PropTypes from "prop-types";

function Button({
  children,
  as: Component = "button",
  onClick = () => {},
  ...props
}) {
  return (
    <Component
      className="bg-white text-black px-4 py-2 rounded-md transition-colors duration-500"
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.elementType,
  onClick: PropTypes.func,
};

export default Button;
