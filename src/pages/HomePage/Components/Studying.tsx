import { Card, IconButton, Typography } from "@material-tailwind/react";

export const Studying = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-darkBlue to-[#1e3a8a]/80 overflow-hidden border-t-2 border-b-2 border-lightYellow">
      {/* Background Decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-lightYellow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-lightYellow/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-lightYellow/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-lightYellow/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Typography
            {...({} as any)}
            variant="h1"
            className="text-lightYellow text-4xl md:text-5xl font-bold mb-4"
          >
            ФАКУЛЬТАТИВНІ ЗАНЯТТЯ
          </Typography>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-1 w-20 bg-lightYellow rounded-full"></div>
            <IconButton
              {...({} as any)}
              variant="text"
              className="bg-lightYellow p-3 rounded-full"
            >
              <i className="bx bx-brush text-2xl text-darkBlue"></i>
            </IconButton>
            <div className="h-1 w-20 bg-lightYellow rounded-full"></div>
          </div>
          <Typography
            {...({} as any)}
            className="text-lightBlue text-lg max-w-2xl mx-auto"
          >
            Наші факультативні заняття сприяють творчому, інтелектуальному та
            фізичному розвитку дітей.
          </Typography>
        </div>

        {/* Optional Classes */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Німецька мова з Крістофом",
              description:
                "Заняття з носієм мови у групах разом із батьками для максимального занурення в мовне середовище.",
              icon: "bx-chat",
            },
            {
              title: "Арт-терапія та творчість",
              description:
                "Творчі заняття німецькою мовою для розвитку емоційного інтелекту та креативності.",
              icon: "bx-palette",
            },
            {
              title: "Вокал",
              description:
                "Підготовка учнів до виступів, розвиток голосу та сценічної впевненості.",
              icon: "bx-microphone",
            },
            {
              title: "Хореографія",
              description:
                "Танцювальні заняття, що розвивають фізичну підготовку та артистизм.",
              icon: "bx-run",
            },
          ].map((item, index) => (
            <Card
              {...({} as any)}
              key={index}
              className="bg-lightYellow/10 backdrop-blur-md p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <IconButton
                  {...({} as any)}
                  variant="text"
                  className="bg-lightYellow p-3 rounded-full"
                >
                  <i className={`bx ${item.icon} text-2xl text-darkBlue`}></i>
                </IconButton>
                <Typography
                  {...({} as any)}
                  variant="h4"
                  className="text-lightBlue text-lg font-semibold"
                >
                  {item.title}
                </Typography>
              </div>
              <Typography {...({} as any)} className="text-lightBlue/75">
                {item.description}
              </Typography>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
