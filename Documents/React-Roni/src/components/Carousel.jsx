import React from 'react'


const Carousel = () => {
  return (
 
      //  Komponen carousel dari Bootstrap
    <div id="carouselExampleControls" className="carousel slide mt-5" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./OIP(1).jpg" className="d-block w-50 mx-auto p-3 bg-info" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="./OIP(2).jpg" className="d-block w-50 mx-auto p-3 bg-info" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="./OIP.jpg" className="d-block w-50 mx-auto p-3 bg-info" alt="..."/>
        </div>
      </div>
      
      {/* Tombol next dan prev untuk carousel */}
      <button className="carousel-control-prev bg-dark" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden ">Previous</span>
      </button>
      <button className="carousel-control-next bg-dark" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
  </div>
  )
}

export default Carousel