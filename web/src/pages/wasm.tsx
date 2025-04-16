import React, {useCallback, useEffect, useState} from "react";
import __wbg_init, {get_hex} from "@/pkg/rust_wasm";

const divStyle = {color: "white", padding: 20}
const textareaStyle = {width: "100%", height: 300, border: "1px solid #fff", padding: 20}

export default function WasmPage() {

    const [hex, setHex] = useState<string>("")

    useEffect(() => {

        async function func() {
            if (typeof window !== "undefined" && typeof document !== "undefined") {
                await __wbg_init().then(() => {
                    console.log("wasm load end")
                    setHex(get_hex("hello world"))
                })
            }
        }

        func()
    }, []);

    const handleChange = useCallback<React.ChangeEventHandler<HTMLTextAreaElement>>((e) => {
        setHex(get_hex(e.target.value))
    }, [])

    return <div style={divStyle}>
        原始字符串
        <br/>
        <br/>
        <textarea defaultValue={"hello world"} style={textareaStyle} placeholder={"输入文本"} onChange={handleChange}/>
        <br/>
        <br/>
        通过 wasm 调用 rust hex::encode
        <br/>
        <br/>
        <textarea readOnly style={textareaStyle} placeholder={"hex by rust wasm"} value={hex}/>
    </div>
}