import { StatItemProps } from "./interface";

export function StatItem({ icon, value, label }: StatItemProps) {
  return (
    <div className="flex items-center gap-1 text-white">
      {icon}
      <div className="text-sm">
        <div className="font-semibold">{value}</div>
        <div className="text-xs">{label}</div>
      </div>
    </div>
  );
}
