import classNames from "classnames";
import { View, ViewProps } from "react-native";

export interface ProgressBarProps extends ViewProps {
  progress: number;
  className?: string;
}

export function ProgressBar({
  progress,
  className,
  ...props
}: ProgressBarProps) {
  const progressPercentage = `${progress * 100}%`;
  return (
    <View
      className={classNames(
        "w-full h-1 bg-gray-300 rounded overflow-hidden",
        className
      )}
      {...props}
    >
      <View
        className="h-full bg-orange-500 rounded"
        style={{ width: progressPercentage }}
      />
    </View>
  );
}
