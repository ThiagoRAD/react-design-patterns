const RegularList = ({items, resourceName, itemComponent: ItemComponent}) => {
  return (
    <ul>
      {items.map(item => (
        <li key={`${resourceName}-${item.name}`}>
          <ItemComponent {...{[resourceName]: item}} />
        </li>
      ))}
    </ul>
  );
}

export default RegularList;
