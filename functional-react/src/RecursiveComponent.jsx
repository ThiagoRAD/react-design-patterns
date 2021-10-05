export const RecursiveComponent = ({ data }) => {

  if(typeof data !== 'object') {
    return <li>{data}</li>
  }

  const entries = Object.entries(data);
  return entries.map(([key, value]) => (
    <li>
      {key}:
      <ul>
        <RecursiveComponent data={value} />
      </ul>
    </li>
  ));
}

