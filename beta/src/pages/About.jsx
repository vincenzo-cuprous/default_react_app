// src/pages/About.jsx
function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            Hi! I'm a passionate web developer with experience in building modern web applications.
            I specialize in React, JavaScript, and related technologies.
          </p>
          <p className="text-lg mb-4">
            My journey in web development started several years ago, and I've been
            continuously learning and improving my skills since then.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Experience</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-4 rounded">
              <h3 className="text-xl font-medium">Senior Web Developer</h3>
              <p className="text-gray-600">Company Name (2020 - Present)</p>
              <p className="mt-2">
                Lead development of various web applications using React and modern JavaScript.
              </p>
            </li>
            <li className="bg-gray-50 p-4 rounded">
              <h3 className="text-xl font-medium">Web Developer</h3>
              <p className="text-gray-600">Previous Company (2018 - 2020)</p>
              <p className="mt-2">
                Worked on frontend development using React and backend development using Node.js.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
