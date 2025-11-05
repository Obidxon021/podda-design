import React from "react";

export default function Button({
    children,
    onClick,
    width="auto",
    height="auto",
    fontSize="auto",
    border,
    background="#7239CE",
    color="#fff",
    fontWeight
}) {
    const styles = {
        width,
        height,
        fontSize,
        background,
        cursor: "pointer",
        color,
        borderRadius: "8px",
        border,
        fontWeight
    };

    return (
        <button onClick={onClick} style={styles}>
            {children}
        </button>
    )
}