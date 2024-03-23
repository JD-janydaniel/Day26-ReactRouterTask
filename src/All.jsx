import CourseCard from "./CourseCard";

function All({ courses }) {
  return (
    <>
      <h1 style={{ color: "black", textAlign: "center" }}>All Courses</h1>
      <div className="container mt-3 mb-4">
        <div className="row">
          {courses.map((course) => {
            return <CourseCard key={course.id} course={course} />;
          })}
        </div>
      </div>
    </>
  );
}

export default All;
