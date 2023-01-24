import { ImageBanner } from "./ImageBanner"

export const Layout = () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-center bg-red-100 font-bold">
                Hello
            </h2>
            <div className="columns-3 my-2">
                <ImageBanner/>
                <ImageBanner/>
                <ImageBanner/>
            </div>
        </div>
    )
}