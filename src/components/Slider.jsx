import slider1 from "../assets/images/slider1.webp";
import slider2 from "../assets/images/slider2.webp";
const Slider=()=>{
    return(
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={slider1} class="d-block w-100" alt="slider1"/>
    </div>
    <div class="carousel-item">
    <img src={slider2} class="d-block w-100" alt="slider2"/>
    </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
    </button>
    </div>
    );
}
export default Slider; 