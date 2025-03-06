export const AdvantagesComponent = () => {
  return (
    <section className="bg-lightBlue py-16 mb-20 md:mb-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-darkBlue text-3xl md:text-5xl font-semibold text-center mb-16">
          НАШІ ПЕРЕВАГИ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {/* Language Card */}
          <div className="flex flex-col items-center">
            <div className="bg-lightYellow p-6 rounded-lg mb-4 w-24 h-24 flex items-center justify-center">
              <i className="bx bx-book text-6xl text-darkBlue"></i>
            </div>
            <h3 className="text-darkBlue text-2xl font-bold mb-4">
              ДВОМОВНЕ НАВЧАННЯ
            </h3>
            <p className="text-darkBlue text-s md:text-md leading-relaxed">
              Заняття проводяться українською та німецькою мовами, що сприяє
              швидкій адаптації та інтеграції дітей у нове середовище
            </p>
          </div>

          {/* Team Card */}
          <div className="flex flex-col items-center">
            <div className="bg-lightYellow p-6 rounded-lg mb-4 w-24 h-24 flex items-center justify-center">
              <i className="bx bx-group text-6xl text-darkBlue"></i>
            </div>
            <h3 className="text-darkBlue text-2xl font-bold mb-4">
              ПРОФЕСІЙНІ ВИКЛАДАЧІ
            </h3>
            <p className="text-darkBlue text-s md:text-md leading-relaxed">
              Наші педагоги мають високий рівень кваліфікації та досвід роботи з
              дітьми різного віку
            </p>
          </div>

          {/* Learning Card */}
          <div className="flex flex-col items-center">
            <div className="bg-lightYellow p-6 rounded-lg mb-4 w-24 h-24 flex items-center justify-center">
              <i className="bx bx-sun text-6xl text-darkBlue"></i>
            </div>
            <h3 className="text-darkBlue text-2xl font-bold mb-4">
              ДРУЖНЯ АТМОСФЕРА
            </h3>
            <p className="text-darkBlue text-s md:text-md leading-relaxed">
              У нашій школі панує тепла та підтримуюча атмосфера, де кожна
              дитина відчуває себе частиною великої родини
            </p>
          </div>

          {/* Learning Card */}
          <div className="flex flex-col items-center">
            <div className="bg-lightYellow p-6 rounded-lg mb-4 w-24 h-24 flex items-center justify-center">
              <i className="bx bx-trip text-6xl text-darkBlue"></i>
            </div>
            <h3 className="text-darkBlue text-2xl font-bold mb-4">
              ТРАДИЦІЇ І КУЛЬТУРА
            </h3>
            <p className="text-darkBlue text-s md:text-md leading-relaxed">
              Ми приділяємо особливу увагу вивченню та підтримці українських
              звичаїв, що допомагає дітям зберігати свою ідентичність за
              кордоном
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
