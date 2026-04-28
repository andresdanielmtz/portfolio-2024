import { useTranslation } from "react-i18next";
import "./Experience.css";

interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  date: string;
  bullets: string[];
}

const Experience = () => {
  const { t } = useTranslation();

  const jobs: ExperienceEntry[] = [
    {
      title: t("Experience_Oracle_Title"),
      company: "Oracle",
      location: t("Experience_Oracle_Location"),
      date: t("Experience_Oracle_Date"),
      bullets: [
        t("Experience_Oracle_First"),
        t("Experience_Oracle_Second"),
        t("Experience_Oracle_Third"),
      ],
    },
    {
      title: t("Experience_IBM_Title"),
      company: "IBM",
      location: t("Experience_IBM_Location"),
      date: t("Experience_IBM_Date"),
      bullets: [
        t("Experience_IBM_First"),
        t("Experience_IBM_Second"),
        t("Experience_IBM_Third"),
      ],
    },
  ];

  return (
    <section className="bg-black dark:bg-gray-900 pt-12 min-h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            {t("Experience_Title")}
          </h2>
          <p className="mb-8 font-light">{t("Experience_Subtitle")}</p>
          <p className="mb-8 font-medium text-gray-300">{t("Experience_Graduation")}</p>

          <div className="timeline">
            {jobs.map((job) => (
              <article key={`${job.company}-${job.date}`} className="timeline-card">
                <div className="timeline-meta">
                  <span>{job.date}</span>
                  <span>{job.location}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                <p className="text-gray-300 mb-3">{job.company}</p>
                <ul className="list-disc ps-6 text-gray-300 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;