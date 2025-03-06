import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
import { useState } from "react";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 49.8743928357043,
  lng: 8.619049225957264,
};

const contactInfo = [
  {
    icon: "bx-map-pin",
    title: "Адреса",
    details: ["Paul-Gerhardt-Platz 5, Darmstadt"],
  },
  {
    icon: "bx-envelope",
    title: "Email",
    details: ["nuschdarmstadt@gmx.de"],
  },
  // {
  //   // icon: Phone,
  //   title: "Дзвоніть",
  //   details: ["+380123123123", "+4912312312123"],
  // },
];

export const ContactsComponent = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <section className="bg-lightYellow pb-0">
      <div className="max-w-5xl mx-auto pt-16 text-center">
        <button
          onClick={handleOpen}
          className="bg-darkBlue text-lightYellow hover:bg-yellow hover:text-darkBlue px-12 py-4 rounded-lg text-xl md:text-3xl font-medium hover:scale-105 transition-all mb-10"
        >
          ДОЛУЧАЙТЕСЬ
        </button>

        <p className="text-darkBlue text-xl md:text-2xl text-center mb-12">
          Ми раді вітати вас у нашій спільноті та разом працювати над
          збереженням української культури та мови в серці Європи!
        </p>

        <div className="bg-lightBlue rounded-t-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-lightYellow p-6 rounded-lg mb-4 w-24 h-24 flex items-center justify-center">
                  <i className={`bx ${item.icon} text-darkBlue text-5xl`}></i>
                </div>
                <h3 className="text-darkBlue text-2xl font-semibold mb-4">
                  {item.title}
                </h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-darkBlue text-lg">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Google Maps
        <div className="h-[400px] w-full border-y-4 border-darkBlue">
          <LoadScript
            googleMapsApiKey={import.meta.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
          >
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div> */}
      </div>
      <Dialog open={open} handler={handleOpen} className="bg-lightBlue">
        <DialogHeader className="text-darkBlue flex justify-center">
          Запишіть свою дитину
        </DialogHeader>
        <DialogBody className="text-darkBlue text-center">
          Запис дитини до школи: Надішліть листа на електронну адресу
          <strong>nuschdarmstadt@gmx.de</strong> з інформацією про вашу дитину
          та контактними даними.
        </DialogBody>
        <DialogFooter>
          <Button
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
