export const Button = ({ hoveredProductId, product, text }) => {
  const isProductHovered = hoveredProductId === product?.id;

  return (
    <button
      className={`px-2 py-1 rounded-lg border border-gray-300 max-w-48  ${
        isProductHovered ? "bg-yellow-500" : "bg-yellow-400"
      }`}
    >
      {text}
    </button>
  );
};
