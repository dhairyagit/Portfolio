"use client";

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* NAVBAR */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-2 font-semibold text-lg">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">
              DM
            </div>
            Dhairya Mehta
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#experience" className="hover:opacity-70">Experience</a>
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#education" className="hover:opacity-70">Education</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#certifications" className="hover:opacity-70">Certifications</a>
            <a href="#profiles" className="hover:opacity-70">Profiles</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">

        {/* HERO */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold">Hello, I'm Dhairya Mehta</h1>

          <p className="max-w-2xl mx-auto text-gray-600">
            Computer Engineering graduate currently pursuing B.Tech in Computer
            Science Engineering at Charusat University. Passionate about
            Machine Learning, Artificial Intelligence, backend development and
            building intelligent systems.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/Mehta Dhairya Resume.pdf"
              download
              className="bg-black text-white px-6 py-2 rounded-xl text-sm hover:scale-105 transition"
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="space-y-4">
          <h2 className="text-2xl font-semibold">About</h2>

          <p className="text-gray-700 leading-relaxed">
            I recently completed my Diploma in Computer Engineering and I am currently pursuing a B.Tech in Computer Science Engineering at Charotar University of Science and Technology (CHARUSAT). Throughout my academic journey, I developed a strong interest in Machine Learning and Artificial Intelligence. I enjoy building intelligent systems and working on real-world problems using data and algorithms. Along with ML, I also have a solid foundation in programming and backend development, and I continuously work on projects that strengthen both my technical knowledge and practical development skills.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="space-y-8">
          <h2 className="text-2xl font-semibold">Experience</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 border rounded-xl bg-white hover:shadow-lg transition">
              <h3 className="font-semibold">Python for Data Science Intern</h3>
              <p className="text-sm text-gray-600 mb-2">Praxware Technology</p>
              <p className="text-sm text-gray-600">
                Worked on Python based data science tasks including data
                preprocessing, data analysis and visualization techniques.
                Gained practical experience in handling datasets and
                understanding machine learning workflows.
              </p>
            </div>

            <div className="p-6 border rounded-xl bg-white hover:shadow-lg transition">
              <h3 className="font-semibold">Machine Learning Intern</h3>
              <p className="text-sm text-gray-600 mb-2">Way to Web Pvt. Ltd.</p>
              <p className="text-sm text-gray-600">
                Explored machine learning concepts in depth and developed a
                working Airline Price Prediction System using real-world
                datasets and ML algorithms.
              </p>
            </div>

          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="space-y-8">
          <h2 className="text-2xl font-semibold">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 border rounded-xl bg-white hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Airline Price Prediction System</h3>
              <p className="text-sm text-gray-600">
                Machine learning model that predicts airline ticket prices using
                travel history, airline data and regression algorithms.
              </p>
            </div>

            <div className="p-6 border rounded-xl bg-white hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Stock Price Prediction System</h3>
              <p className="text-sm text-gray-600">
                Data analysis and prediction system using historical stock
                market data to forecast future price movements.
              </p>
            </div>

            <div className="p-6 border rounded-xl bg-white hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Maze Solver using AI Algorithms</h3>
              <p className="text-sm text-gray-600">
                Artificial intelligence based maze solving program using
                intelligent search algorithms.
              </p>
            </div>

            <div className="p-6 border rounded-xl bg-white hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Fake News Prediction System</h3>
              <p className="text-sm text-gray-600">
                Machine learning model using Natural Language Processing to
                detect fake news articles.
              </p>
            </div>

          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="space-y-8">
          <h2 className="text-2xl font-semibold">Education</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 border rounded-xl bg-white">
              <h3 className="font-semibold">B.Tech Computer Science Engineering</h3>
              <p className="text-sm text-gray-600">
                Charotar University of Science and Technology (CHARUSAT)
              </p>
            </div>

            <div className="p-6 border rounded-xl bg-white">
              <h3 className="font-semibold">Diploma in Computer Engineering</h3>
              <p className="text-sm text-gray-600">
                Completed Diploma in Computer Engineering
              </p>
            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="space-y-8">
          <h2 className="text-2xl font-semibold">Technical Skills</h2>

          <div className="grid md:grid-cols-3 gap-6">

            {["Java","Python","PHP","SQL","MySQL","Django","HTML","CSS","JavaScript","C","C++"].map((skill)=> (

              <div key={skill} className="p-6 border rounded-xl bg-white text-center font-medium hover:shadow-lg transition">
                {skill}
              </div>

            ))}

          </div>

          <h3 className="text-xl font-semibold pt-6">Core Subjects</h3>

          <div className="grid md:grid-cols-3 gap-6">

            {["Machine Learning","Artificial Intelligence","Data Structures","Operating Systems","Computer Networks","DBMS"].map((s)=> (

              <div key={s} className="p-6 border rounded-xl bg-white text-center hover:shadow-lg transition">
                {s}
              </div>

            ))}

          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="space-y-8">
          <h2 className="text-2xl font-semibold">Certifications</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 border rounded-xl bg-white">
              <h3 className="font-semibold">Google Cloud Data Analytics Certificate</h3>
              <p className="text-sm text-gray-600">Issued by Google. Focuses on data analytics, data processing, visualization and analytical workflows using cloud based tools.</p>
            </div>

            <div className="p-6 border rounded-xl bg-white">
              <h3 className="font-semibold">IBM Machine Learning Professional Certificate</h3>
              <p className="text-sm text-gray-600">Coursera certification covering machine learning concepts, model building, evaluation and practical ML applications.</p>
            </div>

            <div className="p-6 border rounded-xl bg-white">
              <h3 className="font-semibold">Data Analysis with Python</h3>
              <p className="text-sm text-gray-600">Issued by Cognitive Class (IBM). Covers Python libraries for data analysis including NumPy, Pandas and visualization techniques.</p>
            </div>

            <div className="p-6 border rounded-xl bg-white">
              <h3 className="font-semibold">Python for Data Science & AI</h3>
              <p className="text-sm text-gray-600">Coursera certification focusing on Python programming for data science, machine learning workflows and AI applications.</p>
            </div>

            <div className="p-6 border rounded-xl bg-white">
              <h3 className="font-semibold">Data Structures & Algorithms</h3>
              <p className="text-sm text-gray-600">Coursera certification covering core algorithmic concepts, problem solving techniques and efficient data structures.</p>
            </div>

          </div>
        </section>

        {/* PROFILES */}
        <section id="profiles" className="space-y-8">
          <h2 className="text-2xl font-semibold">Profiles</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <a href="https://www.linkedin.com/in/dhairya-mehta-6b505a2b2/" className="p-6 border rounded-xl bg-white hover:shadow-lg transition text-center space-y-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" className="w-8 mx-auto" />
              <div className="font-medium">LinkedIn</div>
              <p className="text-sm text-gray-600">Professional profile showcasing my education, internships and project experience.</p>
            </a>

            <a href="https://githu  b.com/dhairyagit" className="p-6 border rounded-xl bg-white hover:shadow-lg transition text-center space-y-3">
              <img src="https://cdn.simpleicons.org/github" className="w-8 mx-auto" />
              <div className="font-medium">GitHub</div>
              <p className="text-sm text-gray-600">Repository of my coding projects including machine learning and backend development work.</p>
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dhairyamehta312@gmail.com" target="_blank" className="p-6 border rounded-xl bg-white hover:shadow-lg transition text-center space-y-3">
              <img src="https://cdn.simpleicons.org/gmail" className="w-8 mx-auto" />
              <div className="font-medium">Email</div>
              <p className="text-sm text-gray-600">Feel free to contact me for collaboration, internship opportunities or technical discussions.</p>
            </a>

          </div>
        </section>

      </main>

      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dhairya Mehta • Machine Learning Enthusiast
      </footer>

    </div>
  );
}
