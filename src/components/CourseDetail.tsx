"use client";  // This component is now a client component

import { useParams } from 'next/navigation';
import courses from '../data/courses.json';

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((course) => course.id === id);

  if (!course) {
    return <h1>Course not found</h1>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
}
