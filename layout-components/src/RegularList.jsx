const RegularList = ({items, resourceName, itemComponent: ItemComponent}) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <ItemComponent {...{[resourceName]: item}} />
        </li>
      ))}
    </ul>
  );
}

export default RegularList;
