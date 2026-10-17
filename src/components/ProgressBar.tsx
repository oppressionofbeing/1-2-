interface ProgressBarProps {
  value: number;
}

function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="progress" role="progressbar"
         aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <div className="progress__fill" style={{ width: `${value}%` }} />
    </div>
  );
}

export default ProgressBar;