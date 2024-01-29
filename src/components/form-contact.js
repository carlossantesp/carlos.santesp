"use client";
import {useRef, useState} from "react";
import {IconCopy} from "./icons";
import Alert from "./alert";

export default function FormContact({value}) {
    const inputRef = useRef(null);
    const [show, setShow] = useState(false);
    const copyEmail = () => {
        inputRef.current.select();
        try {
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 2000);
        } catch (err) {
            console.error("Error al copiar al portapapeles:", err);
        }
    };
    return (
        <>
            <div className="mt-8 flex max-w-lg mx-auto">
                <input
                    className="w-full rounded-l-lg px-8 py-4 bg-slate-800 text-gray-400 text-xl"
                    type="text"
                    readOnly
                    value={value}
                    ref={inputRef}
                />
                <button onClick={copyEmail} className="bg-slate-950 px-6 py-4 rounded-r-lg">
                    <IconCopy />
                </button>
            </div>
            {show && (
                <Alert
                    title="Email Copied"
                    message="The email address has been successfully copied. Feel free to paste it wherever needed."
                />
            )}
        </>
    );
}
