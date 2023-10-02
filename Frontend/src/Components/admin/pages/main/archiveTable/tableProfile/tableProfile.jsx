
import {
  ButtonSave,
  ContainImg,
  ContainInfoProfile,
  ContainerProfile,
  ContenInputs,
  InfoProfile,
  ProfileConten,
} from "./styledTableProfile";
import { Input } from "../../../header/archiveInputs/editForms/editFormClient";

const TableProfile = () => {

  return (
    <>
      <ContainerProfile>
            <ProfileConten>
              <ContainImg></ContainImg>
              <ContainInfoProfile>
                <ContenInputs>
                  <InfoProfile >hola</InfoProfile>
                  <InfoProfile >hola</InfoProfile>
                  <InfoProfile >hola</InfoProfile>
                  <InfoProfile >hola</InfoProfile>
                </ContenInputs>
                <ContenInputs>
                  <Input 
                  className="perfil" 
                  placeholder="Contraseña actual"
                  />
                  <Input 
                  className="perfil" 
                  placeholder="Nueva contraseña"
                  />
                  <Input 
                  className="perfil" 
                  placeholder="Confirmar Contraseña"
                  />
                </ContenInputs>
                <ContenInputs className="button">
                  <ButtonSave>Guardar</ButtonSave>
                </ContenInputs>
              </ContainInfoProfile>
            </ProfileConten>
      </ContainerProfile>
    </>
  );
};

export default TableProfile;
