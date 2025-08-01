import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [selected, setSelected] = useState("book");

  // Conditional Rendering Options
  const renderContent = () => {
    switch (selected) {
      case "book":
        return <BookDetails />; // Using Switch
      case "blog":
        return <BlogDetails />;
      case "course":
        return <CourseDetails />;
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧠 Blogger App</h1>

      {/* Buttons to switch content */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setSelected("book")}>Show Book</button>
        <button onClick={() => setSelected("blog")}>Show Blog</button>
        <button onClick={() => setSelected("course")}>Show Course</button>
      </div>

      <hr />

      {/* 1. Using Ternary Operator */}
      {selected === "book" ? <BookDetails /> : null}

      {/* 2. Using && Operator */}
      {selected === "blog" && <BlogDetails />}

      {/* 3. Using If-Else inside a function */}
      {/* renderContent() returns the correct component */}
      {selected === "course" && renderContent()}

      {/* 4. Using switch-case inside renderContent function */}
      {/* Already demonstrated above in renderContent() */}
    </div>
  );
}

export default App;
