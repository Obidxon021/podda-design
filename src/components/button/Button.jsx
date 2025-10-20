import React from "react";

export default function Button({
    children,
    onClick,
    width="auto",
    height="auto",
    fontSize="auto",
    color="auto"
}) {
    const styles = {
        width,
        height,
        fontSize,
        background: "#7239CE",
        cursor: "pointer",
        color: "var(--headline-text-color)",
        borderRadius: "8px"
    };

    return (
        <button onClick={onClick} style={styles}>
            {children}
        </button>
    )
}