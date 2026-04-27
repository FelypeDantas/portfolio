import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          
          {/* Text Content */}
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="text-xl text-white/70">
              Software Developer
            </span>

            <h1 className="h1 mb-6">
              Olá, eu sou o <br />
              <span className="text-accent">Felype Dantas</span>
            </h1>

            <p className="mb-9 max-w-[500px] text-white/80">
              Apaixonado por aprender, trago experiência em diversas linguagens de programação e tecnologias.
              Estou sempre em busca de novos desafios e oportunidades de crescimento.
              Vamos construir algo incrível juntos!
            </p>

            <div className="flex flex-col items-center gap-6 xl:flex-row">
              
              {/* Download CV */}
              <a
                href="/assets/Curriculo_Felype.pdf"
                download
                className="inline-block"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 uppercase"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              {/* Social Links */}
              <div className="xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="flex items-center justify-center w-9 h-9 text-base transition-all duration-500 border rounded-full border-accent text-accent hover:bg-accent hover:text-primary"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats */}
      <Stats />
    </section>
  );
};

export default Home;
