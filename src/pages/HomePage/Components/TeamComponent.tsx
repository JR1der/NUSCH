interface TeamMember {
  name: string;
  role: string;
  email: string;
  image: string;
  hasLinkedin?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "Наталія Прізвище",
    role: "вчителька математики",
    email: "natasop01@yahoo.com",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Максим Попович",
    role: "вчитель фізики",
    email: "maksimchik@gmail.com",
    image: "/placeholder.svg?height=400&width=400",
    hasLinkedin: true,
  },
  {
    name: "Наріман Шостам",
    role: "вчитель української мови",
    email: "narimanhks@gmail.com",
    image: "/placeholder.svg?height=400&width=400",
  },
];

export const TeamComponent = () => {
  return (
    <section className="bg-darkBlue py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lightBlue text-4xl md:text-5xl font-bold text-center mb-16">
          НАШ КОЛЕКТИВ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-lightBlue rounded-3xl overflow-hidden relative group"
            >
              <div className="aspect-square relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-darkBlue text-xl font-bold mb-2">
                  {member.name}
                </h3>
                <p className="text-darkBlue text-sm mb-2">{member.role}</p>
                <p className="text-darkBlue text-sm">{member.email}</p>
              </div>

              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  className="bg-lightYellow p-2 rounded-full hover:bg-opacity-90 transition-all"
                  aria-label="Send message"
                >
                  <MessageSquare className="w-4 h-4 text-darkBlue" />
                </button>
                {member.hasLinkedin && (
                  <button
                    className="bg-lightYellow p-2 rounded-full hover:bg-opacity-90 transition-all"
                    aria-label="View LinkedIn profile"
                  >
                    <Linkedin className="w-4 h-4 text-darkBlue" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
