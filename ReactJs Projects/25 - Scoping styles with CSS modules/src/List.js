import Item from "./components/Item";
import { data } from "./data";
import listCSS from './list.module.css'
export default function List() {
  return (
    <>
      <h3 className={listCSS.title}>Items Listed for Sale</h3>
      <div className={listCSS.container}>
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
