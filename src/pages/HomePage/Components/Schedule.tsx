import { Card, IconButton, Typography } from "@material-tailwind/react";

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon: string;
}

const scheduleItems: ScheduleItem[] = [
  {
    time: "10:00",
    title: "Дружнє коло",
    description:
      "Обговорення планів на день та налаштування на продуктивну роботу",
    icon: "bx-conversation",
  },
  {
    time: "10:10",
    title: "Основні заняття",
    description: "Вивчення основних предметів згідно з розкладом",
    icon: "bx-book-reader",
  },
  //   {
  //     time: "12:00",
  //     title: "Перерва",
  //     description: "Час для відпочинку та легкого перекусу",
  //     icon: "bx-coffee",
  //   },
  {
    time: "13:00",
    title: "Факультативи",
    description: "Додаткові заняття за вибором",
    icon: "bx-palette",
  },
  {
    time: "14:00",
    title: "Завершення дня",
    description: "Підведення підсумків та планування наступного дня",
    icon: "bx-time-five",
  },
];

export const Schedule = () => {
  return (
    <section
      id="schedule"
      className="py-20 bg-gradient-to-b from-darkBlue to-[#1e3a8a]/80"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Typography
            {...({} as any)}
            variant="h1"
            className="text-lightYellow text-4xl md:text-5xl font-bold mb-4"
          >
            Розклад Навчання
          </Typography>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-1 w-20 bg-lightYellow rounded-full"></div>
            <IconButton
              {...({} as any)}
              variant="text"
              className="bg-lightYellow p-3 rounded-full"
            >
              <i className="bx bx-calendar text-2xl text-darkBlue"></i>
            </IconButton>
            <div className="h-1 w-20 bg-lightYellow rounded-full"></div>
          </div>
          <Typography
            {...({} as any)}
            className="text-lightBlue text-lg max-w-2xl mx-auto"
          >
            Навчальний день побудований таким чином, щоб забезпечити оптимальний
            баланс між навчанням та відпочинком
          </Typography>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[4px] bg-lightYellow"></div>

          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className={`mb-8 md:mb-0 md:flex ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center justify-center gap-10`}
            >
              {/* Time Card */}
              <Card
                {...({} as any)}
                className={`w-full md:w-5/12 p-6 bg-lightYellow transform transition-all duration-300 hover:scale-105 ${
                  index === 0 ? "mt-0" : "mt-5"
                } ${
                  index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                } flex flex-col min-h-[150px]`}
              >
                <div className="flex items-start gap-4">
                  <IconButton {...({} as any)} className="bg-darkBlue">
                    <i className={`bx ${item.icon} text-xl`}></i>
                  </IconButton>
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <Typography
                        {...({} as any)}
                        variant="h4"
                        className="text-darkBlue font-bold"
                      >
                        {item.time}
                      </Typography>
                      <Typography
                        {...({} as any)}
                        variant="h6"
                        className="text-darkBlue font-medium"
                      >
                        {item.title}
                      </Typography>
                    </div>
                    <Typography {...({} as any)} className="text-darkBlue/75">
                      {item.description}
                    </Typography>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-16">
          <Card {...({} as any)} className="bg-lightYellow p-4 max-w-lg w-full text-center transform hover:scale-105 transition-transform">
            <Typography
              {...({} as any)}
              variant="h5"
              className="text-darkBlue font-medium"
            >
              Навчальний день: <span className="font-bold">10:00 - 14:00</span>
            </Typography>
          </Card>
        </div>
      </div>
    </section>
  );
};
