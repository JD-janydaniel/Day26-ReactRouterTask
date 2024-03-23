import CourseCard from "./CourseCard";

function CyberSecurity({ courses }) {
  const allCourses = courses.slice(24, 34);
  return (
    <>
      <h1 style={{ color: "black",textAlign: "center" }}>CyberSecurity</h1>
      <div className="container mt-3 mb-4">
        <div className="row">
          {allCourses.map((course) => {
            return <CourseCard key={course.id} course={course} />;
          })}
        </div>
      </div>
    </>
  );
}

export default CyberSecurity;
