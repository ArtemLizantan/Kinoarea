import React from "react";

interface CircleProps {
  color: string;
  progress: number;
}

const Circle: React.FC<CircleProps> = ({ color, progress }) => {
  const r = 26; // Радиус круга
  const circ = 2 * Math.PI * r;
  const strokePct = circ - (progress / 10) * circ; // Корректный расчёт

  return (
    <circle
      r={r}
      cx={30}
      cy={30}
      fill="transparent"
      stroke={color}
      strokeWidth={5}
      strokeDasharray={circ}
      strokeDashoffset={strokePct}
      strokeLinecap="round"
    />
  );
};

interface TextProps {
  rating: number;
}

const Text: React.FC<TextProps> = ({ rating }) => (
  <text
    x="50%"
    y="50%"
    dominantBaseline="middle"
    textAnchor="middle"
    fontSize="14px"
    fontWeight="bold"
    fill="#fff"
  >
    {rating}
  </text>
);

interface PieProps {
  rating: number;
}

const Pie: React.FC<PieProps> = ({ rating }) => {
  const clampedRating = Math.min(Math.max(rating, 0), 10); // Ограничение от 0 до 10

  const getColor = (value: number) => {
    if (value >= 7) return "#4bcb36";
    if (value >= 4) return "#ffbf00";
    return "#ff3b30";
  };

  return (
    <svg width={60} height={60}>
      <g transform="rotate(-90 30 30)">
        <Circle color="lightgrey" progress={10} />
        <Circle color={getColor(clampedRating)} progress={clampedRating} />
      </g>
      <Text rating={clampedRating} />
    </svg>
  );
};

interface ProgressCircleRatingProps {
  rating?: number;
}

const ProgressCircleRating: React.FC<ProgressCircleRatingProps> = ({
  rating = 0,
}) => <Pie rating={rating} />;

export default ProgressCircleRating;
