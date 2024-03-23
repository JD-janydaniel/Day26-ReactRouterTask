import CourseCard from "./CourseCard";

function FullStack({ courses }) {
  const allCourses = courses.slice(0, 12);
  return (
    <>
      <h1 style={{ color: "yellowgreen" }}>Full-Stack</h1>
      <div className="container mb-4">
        <div className="row">
          {allCourses.map((course) => {
            return <CourseCard key={course.id} course={course} />;
          })}
        </div>
      </div>
    </>
  );
}

export default FullStack;
