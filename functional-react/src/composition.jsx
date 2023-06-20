import './composition.css'

const reverseString = str => str.split('').reverse().join('');

const capitalizesString = str => str.charAt(0).toUpperCase() + str.slice(1);

const repeatString = (str, times) => str * times;

const name = 'Black'

repeatString(reverseString(capitalizesString(name)), 3)

export const Card = ({children}) => {
  return <div className="card">{children}</div>
}

export const CardHeader = ({title}) => {
  return <div className="card-header">{title}</div>
}

export const CardBody = ({children}) => {
  return <div className="card-body">{children}</div>
}

export const CardFooter = ({children}) => {
  return <div className="card-footer">{children}</div>
}
