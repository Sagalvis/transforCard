
import {
  ButtonSave,
  ContainImg,
  ContainInfoProfile,
  ContainerProfile,
  ContenInputs,
  InfoProfile,
  ProfileConten,
} from "./styledTableProfile";
import jwt_decode from "jwt-decode"
import { Input } from "../../../header/archiveInputs/editForms/editFormClient";

const useData = jwt_decode (localStorage.getItem("user"))

const TableProfile = () => {

  return (
    <>
      <ContainerProfile>
            <ProfileConten>
              <ContainImg>{/* la mala pal roy */}</ContainImg>
              <ContainInfoProfile>
                <ContenInputs>
                  <InfoProfile >{useData.nombre}</InfoProfile> {/* nombre */}
                  <InfoProfile >{useData.apellido}</InfoProfile> {/* apellido */}
                  <InfoProfile >{useData.id}</InfoProfile> {/* cedula */}
                  <InfoProfile >{useData.correo}</InfoProfile> {/* correo */}
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
