import { useState } from "react";

export const AboutUsComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="about-us"
      className="relative py-24 bg-gradient-to-b from-darkBlue to-[#1e3a8a]/80 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-lightYellow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-lightYellow/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-lightYellow/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-lightYellow/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-lightYellow text-5xl md:text-6xl font-extrabold mb-6">
            ПРО НАС
          </h1>
          <div className="flex items-center justify-center gap-5">
            <div className="h-1 w-24 bg-lightYellow rounded-full"></div>
            <button className="bg-lightYellow p-4 rounded-full w-20 h-20 flex items-center justify-center">
              <i className="bx bx-book-heart text-3xl text-darkBlue"></i>
            </button>
            <div className="h-1 w-24 bg-lightYellow rounded-full"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto text-center">
          {/* Welcome Section */}
          <div className="flex flex-col items-center gap-12 mb-20">
            <h3 className="text-lightYellow text-3xl md:text-5xl font-extrabold mb-6">
              Ласкаво просимо до Нової української школи в місті Дармштадт!
            </h3>
            <div className="bg-lightYellow/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
              <p className="text-lightBlue text-xl md:text-2xl leading-relaxed">
                Наша школа, відкрита 1 вересня 2024 року, пропонує якісну освіту
                для українських дітей у Німеччині. Ми проводимо заняття виключно
                українською та німецькою мовами, забезпечуючи двомовне навчання
                для наших учнів.
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="flex flex-col items-center gap-12">
            <h4 className="text-lightYellow text-3xl md:text-4xl font-extrabold mb-6">
              Чому варто обрати нашу школу?
            </h4>
            <div
              className={`transition-all duration-500 ease-in-out ${
                isExpanded ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
              } overflow-hidden`}
            >
              <div className="space-y-6 bg-lightYellow/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
                <p className="text-lightBlue text-lg md:text-xl leading-relaxed">
                  Наша школа створена для того, щоб забезпечити дітей якісною
                  освітою в українському середовищі, підтримуючи їхній зв’язок з
                  рідною культурою. Ми прагнемо, щоб навчання було не тільки
                  корисним, а й цікавим!
                </p>
                <p className="text-lightBlue text-lg md:text-xl leading-relaxed">
                  📚 Комплексний підхід – наші заняття поєднують традиційні
                  методики викладання з інтерактивними підходами.
                </p>
                <p className="text-lightBlue text-lg md:text-xl leading-relaxed">
                  🌍 Двомовне середовище – навчання ведеться українською та
                  німецькою мовами, сприяючи гармонійному розвитку дітей.
                </p>
                <p className="text-lightBlue text-lg md:text-xl leading-relaxed">
                  🎭 Культурна складова – окрім навчальних дисциплін, ми активно
                  залучаємо дітей до українських традицій.
                </p>
                <p className="text-lightBlue text-lg md:text-xl leading-relaxed">
                  🤝 Дружня атмосфера – кожна дитина отримує увагу та підтримку,
                  що допомагає їй почуватися комфортно.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-8 flex items-center gap-3 bg-lightYellow/10 hover:bg-lightYellow/20 text-lightYellow px-8 py-4 rounded-lg transition-all duration-300 text-xl font-bold"
            >
              {isExpanded ? "Згорнути" : "Дізнатися більше"}
              <i
                className={`bx ${
                  isExpanded ? "bx-chevron-up" : "bx-chevron-down"
                } text-2xl`}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
