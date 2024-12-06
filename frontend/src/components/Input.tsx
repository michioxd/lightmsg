import clsx from "clsx";
import React from "preact/compat";

export default function Input(props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    return (
        <input
            className={clsx("user-input", props.className)}
            {...props}
        />
    )
}