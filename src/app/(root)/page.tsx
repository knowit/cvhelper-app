"use client"

import { GenerateCVParameters, useGenerateCV } from '@/api/requests';
import { Container, Flex } from '@styled-system/jsx';
import { GenerateCVForm } from './generateCvForm';
import { flex } from '@styled-system/patterns';
import { Code } from '@/components/code';
import { createToaster } from '@ark-ui/react/toast';
import { Toast, ToastCloseTrigger, ToastDescription, ToastTitle } from '@/components/toast';
import { IconButton } from '@/components/iconButton';
import { BsX } from 'react-icons/bs';
 

const [Toaster, toast] = createToaster({
  placement: "top",
  render(toast) {
    return (
      <Toast {...toast.rootProps}>
        <ToastTitle>{toast.title}</ToastTitle>
        <ToastDescription>{toast.description}</ToastDescription>
        <ToastCloseTrigger asChild>
          <IconButton size="sm" variant="link">
            <BsX />
          </IconButton>
        </ToastCloseTrigger>
      </Toast>
    )
  },
});

export default function Home() {
  const mutation = useGenerateCV();

  const onSubmit = (value: GenerateCVParameters) => mutation.mutateAsync(value).catch((error) => {
    toast.error({
      title: "Error",
      description: error.message
    })
    return null;
  });

  return (
    <Container className={flex({ flexDir: "column", width: "full", gap: 5, maxW: "4xl" })}>
      <GenerateCVForm onSubmit={onSubmit}/>
      <Flex>
        {mutation.data && (
          <Code padding="4" fontSize="md">
            {mutation.data?.result}
          </Code>
        )}
      </Flex>
      <Toaster />
    </Container>
  );
}