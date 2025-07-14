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
