export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some item to your list. 👜</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => !item.packed).length;
  const percentage = (numPacked / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        {percentage == 100 ? (
          "You have packed everything"
        ) : (
          <p>
            You have {numItems} times of your list. And you already packed{" "}
            {numPacked} ({percentage}%)
          </p>
        )}
      </em>
    </footer>
  );
}
