const style = {
  background: '#fff',
  borderRadius: 8,
  padding: 16,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
}

export default function Card({ title, children }) {
  return (
    <section style={style}>
      {title && <h2 style={{ marginTop: 0, fontSize: 18 }}>{title}</h2>}
      {children}
    </section>
  )
}
