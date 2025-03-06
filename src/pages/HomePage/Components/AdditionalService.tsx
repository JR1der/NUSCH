import { Card, IconButton, Typography } from "@material-tailwind/react";

export const AdditionalService = () => {
  return (
    <section className="relative flex justify-center py-24 bg-gradient-to-b from-darkBlue to-[#1e3a8a]/80 overflow-hidden">
      {/* Blurry Obstacles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[28rem] h-[28rem] bg-lightYellow/20 rounded-full blur-[100px] top-16 left-1/4"></div>
        <div className="absolute w-[24rem] h-[24rem] bg-lightYellow/25 rounded-full blur-[90px] bottom-24 right-1/3"></div>
      </div>

      {/* Main content card */}
      <Card className="relative max-w-5xl w-full bg-lightBlue/60 backdrop-blur-md p-12 md:p-16 rounded-2xl shadow-2xl text-center animate-fadeInUp">
        {/* Header */}
        <div className="mb-12">
          <Typography variant="h2" className="text-darkBlue text-4xl font-bold">
            Додаткові послуги
          </Typography>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-1 w-24 bg-lightYellow rounded-full"></div>
            <IconButton
              variant="text"
              className="bg-lightYellow p-4 rounded-full transition-transform duration-300 hover:rotate-12"
            >
              <i className="bx bx-child text-3xl text-darkBlue"></i>
            </IconButton>
            <div className="h-1 w-24 bg-lightYellow rounded-full"></div>
          </div>
        </div>

        {/* Service Card */}
        <Card className="bg-lightYellow p-10 rounded-xl flex flex-col md:flex-row items-center gap-10 transition-transform duration-300 hover:scale-[1.02] shadow-lg border border-lightYellow/50">
          {/* Icon Section */}
          <div className="relative flex-shrink-0 w-32 h-32 flex items-center justify-center">
            <div className="absolute w-full h-full bg-darkBlue/20 rounded-full blur-3xl"></div>
            <IconButton
              size="lg"
              className="bg-darkBlue w-full h-full rounded-full transition-transform duration-300 hover:rotate-12"
            >
              <i className="bx bx-baby-carriage text-5xl text-lightYellow"></i>
            </IconButton>
          </div>

          {/* Text Section */}
          <div className="flex-grow text-center md:text-left">
            <Typography
              variant="h4"
              className="text-darkBlue text-3xl font-bold mb-4"
            >
              Група розвитку та нагляду
            </Typography>
            <Typography className="text-darkBlue text-lg leading-relaxed">
              При нашій школі функціонує комфортна група розвитку та нагляду для
              дітей віком від 2,5 до 4 років, де малюки отримують необхідний
              догляд та підготовку до подальшого навчання.
            </Typography>
          </div>
        </Card>

        {/* Age Indicator in Bottom-Right Corner with Full Width */}
        <div className="mt-6 w-full flex justify-end">
          <Card className="bg-darkBlue/10 w-full px-6 py-4 flex items-center justify-center gap-4 rounded-lg border border-darkBlue/30 shadow-md transform">
            <i className="bx bx-time text-darkBlue text-2xl"></i>
            <Typography className="text-darkBlue text-lg font-medium">
              Вік: 2,5 - 4 роки
            </Typography>
          </Card>
        </div>
      </Card>
    </section>
  );
};
