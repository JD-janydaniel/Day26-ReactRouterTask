function CareerCard({ carrerdetail }) {
  return (
    <div className="col-lg-3 mt-4">
      <div className="col">
        <div
          className="card shadow-lg"
          style={{ width: "20rem", height: "475px" }}
        >
          <img
            src={carrerdetail.image}
            style={{ height: "200px" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">
              <i>{carrerdetail.coursesName}</i>
            </h4>

            <p className="card-text"> Available in: {carrerdetail.language}</p>
            <hr></hr>
            <p className="card-text">{carrerdetail.payment}</p>
            <p className="card-text">{carrerdetail.placement}</p>
            <p className="card-text">{carrerdetail.mentor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerCard;
