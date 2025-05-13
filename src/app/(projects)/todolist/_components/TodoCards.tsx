const TodoCards = ({
  item,
  removeItem,
  index,
}: Readonly<{
  item: string;
  index: number;
  removeItem: (index: number) => void;
}>) => {
  return (
    <div className="border-2 px-4 rounded-full py-2 mb-2 flex justify-between">
      <span>{item}</span>
      <span onClick={() => removeItem(index)} className="underline">
        Remove
      </span>
    </div>
  );
};

export default TodoCards;
