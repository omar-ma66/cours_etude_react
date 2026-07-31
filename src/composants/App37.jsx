import { useState } from 'react';

const initialItems = [
  { title: 'bretzels', id: 0 },
  { title: 'algues croustillantes', id: 1 },
  { title: 'paquet de princes', id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(
    items[0]
  );

  function handleItemChange(id, e) {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  return (
    <>
      <h2>Quel est votre goûter de voyage ?</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={e => {
                handleItemChange(item.id, e)
              }}
            />
            {' '}
            <button onClick={() => {
              setSelectedItem(item);
            }}>Choisissez</button>
          </li>
        ))}
      </ul>
      <p>Vous avez choisi {selectedItem.title}.</p>
    </>
  );
}
