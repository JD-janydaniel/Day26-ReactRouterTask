function CourseCard({ course }) {
  return (
    <div className="col-lg-3 mt-4">
      <div
        className="card shadow-lg "
        style={{ width: "18rem", height: "375px" }}
      >
        <img
          src={course.image}
          style={{ height: "200px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{course.coursesName}</h5>
          <p className="card-text"> By: {course.tutorName}</p>
          <p className="card-text">{course.date}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
