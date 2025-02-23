// src/pages/Home.jsx
function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-medium">Project 1</h3>
              <p className="text-gray-600">Description of project 1</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-medium">Project 2</h3>
              <p className="text-gray-600">Description of project 2</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>React</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>JavaScript</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Node.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
