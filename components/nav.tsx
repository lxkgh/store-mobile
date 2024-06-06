import clsx from "clsx"
import Link from "next/link"

type NavProps = {
    title: string
    url: string
    active: boolean
    className?: string
    activeClassName?: string
}

const Nav = (props: NavProps) =>  {
    const { title, url, className, activeClassName , active } = props
    return (
        <div className={clsx(className, active && activeClassName)}>
            <Link href={url}>
                {title}
            </Link>
        </div>
    )
}
export default Nav