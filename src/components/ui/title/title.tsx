import { titleFont } from "@/config/font"

interface Props{
    title: string,
    // ! EL subtitle es opcional
    subtitle?: string,
    clasName?: string
}
export const Title = ( { title, subtitle, clasName } : Props ) => {
    return(
        <div className={`mt-3 ${clasName}`}>
            <h1 className={`${titleFont.className} antialiased text-4xl font-semibold my-10`}>{title}</h1>
            {
                subtitle&&(
                    <h3 className="text-xl mb-5">{subtitle}</h3>
                )
            }
            {/* <div className="hidden md:block my-10">
                <h1 className={`${titleFont.className} antialiased text-4xl font-semibold`}>{title}</h1>
            </div>
            <div className="block md:hidden m-10">
                <h1 className={`${titleFont.className} antialiased text-4xl font-semibold`}>{title}</h1>
            </div>
            {
                subtitle&&(
                    <div>
                        <div className="hidden md:block mb-5">
                            <h3 className="text-xl">{subtitle}</h3>
                        </div>
                        <div className="block md:hidden m-10">
                            <h3 className="text-xl">{subtitle}</h3>
                        </div>
                    </div>
                )
            } */}
        </div>
    )
}