import Card from "./Card";
import React, { useState } from "react";

const Cards = (props) => {
  console.log(props.category);
  console.log(props.courses);

  const category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);

//   It Returns list of all courses received from the api Response

//   const getCourses = () => {
//       Object.values(props.courses).forEach((courseCategory) => {
//           courseCategory.forEach((course) => {
//               allCourse.push(course);
//           });
//       });
//       return allCourse;
//   };

  function getCourses() {
      let allCourses = [];
    if (category === "All") {
      Object.values(props.courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      allCourses= props.courses[category];
      return allCourses;
    }
  }

  //   console.log(allCourse);
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return (
          <Card
            course={course}
            key={props.courses.id}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
