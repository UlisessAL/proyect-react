const CarImgs = (props) => {
    return (
        <>
            <div id={props.slide} className="carousel-item relative w-full">
                <img src={props.novedadSemana} className="w-full img-semana" alt={props.novedadSemana}/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={props.refe} className="btn btn-circle">❮</a> 
                    <a href={props.refe} className="btn btn-circle">❯</a>
                </div>
            </div> 
        </>
    )
}
export default CarImgs