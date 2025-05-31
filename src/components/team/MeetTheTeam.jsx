import React from 'react'
import { ArrowRight } from 'lucide-react'

const team = [
  {
    name: 'Serin Kumar',
    role: 'Python Developer',
    img: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Wade Warren',
    role: 'UI/UX Designer',
    img: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Muthu Kumar',
    role: 'PHP Developer',
    img: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Jenny Wilson',
    role: 'Full Stack Developer',
    img: 'https://i.pravatar.cc/150?img=4',
  },
]

const MeetTheTeam = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 ">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[#00a4f0] font-bold text-lg tracking-wide mb-2">Team Section</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
        <p className="text-gray-600 mb-10 md:text-lg">Meet our team of professionals to serve you</p>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          <button className="bg-[#00a4f0] text-white px-6 py-2 rounded-lg text-sm font-semibold shadow hover:bg-[#0b86bf] transition">About us</button>
          <button className="border border-gray-300 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition">Contact</button>
        </div>

        {/* Team Cards */}
        <div className="flex overflow-x-auto items-center py-6 space-x-4 snap-x snap-mandatory scrollbar-hide">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group flex-shrink-0 w-72 snap-center border-2 border-gray-200 rounded-2xl flex flex-col items-center overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >

              <div className="w-full h-48 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-90"
                />
              </div>
              <div className="py-6 text-center px-4">
                <p className="text-sm text-gray-500">{member.role}</p>
                <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
              </div>
              {/* Dot Indicators */}
              <div className="flex space-x-2 py-2">
                <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                <span className="w-3 h-3 rounded-full bg-gray-300"></span>
              </div>
            </div>
          ))}

          {/* Arrow Button */}
          <button className="w-14 h-14 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center shadow transition duration-300">
            <ArrowRight className="text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default MeetTheTeam
