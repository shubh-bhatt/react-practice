export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list 🚀</p>
    );

  const newItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((packedItems / newItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You got everything, ready to go ✈️"
          : `🎒 You have ${newItems} items on your list, and you already packed ${packedItems} (${percentagePacked}%)`}
      </em>
    </footer>
  );
}
