import Image from "next/image";
import type { ReactElement } from "react";
import style from "./logo.module.scss";

export default function Logo(): ReactElement {
    return (
        <div className={style.wrapper}>
            <Image
                className={style.logo}
                src="/scoheart.svg"
                alt="deno"
                width={40}
                height={40}
            ></Image>
            <h1>Heart ☘️ Sco</h1>
        </div >
    )
}