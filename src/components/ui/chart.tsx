import { ChartTooltipProps } from "recharts/types/component/Tooltip";

export interface ChartConfig {
  [key: string]: {
    label: string;
    color?: string;
  }
}

export interface ChartContainerProps {
  children: React.ReactNode;
  config: ChartConfig;
  className?: string;
}

export function ChartContainer({
  children,
  config,
  className,
}: ChartContainerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function ChartTooltip({
  children,
  ...props
}: ChartTooltipProps<any, any>) {
  return (
    <div className="rounded-lg border bg-white p-2 shadow-sm">
      {children}
    </div>
  );
}
