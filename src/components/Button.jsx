const styles = {
	base: {
		padding: "8px 16px",
		border: "none",
		borderRadius: 6,
		cursor: "pointer",
		fontSize: 14,
	},
	primary: { background: "#2563eb", color: "#fff" },
	secondary: { background: "#e5e7eb", color: "#222" },
};

export default function Button({ variant = "primary", children, ...props }) {
	return (
		<button style={{ ...styles.base, ...styles[variant] }} {...props}>
			{children}
		</button>
	);
}
