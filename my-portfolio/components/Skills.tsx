export default function Skills() {
    const skills = [
      "HTML & CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js"
    ];
  
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }