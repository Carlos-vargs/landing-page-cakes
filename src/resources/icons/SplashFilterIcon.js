export default function SplashFilterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      style={{ position: "absolute" }}
    >
      <defs>
        <filter id="splash">
          <feGaussianBlur
            in="SourceGraphic"
            result="blur"
            stdDeviation="10"
          ></feGaussianBlur>
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
            result="splash"
          ></feColorMatrix>
          <feBlend in2="splash" in="SourceGraphic" result="mix"></feBlend>
        </filter>
      </defs>
    </svg>
  );
}
