const TodoCards = ({
  item,
  removeItem,
  index,
}: Readonly<{
  item: string;
  index: number;
  removeItem: (index: number) => void;
}>) => {
  return <div onClick={() => removeItem(index)}>Cards: {item}</div>;
};

export default TodoCards;
