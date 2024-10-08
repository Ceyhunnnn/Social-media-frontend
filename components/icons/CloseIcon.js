export const CloseIcon = ({ color = "black", onClick = null, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25px"
    height="25px"
    viewBox="0 0 16 16"
    onClick={onClick}
    className={className}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94L4.28 3.22Z"
      clipRule="evenodd"
    ></path>
  </svg>
);
