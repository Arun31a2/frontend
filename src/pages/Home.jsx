import React from "react";

const Home = () => {
  return (
    <div>
      {/* Banner Image */}
      <img src="ban.jpg" className="img-fluid w-100 pt-1" alt="Banner" />

      {/* Card Grid */}
      <div className="row row-cols-1 row-cols-md-2 g-4 m-2">
        {/* Card 1 */}
        <div className="col">
          <div className="card">
            <img src="biryanis.jpg " className= "img-fluid w-60 pt-1" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">Biryani</h5>
              <p className="card-text">
                 
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col">
          <div className="card">
            <img src= "Fruits.jpg" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">Fruits</h5>
              <p className="card-text">
                 
              </p>
            </div>
          </div>
        </div>
         {/* Card 3 */}
         <div className="col">
          <div className="card">
            <img src="Appetizers.jpg" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">Appetizers</h5>
              <p className="card-text">
                 
              </p>
            </div>
          </div>
        </div>
         {/* Card 4 */}
         <div className="col">
          <div className="card">
            <img src="Deserts.jpg" className="card-img-top" alt="Card 4" />
            <div className="card-body">
              <h5 className="card-title">Deserts</h5>
              <p className="card-text">
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;