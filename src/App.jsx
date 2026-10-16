import { useState } from 'react'
import { Button, Card, Input } from './components'

export default function App() {
  const [name, setName] = useState('')
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Stacked PRs Demo</h1>

      <Card title="Counter">
        <p>Count: {count}</p>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>{' '}
        <Button variant="secondary" onClick={() => setCount(0)}>
          Reset
        </Button>
      </Card>

      <Card title="Greeting">
        <Input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Hello, {name || 'stranger'}!</p>
      </Card>
    </main>
  )
}
