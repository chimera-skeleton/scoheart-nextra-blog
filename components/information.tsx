import type { ReactElement } from "react";
import style from "./information.module.scss"

const techStack = ["javascript", "nodejs", "typescript", "react", "vue", "svelte", "astro", "nextjs"]

export default function Information(): ReactElement {
    return (
        <div className={style.wrapper}>
            <section className={style.information}>
                <div className={style.leftWrapper}>
                    <img src="/scoheart.jpg" alt="kkk" />
                </div>
                <div className={style.rightWrapper}>
                    <h1 className="name">Heart Sco</h1>
                    <h2 className="career">Front-End Developer</h2>
                    <p className="intro">Hi, here ! I'm Scoheart, a student studying at the JS University. In my free time, I
                        like to
                        explore unknown domain, such as JavaScript on the Front-End, Java on the Back-End.</p>
                </div>
            </section>
            <section className={style.saying}>
                <h2>Running in the Dark</h2>
                <p className={style.zh}>何来人间惊鸿客，不过尘世一俗人。</p>
                <p className={style.en}>" There is no time for what was left behind, it is a maiden voyage after all. All the pretty
                    sinners, All the medal winners. Overachievers aiming for their prize, I can feel it coming. "</p>
                <p className={style.conclusion}>I could be dreaming but I feel so wide awake.</p>
            </section>
            <section>
                <h2 className={style.techStack}>Technology stack</h2>
                <ul className={style.techWrapper}>
                    {techStack.map(tech => (
                        <li>
                            <span >
                                <img src={`/techstack/${tech}.svg`} alt="" />
                            </span>
                            <p >{tech}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}