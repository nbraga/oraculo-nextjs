import {
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { GhostButton } from "../buttons/GhostButton";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { LengthInput } from "../inputs/LengthInput";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import * as yup from "yup";

interface SchemaProps {
  name: string;
  id: string;
  token: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const AddPdvModal = ({ isOpen, onClose }: Props) => {
  const addPdvFormSchema = yup.object().shape({
    name: yup.string().required("Defina o nome do PDV"),
    id: yup.string().required("Defina o ID do PDV"),
    token: yup.string().required("Token obrigatório"),
  });

  const { register, handleSubmit, formState, control, setValue } =
    useForm<SchemaProps>({
      resolver: yupResolver(addPdvFormSchema),
    });

  const handleAddPdv: SubmitHandler<SchemaProps> = async (values) => {
    console.log(values);
  };

  let nameControl = useWatch({
    control,
    name: "name",
  });
  let idControl = useWatch({
    control,
    name: "id",
  });
  let tokenControl = useWatch({
    control,
    name: "token",
  });

  return (
    <>
      <Modal
        size={"md"}
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent onSubmit={handleSubmit(handleAddPdv)} as={"form"}>
          <ModalHeader>
            <Heading fontSize={"lg"} textAlign={"center"}>
              Adicionar PDV Patio Gourmet Djalma
            </Heading>
          </ModalHeader>
          <ModalBody>
            <Stack align={"center"}>
              <LengthInput
                label="Nome do DV"
                nameInput="name"
                controlLabel={nameControl}
                maxLength={200}
                error={formState.errors.name}
                {...register("name")}
              />
              <LengthInput
                label="ID do PDV"
                nameInput="id"
                controlLabel={idControl}
                maxLength={10}
                error={formState.errors.id}
                {...register("id")}
              />
              <LengthInput
                label="Token"
                nameInput="token"
                controlLabel={tokenControl}
                maxLength={100}
                error={formState.errors.token}
                {...register("token")}
              />
            </Stack>
          </ModalBody>

          <ModalFooter justifyContent={"space-between"}>
            <GhostButton onClick={onClose}>Cancelar</GhostButton>
            <PrimaryButton type="submit" w={"50%"}>
              Atualizar PDV
            </PrimaryButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
