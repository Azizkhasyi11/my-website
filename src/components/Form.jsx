import PropTypes from 'prop-types';

/**
 * Input component
 * 
 * @param {string} label - The label for the input
 * @param {string} type - The type of the input
 * @param {string} value - The value of the input
 * @param {function} onChange - The function to call when the input changes
 * @param {object} props - Additional props
 * @returns {JSX.Element} The input component
 */
function Input({ label, type, value, onChange, ...props }) {
  return (
    <label
      htmlFor={label}
      className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <input
        type={type}
        id={label}
        className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
        placeholder={label}
        value={value}
        onChange={onChange}
        {...props}
      />
      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
        {label}
      </span>
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  props: PropTypes.object,
};

export default Input;