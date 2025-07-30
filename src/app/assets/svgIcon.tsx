import { SvgInterface } from "../global/interface";

const getViewBox = (name: string) => {
  switch (name) {
    default:
      return "0 0 24 24";
  }
};

const getPath = (name: string, props: Partial<SvgInterface>) => {
  const { fill } = props;
  switch (name) {
    case "right-arrow":
      return (
        <>
          <path
            fill={fill}
            d="m5.853 3.146 5 5a.5.5 0 0 1 0 .708l-5 5A.5.5 0 0 1 5 13.5v-10a.5.5 0 0 1 .853-.354Z"
          />
        </>
      );
    case "eye-open":
      return (
        <>
          <path
            fill="#252623"
            d="M15.457 7.798c-.022-.05-.551-1.224-1.728-2.401C12.16 3.829 10.18 3 8 3s-4.16.829-5.729 2.397C1.094 6.574.562 7.75.543 7.797a.5.5 0 0 0 0 .407c.022.05.551 1.223 1.728 2.4C3.84 12.17 5.82 13 8 13s4.16-.829 5.729-2.396c1.177-1.177 1.706-2.35 1.728-2.4a.5.5 0 0 0 0-.407ZM8 10.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
          />
        </>
      );
    case "eye-slash":
      return (
        <>
          <path
            fill="#252623"
            d="M6.042 3.617a.25.25 0 0 1 .13-.413A8.125 8.125 0 0 1 8 3c2.18 0 4.16.829 5.729 2.397 1.177 1.177 1.706 2.351 1.728 2.4a.5.5 0 0 1 0 .407c-.022.05-.551 1.223-1.728 2.4a9.117 9.117 0 0 1-.55.504.25.25 0 0 1-.347-.022l-6.79-7.47Zm7.328 9.547a.5.5 0 1 1-.74.672l-1.38-1.515A7.95 7.95 0 0 1 8 13c-2.18 0-4.16-.829-5.729-2.396C1.094 9.427.562 8.254.543 8.204a.5.5 0 0 1 0-.407c.02-.047.551-1.223 1.728-2.4.47-.472.995-.887 1.563-1.236L2.63 2.836a.5.5 0 1 1 .74-.672l10 11Zm-4.093-3.016L5.984 6.523a2.5 2.5 0 0 0 3.293 3.625Z"
          />
        </>
      );
    default:
      return <path />;
  }
};

const SVGIcon = ({
  name,
  style,
  fill,
  viewBox,
  height,
  width,
  className,
  strokeWidth,
  bgfill,
  stroke,
  stopColor,
  iconprimary,
  onClick,
}: SvgInterface) => (
  <svg
    stroke={stroke}
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || `0 0 ${width} ${height}` || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    onClick={onClick}
  >
    {getPath(name, {
      fill,
      strokeWidth,
      bgfill,
      stroke,
      stopColor,
      iconprimary,
    })}
  </svg>
);

export default SVGIcon;
