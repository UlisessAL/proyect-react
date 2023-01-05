import novedadSemana from "./imgs-carousel/novedad-semana.png"
import novedadSemana2 from "./imgs-carousel/novedad-semana-2.png"
import "../../css/Carousel.css"


const Carousel = () => {

    return (
    <>
        <div className = "cont-carousel">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={novedadSemana} className="w-full img-semana" alt={novedadSemana}/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={novedadSemana2} alt={novedadSemana2} className="w-full img-semana" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> 
            </div>
        </div>
    </>
    )
}
export default Carousel