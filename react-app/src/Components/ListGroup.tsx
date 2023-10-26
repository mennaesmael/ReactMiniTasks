import { useState } from "react";
interface props{
 items: string [];
 heading: string;
 onSelectItem: (item:string)=> void;
}
function ListGroup({items,heading , onSelectItem}:props) {
 
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 && <p>NO ITEMS</p>}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
