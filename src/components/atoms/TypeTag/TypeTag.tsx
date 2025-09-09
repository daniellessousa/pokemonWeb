import { TypeTagProps } from "./interface";

export function TypeTag({ label, color }: TypeTagProps) {
  return (
    <span
      className={`px-2 py-1 text-xs font-bold text-white rounded-md ${color}`}
    >
      {label}
    </span>
  );
}
