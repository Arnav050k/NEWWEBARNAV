import Image from 'next/image'
import Link from 'next/link'
import { FileText, Linkedin, Mail, Phone, Youtube } from 'lucide-react'

export default function LandingPage() {
  const projects = [
    { title: 'Project 1', description: 'A brief description of Project 1', pdfUrl: '/project1.pdf', youtubeUrl: 'https://youtube.com/watch?v=example1' },
    { title: 'Project 2', description: 'A brief description of Project 2', pdfUrl: '/project2.pdf', youtubeUrl: 'https://youtube.com/watch?v=example2' },
    { title: 'Project 3', description: 'A brief description of Project 3', pdfUrl: '/project3.pdf', youtubeUrl: 'https://youtube.com/watch?v=example3' },
    { title: 'Project 4', description: 'A brief description of Project 4', pdfUrl: '/project4.pdf', youtubeUrl: 'https://youtube.com/watch?v=example4' },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12 text-center">
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Designer's portrait"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
          <h1 className="mt-4 text-3xl font-bold">Jane Doe</h1>
          <p className="mt-2 text-xl">Product Designer</p>
        </section>

        {/* Background and Overview */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Background & Overview</h2>
          <p className="text-gray-700">
            With over 5 years of experience in product design, I specialize in creating intuitive and
            user-centered digital experiences. My approach combines creativity with data-driven
            insights to deliver impactful solutions that meet both user needs and business goals.
          </p>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <div key={index} className="rounded-lg bg-white p-4 shadow">
                <Image
                  src={`/placeholder.svg?height=200&width=300&text=${project.title}`}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="mb-4 rounded"
                />
                <h3 className="mb-2 font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-gray-600">{project.description}</p>
                <div className="flex flex-col space-y-2">
                  <Link
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-red-600 hover:underline"
                  >
                    <Youtube size={20} />
                    Watch Product Walkthrough
                  </Link>
                  <Link
                    href={project.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View Project PDF
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Details */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Contact & Links</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              <FileText size={20} />
              Download Resume
            </Link>
            <Link
              href="https://www.linkedin.com/in/janedoe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-blue-600 hover:bg-gray-100 border border-blue-600"
            >
              <Linkedin size={20} />
              LinkedIn Profile
            </Link>
            <a
              href="mailto:arnav.ratio@gmail.com"
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-blue-600 hover:bg-gray-100 border border-blue-600"
            >
              <Mail size={20} />
              arnav.ratio@gmail.com
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-blue-600 hover:bg-gray-100 border border-blue-600"
            >
              <Phone size={20} />
              +1 (234) 567-890
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}