import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useState } from "react";

export const KidAdd = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <section id="join" className="bg-darkBlue my-12 md:my-24">
      <div className="bg-lightYellow py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-darkBlue text-md sm:text-3xl md:text-5xl font-semibold mb-6 leading-tight">
            ЗАПИШІТЬ СВОЮ ДИТИНУ
            <br />
            ДО НАШОЇ ШКОЛИ!
          </h2>

          <p className="text-darkBlue text-lg md:text-2xl mb-12 max-w-3xl mx-auto">
            Запишіться сьогодні та подаруйте дитині можливість навчатись
            українською мовою разом з нами!
          </p>

          <button
            onClick={handleOpen}
            className="bg-darkBlue text-lightYellow hover:bg-yellow hover:text-darkBlue px-12 py-4 rounded-lg text-md md:text-xl font-medium hover:scale-105 transition-all"
          >
            ДОЛУЧАЙТЕСЬ
          </button>
        </div>
      </div>
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
          Запишіть свою дитину
        </DialogHeader>
        <DialogBody {...({} as any)} className="text-darkBlue text-center">
          Запис дитини до школи: Надішліть листа на електронну адресу 
          <strong> nuschdarmstadt@gmx.de</strong> з інформацією про вашу дитину
          та контактними даними.
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
    </section>
  );
};
