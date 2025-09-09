export function getTypeColor(type: string) {
  const colors: Record<string, string> = {
    grass: "bg-green-500",
    fire: "bg-red-500",
    water: "bg-blue-500",
    poison: "bg-purple-500",
    electric: "bg-yellow-400",
    default: "bg-gray-400",
  };
  return colors[type] || colors.default;
}

export function getTypeGradient(type: string) {
  const gradients: Record<string, string> = {
    grass: "bg-gradient-to-b from-transparent to-green-900",
    fire: "bg-gradient-to-b from-red-transparent to-red-900",
    water: "bg-gradient-to-b from-blue-transparent to-blue-900",
    poison: "bg-gradient-to-b from-purple-transparent to-purple-900",
    electric: "bg-gradient-to-b from-yellow-transparent to-yellow-600",
    default: "bg-gradient-to-b from-gray-transparent to-gray-900",
  };
  return gradients[type] || gradients.default;
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
