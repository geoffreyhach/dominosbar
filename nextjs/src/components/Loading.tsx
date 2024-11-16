export default function Loading(): JSX.Element {
  return (
    <div className="flex justify-center items-center">
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin "
      >
        <path
          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.8273 3 17.35 4.30367 19 6.34267"
          stroke="#FBF9C9"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
