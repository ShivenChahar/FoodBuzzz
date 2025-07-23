import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function Home() {

  const [search, setSearch] = useState('');
  const [categoryData, setCategoryData] = useState([]);
  const [foodData, setFoodData] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST", headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json()

    setFoodData(response[0] || []);
    setCategoryData(response[1] || []);
    //console.log(response[0], response[1])
  }
  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <div> <Navbar /> </div>
      <div><div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}>
        <div className="carousel-inner" id='carousel'>
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
              {/*<button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>*/}
            </div>
          </div>
          <div className="carousel-item active">
            <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=1
" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="burger" />
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=1
" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="pizza" />
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=1
" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="pasta" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
        </div>
        <div className='container'>
          {
            categoryData.length > 0
              ? categoryData.map((data) => {
                return (
                  <div className="row mb-3"
                  key={data._id}> 
                  <div className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodData.length > 0 ? foodData.filter((item) => item.CategoryName === data.CategoryName && 
                  item.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((filterItems) => (
                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                          <Card foodName={filterItems.name}
                            options={filterItems.options[0]}
                            imgSrc={filterItems.img} />
                        </div>
                      )) : <div> No Such Data Found </div>
                  }
                </div>
                )
              })
              : "Loading..."
          }
        </div>
        <div> <Footer /> </div>
      </div>
    );
}
