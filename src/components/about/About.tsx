import "./About.css";
import Resume from "../../assets/andresdanielmtz-cv.pdf";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-black dark:bg-gray-900 pt-12">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            {t("About")}{" "}
          </h2>
          <p className="mb-4 font-light">
            {t("Hello")}
            <br />
            {t("Location")}
          </p>
          <p className="mb-4 font-medium">
            {t("Currently")}{" "}
            <a
              href="mailto:andresdanielmtz@hotmail.com"
              className="text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              {t("Email")}
            </a>
            .
          </p>
          <a
            href={Resume}
            target="_blank"
            className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
          >
            Resume
            <svg
              className="ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
