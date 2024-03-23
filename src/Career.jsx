import CareerCard from "./CareerCard";
function Career({ careerCourse }) {
  return (
    <>
      <h1 style={{ color: "yellowgreen" }}>Career</h1>
      <div className="container mb-4">
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
