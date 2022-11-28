import {
  Box,
  FormControl,
  FormErrorMessage,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useCallback,
  useState,
} from "react";
import { useDropzone } from "react-dropzone";
import { FieldError } from "react-hook-form";

import { AiOutlineClose } from "react-icons/ai";
import { PrimaryButton } from "../buttons/PrimaryButton";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
  nameInput: string;
  getFile: (file: string) => void;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { getFile, label, error = null, nameInput, ...rest },
  ref
) => {
  const [selectedFileUrlPoster, setSelectedFileUrlPoster] = useState("");
  const [filePath, setFilePath] = useState<string>("");

  const onDrop = useCallback((acceptedFilesArr: File[]) => {
    const file = acceptedFilesArr[0];
    // @ts-ignore
    setFilePath(file?.path);

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrlPoster(fileUrl);
    getFile(fileUrl);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const removeFile = () => {
    setSelectedFileUrlPoster("");
    setFilePath("");
    getFile("");
  };

  return (
    <>
      <FormControl isInvalid={!!error}>
        {selectedFileUrlPoster ? (
          <Box maxW={"sm"} borderColor={!!error ? "error.100" : "gray.200"}>
            <VStack align={"start"}>
              <Box>
                <Text as="b" fontSize={"15"} color="gray.100">
                  {label}
                </Text>
                <Box position={"relative"}>
                  <Image
                    filter="auto"
                    brightness="80%"
                    height={"200px"}
                    src={`${selectedFileUrlPoster}`}
                  />
                  <IconButton
                    size={"xs"}
                    position={"absolute"}
                    top={0}
                    right={0}
                    aria-label="close-image"
                    bg={"gray.400"}
                    icon={<AiOutlineClose />}
                    onClick={removeFile}
                  />
                </Box>

                <Text as="b" fontSize={"15"} color="gray.100">
                  {filePath}
                </Text>
              </Box>
              <PrimaryButton w={"50%"} {...getRootProps()}>
                Alterar Imagem
                <input
                  accept="image/*"
                  ref={ref}
                  name={nameInput}
                  id={nameInput}
                  {...rest}
                  {...getInputProps()}
                />
              </PrimaryButton>
            </VStack>
          </Box>
        ) : (
          <Box
            {...getRootProps()}
            border="none"
            borderColor={!!error ? "error.100" : "gray.200"}
            maxW={"sm"}
          >
            <VStack spacing={2} align={"start"}>
              <Text as="b" fontSize={"15"} color="gray.100">
                {label}
              </Text>
              <Text fontSize={"12"} fontWeight={"bold"} color="gray.100">
                Clique para carregar o arquivo
              </Text>

              <PrimaryButton maxW={"fit-content"}>
                Selecionar Imagem
                <input
                  accept="image/*"
                  ref={ref}
                  name={nameInput}
                  id={nameInput}
                  {...rest}
                  {...getInputProps()}
                />
              </PrimaryButton>
            </VStack>
          </Box>
        )}

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </>
  );
};

export const FileInput = forwardRef(InputBase);
