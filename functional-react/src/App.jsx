import { Card, CardBody, CardFooter, CardHeader } from './composition'
import { RecursiveComponent } from './RecursiveComponent'

const nestedObject = {
	a: 1,
	b: {
		b1: 4,
		b2: {
			b23: 'Hello',
		},
		b3: {
			b31: {
				message: 'Hi',
			},
			b32: {
				message: 'Hi',
			}
		}
	},
	c: {
		c1: 2,
		c2: 3,
	}
}

const App = () => {
  return <>
  <Card>
    <CardHeader title="Card Title" />
    <CardBody>
      This is the body of the card.
    </CardBody>
    <CardFooter>
      This is the footer of the card.
    </CardFooter>
  </Card>
  <RecursiveComponent data={nestedObject} /></>
}

export default App;
