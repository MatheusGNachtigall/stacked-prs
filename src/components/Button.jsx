export default function Button({ variant = "primary", children, ...props }) {
	return <button {...props}>{children}</button>;
}
