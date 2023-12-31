import { ReactNode } from "react"

type Props = {
    title: string,
    children: ReactNode
}

export default function FormContainerSearch({ title, children }: Props) {
    return (
        <section className="flex flex-col mx-5 bg-lime-300 w-80">
            <h3 className="flex font-principal rounded-t-lg justify-center mr-0 bg-yellow text-white w-20">
                {title}
            </h3>
            {children}
        </section>
    )
}