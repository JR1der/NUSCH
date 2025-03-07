import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useState } from "react";

export const TeacherAdd = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <section className="bg-darkBlue min-h-screen py-16 px-8 mt-12 md:mt-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-lightBlue text-2xl sm:text-4xl md:text-5xl font-semibold text-center mb-16 leading-relaxed">
          ПРИЄДНУЙТЕСЬ ДО НАШОЇ
          <br />
          КОМАНДИ ВЧИТЕЛІВ
        </h2>

        <div className="bg-lightBlue rounded-3xl p-8 md:p-12">
          <h3 className="text-center text-darkBlue text-xl sm:text-2xl md:text-4xl font-semibold mb-8">
            ВИ ВЧИТЕЛЬ ПОЧАТКОВИХ КЛАСІВ?
          </h3>

          <p className="text-darkBlue text-sm md:text-lg leading-relaxed">
            Наша суботня школа шукає талановитих і відданих вчителів, які хочуть
            поділитися своїми знаннями та виховати нове покоління учнів. Якщо ви
            любите працювати з дітьми, маєте досвід викладання у початковій
            школі та бажаєте працювати в творчій і підтримуючій атмосфері, ми
            раді будемо бачити вас у нашій команді!
          </p>

          <Button
            {...({} as any)}
            onClick={handleOpen}
            className="bg-darkBlue text-lightYellow hover:bg-yellow hover:text-darkBlue px-12 py-4 rounded-lg text-md md:text-xl font-medium hover:scale-105 transition-all mt-10"
          >
            ДОЛУЧАЙТЕСЬ
          </Button>

          <Dialog
            {...({} as any)}
            open={open}
            handler={handleOpen}
            className="bg-lightBlue"
          >
            <DialogHeader
              {...({} as any)}
              className="text-darkBlue flex justify-center"
            >
              Приєднання до колективу вчителів
            </DialogHeader>
            <DialogBody {...({} as any)} className="text-darkBlue text-center">
              Якщо ви професійний педагог і бажаєте стати частиною нашої
              команди, надішліть своє резюме на електронну адресу
              <strong>nuschdarmstadt@gmx.de</strong>.
            </DialogBody>
            <DialogFooter {...({} as any)}>
              <Button
                {...({} as any)}
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Закрити</span>
              </Button>
            </DialogFooter>
          </Dialog>
        </div>
      </div>
    </section>
  );
};
