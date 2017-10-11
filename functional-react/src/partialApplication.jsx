export const Button = ({size, color, text, ...props}) => {
  return (
    <button style={{
      padding: size ==='large' ? '32px' : '8px',
      fontSize: size ==='large' ? '24px' : '12px',
      backgroundColor: color
    }} {...props}>{text}</button>
  )
}

function getPropertyWithDefault(key, defaultValue, obj) {
  if (key in obj) {
    return obj[key];
  }
  return defaultValue;
}

getPropertyWithDefault('name', 'N/A', { name: 'Bobby', age: 19 })
getPropertyWithDefault('name', 'N/A', { name: 'Betty', age: 38 })
getPropertyWithDefault('name', 'N/A', { name: 'Julie', age: 49 })
getPropertyWithDefault('name', 'N/A', { name: 'Black', age: 123 })

function getName(obj) {
  return getPropertyWithDefault('name', 'N/A', obj);
}

getName({ name: 'Bobby', age: 19 })
getName({ name: 'Betty', age: 38 })
getName({ name: 'Julie', age: 49 })
getName({ name: 'Black', age: 123 })
