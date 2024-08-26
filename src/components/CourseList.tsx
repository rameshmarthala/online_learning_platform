import Link from 'next/link';
import courses from '../data/courses.json';

export default function CourseList() {
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>
          <Link href={`/courses/${course.id}`}>
            {course.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
