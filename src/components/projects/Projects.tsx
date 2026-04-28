import Project from "./ProjTemplate.tsx";
import { useTranslation } from "react-i18next";
import Resume from "../../assets/andresdanielmtz-cv.pdf";
import "./Projects.css";
import LoadingBar from "./ProjectScrollbar.jsx";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section className="bg-black dark:bg-gray-900 pt-12 no-scrollbar overflow-y-hidden">
      <div className="remove-scrollbar">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <LoadingBar />
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              {t("Project_Title")}{" "}
            </h2>
            <h5 className="py-5">
              {" "}
              {t("Project_Subtitle")}
              <br /> (´ ∀ ` *)
            </h5>

            <div className="flex flex-col space-y-4">
              <Project
                title={t("Project_Biocrowny")}
                date="January 2026 - March 2026"
                url="https://github.com/andresdanielmtz/biocrownyOdoo"
              >
                <ul className="ps-10 list-disc">
                  <li> {t("Project_Biocrowny_First")}</li>
                  <li> {t("Project_Biocrowny_Second")}</li>
                  <li> {t("Project_Biocrowny_Third")}</li>
                </ul>
              </Project>

              <Project
                title={t("Project_OracleTask_Title")}
                date="February 2025 - June 2025"
                url="https://github.com/andresdanielmtz/TC3004B.Oracle"
              >
                <ul className="ps-10 list-disc">
                  <li> {t("Project_OracleTask_First")}</li>
                  <li> {t("Project_OracleTask_Second")}</li>
                  <li> {t("Project_OracleTask_Third")}</li>
                </ul>
              </Project>

              <Project
                title={t("Project_PuntoDonativo_Title")}
                date="September 2024 - December 2024"
                url="https://github.com/andresdanielmtz/puntodonativo"
              >
                <ul className="ps-10 list-disc">
                  <li> {t("Project_PuntoDonativo_First")}</li>
                  <li> {t("Project_PuntoDonativo_Second")}</li>
                  <li> {t("Project_PuntoDonativo_Third")}</li>
                </ul>
              </Project>
            </div>
            <p className="py-10">
              {t("ProjectFinal")}
              <a target="_blank" href="https://github.com/andresdanielmtz">
                Github
              </a>{" "}
              {t("ProjectFinal2")}{" "}
              <a target="_blank" href={Resume}>
                {" "}
                resume
              </a>
              .{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
