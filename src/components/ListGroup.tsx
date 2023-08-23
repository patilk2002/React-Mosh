// import { Fragment } from "react";
import { MouseEvent, useState } from "react";

interface Props {
  items: String[];
  heading: String;
  onSelectItem: (item: String) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //   items = [];
  //   let selectedindx = 0;
  const [selectedindx, setselectedindx] = useState(-1);

  //eventhandler
  const handleclick = (event: MouseEvent) => console.log(event);

  //   if (items.length == 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>Item not found</p>
  //       </>
  //     );

  function getmsg() {
    const msg = items.length === 0 ? <p>Item not found</p> : null;
  }

  return (
    // <Fragment>
    <>
      <h1>{heading}</h1>
      {/* {msg} */}
      {getmsg()}

      {/* {items.length === 0 ? <p>Item not found</p> : null} */}
      {/* {items.length === 0 && <p>Item not found</p>} */}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedindx === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item.toLowerCase()}
            // onClick={() => console.log(item, index)}
            // onClick={handleclick}
            onClick={() => {
              setselectedindx(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
    // </Fragment>
  );
}

export default ListGroup;
