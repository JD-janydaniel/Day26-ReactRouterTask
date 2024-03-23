import CareerCard from "./CareerCard";
function Career({ careerCourse }) {
  return (
    <>
      <h1 style={{ color: "black" ,textAlign: "center"}}>Career</h1>
      <div className="container mt-3 mb-4">
        <div className="row">
          {careerCourse.map((carrerdetail) => {
            return (
              <CareerCard key={carrerdetail.id} carrerdetail={carrerdetail} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Career;
