import CourseCard from "./CourseCard";

function DataScience({ courses }) {
  const allCourses = courses.slice(12, 24);
  return (
    <>
      <h1 style={{ color: "black" ,textAlign: "center"}}>DataScience</h1>
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

export default DataScience;
