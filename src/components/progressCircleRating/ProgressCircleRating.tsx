import React from "react";

interface CircleProps {
  colour: string;
  rating: number;
}

const Circle: React.FC<CircleProps> = ({ colour, rating }) => {
  const r = 26; // радиус
  const circ = 2 * Math.PI * r;
  const strokePct = ((10 - rating) * circ) / 10;

  return (
    <circle
      r={r}
      cx={26}
      cy={26}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""}
      strokeWidth={5}
      strokeDasharray={circ}
      strokeDashoffset={rating ? strokePct : 0}
    ></circle>
  );
};

interface TextProps {
  rating: number;
}

const Text: React.FC<TextProps> = ({ rating }) => {
  return (
    <text
      x="46%"
      y="48%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize="15px"
      fontWeight="700"
      fill="#fff"
    >
      {rating.toFixed(1)}
    </text>
  );
};

interface PieProps {
  rating: number;
  colour: string;
}

const Pie: React.FC<PieProps> = ({ rating, colour }) => {
  const cleanedRating = Math.min(Math.max(rating, 0), 10);

  return (
    <svg width={60} height={60}>
      <g transform={`rotate(-90 ${"28 26.4"})`}>
        <Circle colour="lightgrey" rating={cleanedRating} />
        <Circle colour={colour} rating={cleanedRating} />
      </g>
      <Text rating={cleanedRating} />
    </svg>
  );
};

interface ProgressCircleRatingProps {
  rating?: number;
}

const ProgressCircleRating: React.FC<ProgressCircleRatingProps> = ({
  rating = 0,
}) => {
  return <Pie rating={rating} colour="#4bcb36" />;
};

export default ProgressCircleRating;
