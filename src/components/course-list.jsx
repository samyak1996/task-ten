import courseData from "../data/courses.json";
const CourseList = () => {
  console.log(courseData);
  return (
    <>
      <div>
        {courseData.map((data, key) => {
          return (
            <div key={key}>
              {data.cid + "\t" + data.name + "\t" + data.instructor}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CourseList;
