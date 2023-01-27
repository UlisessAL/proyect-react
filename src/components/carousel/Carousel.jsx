import novedadSemana from "./imgs-carousel/novedad-semana.png"
import novedadSemana2 from "./imgs-carousel/novedad-semana-2.png"
import CarImgs from "./CarImgs/CarImgs"


const Carousel = () => {

    return (
            <>
                <div className = "cont-carousel">
                    <div className="carousel w-full">
                        <CarImgs slide="slide1" novedadSemana={novedadSemana} refe="#slide2"/>
                        <CarImgs slide="slide2" novedadSemana={novedadSemana2} refe="#slide1"/>
                    </div>
                </div>
            </>
    )
}
export default Carousel