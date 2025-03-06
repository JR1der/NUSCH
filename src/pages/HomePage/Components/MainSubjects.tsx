import {
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import historyImg from "../../../assets/history.jpg";
import mathImg from "../../../assets/mathIt.png";
import ukrBookImg from "../../../assets/ukrBook.webp";
import writing from "../../../assets/ukrLangWriting.webp";

interface Subject {
  title: string;
  description: string;
  longDescription: string;
  image: string;
}

const subjects: Subject[] = [
  {
    title: "Українська мова та письмо",
    description:
      "Розвиток мовних навичок, вивчення граматики та покращення письма",
    longDescription:
      "Поглиблене вивчення української мови, включаючи граматику, правопис, стилістику та розвиток письмових навичок. Учні практикують написання різних видів текстів та вдосконалюють своє володіння мовою.",
    image: writing,
  },
  {
    title: "Читання та література",
    description:
      "Знайомство з українською літературою та розвиток навичок читання",
    longDescription:
      "Вивчення класичних та сучасних творів української літератури. Розвиток критичного мислення через аналіз текстів, обговорення літературних творів та їх контексту в українській культурі.",
    image: ukrBookImg,
  },
  {
    title: "Інформатика та математика",
    description: "Вивчення основ програмування та математичних концепцій",
    longDescription:
      "Комплексне вивчення математики та інформатики, включаючи основи програмування, роботу з комп'ютером та розв'язання математичних задач. Розвиток логічного мислення та технічних навичок.",
    image: mathImg,
  },
  {
    title: "Історія та українознавство",
    description: "Вивчення історії України та української культури",
    longDescription:
      "Глибоке занурення в історію України, вивчення культурної спадщини, традицій та звичаїв українського народу. Включає проектну роботу та інтерактивні заняття.",
    image: historyImg,
  },
];

export const MainSubjects = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-lightBlue to-lightBlue/80 overflow-hidden border-t-4 border-lightYellow">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-lightYellow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-lightYellow/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-lightYellow/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-lightYellow/10 rounded-full blur-2xl"></div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Typography
            variant="h1"
            className="text-darkBlue text-4xl md:text-5xl font-bold mb-4"
          >
            Основні Предмети
          </Typography>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-1 w-20 bg-darkBlue rounded-full"></div>
            <IconButton variant="text" className="bg-darkBlue p-3 rounded-full">
              <i className="bx bxs-school text-2xl text-lightYellow"></i>
            </IconButton>
            <div className="h-1 w-20 bg-darkBlue rounded-full"></div>
          </div>
          <Typography className="text-darkBlue text-lg max-w-2xl mx-auto">
            Основні предмети спрямовані на всебічний розвиток учнів, поєднуючи
            мовні, математичні, технічні та культурні знання.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <Card
              key={index}
              className="bg-darkBlue overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <CardHeader shadow={false} floated={false} className="h-48">
                <img
                  src={subject.image || "/placeholder.svg"}
                  alt={subject.title}
                  className="w-full h-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h4"
                  className="text-lightBlue font-semibold mb-2"
                >
                  {subject.title}
                </Typography>
                <Typography className="text-lightBlue/80">
                  {subject.description}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
