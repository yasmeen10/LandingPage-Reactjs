export default function ArrowRightCircle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor" // Set stroke to currentColor
      className="size-14 text-white" // Set text-white here so currentColor is white
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        className="fill-mainColor"
        strokeWidth={0} // Remove stroke from the circle
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
        strokeWidth={0.5}
        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
