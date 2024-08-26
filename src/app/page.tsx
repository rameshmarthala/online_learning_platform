import Link from 'next/link';
import courses from '../data/courses.json';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to the Online Learning Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <Link href={`/courses/${course.id}`}>
                <p className="text-blue-500 hover:underline">View Course</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
