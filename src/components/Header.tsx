
export const Header = () => {
    return (
        <div className="text-center h-[80vh] flex flex-col gap-2 justify-center items-center">
            <h1
                className="font-bold text-4xl px-4 lg:text-8xl  md:text-6xl text-primary outline outline-primary  shadow-black drop-shadow-lg"
                data-aos="fade-left"
            >
                LIVE YOUR STYLE
            </h1>
            <h2
                className="text-xl my-2 lg:text-4xl md:text-4xl tracking-normal drop-shadow-lg text-grey"
                data-aos="flip-up"
            >
                <i>...endless wardrobe glamour</i>
            </h2>
            <p data-aos="slide-up">
                Exquisite Clothing | Shirts | Shoes | Jackets | Pants | Pantofle
                | Jewelries | Fashion Accessories & lots more.
            </p>
            <button data-aos="zoom-up" className="btn-primary w-max mt-10">
                SHOP NOW!
            </button>
        </div>
    )
}
