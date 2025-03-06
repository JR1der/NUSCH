import { AboutUsComponent } from "./Components/AboutUsComponent";
import { AdditionalService } from "./Components/AdditionalService";
import { AdvantagesComponent } from "./Components/AdvantagesComponent";
import { BgPhotoComponent } from "./Components/BgPhotoComponent";
import { ContactsComponent } from "./Components/ContactsComponent";
import { KidAdd } from "./Components/KidAdd";
import { MainSubjects } from "./Components/MainSubjects";
import { Schedule } from "./Components/Schedule";
import { Studying } from "./Components/Studying";
import { TeacherAdd } from "./Components/TeacherAdd";

export const HomePage = () => {
  return (
    <div className="bg-darkBlue">
      <BgPhotoComponent />
      <AboutUsComponent />
      <MainSubjects />
      <Studying />
      <AdditionalService />
      <Schedule />
      <AdvantagesComponent />
      <KidAdd />
      <TeacherAdd />
      <ContactsComponent />
    </div>
  );
};
