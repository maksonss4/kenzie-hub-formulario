import { useContext } from "react";
import { MdAdd } from "react-icons/md";
import { H2 } from "../../components/H2";
import { Span } from "../../components/Span";
import { LoginContext } from "../../Providers/LoginProvider";
import {
  DivNoTechs,
  LiTech,
  SectionTechs,
  SectionUser,
  UlTechs,
} from "./style";

export function ContentDashboard() {
  const {
    user,
    openCloseModalCreateTech,
    techs,
    setTechDeleteEdit,
    setNameTechDeleteEdit,
    openCloseModalEditTech,
  } = useContext(LoginContext);

  return (
    <main>
      <SectionUser>
        <div className="div-box-title-user">
          <H2 text={`Olá, ${user.name}`} />
          <Span text={`${user.course_module}`} />
        </div>
      </SectionUser>
      <SectionTechs>
        <div className="div-techs-title">
          <H2 text="Tecnologias" />
          <button type="button" onClick={() => openCloseModalCreateTech()}>
            <MdAdd />
          </button>
        </div>
        {techs.length > 0 ? (
          <UlTechs>
            {techs.map((tech) => {
              return (
                <LiTech
                  key={tech.id}
                  onClick={() => {
                    setTechDeleteEdit(tech);
                    openCloseModalEditTech();
                    setNameTechDeleteEdit(tech.title);
                  }}
                >
                  <H2 text={tech.title} />
                  <Span text={tech.status} />
                </LiTech>
              );
            })}
          </UlTechs>
        ) : (
          <DivNoTechs>
            <p>Você não possui tecnologias cadastradas.</p>
            <p>Adicione tecnologias que você tem habilidade.</p>
          </DivNoTechs>
        )}
      </SectionTechs>
    </main>
  );
}
