import CourseList from "./components/course-list";
import StudentList from "./components/student-list";

function App() {
  return (
    <>
      <header> Welcome to the University</header>
      <main>
        <section>
          Please select your Course
          <div>
            <CourseList />
          </div>
        </section>
        Please select your name
        <div>
          <StudentList />
        </div>
      </main>
    </>
  );
}

export default App;
