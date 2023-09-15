import studentData from "../data/students.json";

const StudentList = () => {
  return (
    <>
      <div>
        {studentData.map((data, key) => {
          return (
            <div>
              {data.sid +
                " \t" +
                data.name +
                "\t" +
                data.age +
                "\t" +
                data.courses}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StudentList;
