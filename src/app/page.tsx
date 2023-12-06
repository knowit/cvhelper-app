"use client"

import { GenerateCVParameters, useGenerateCV } from '@/api/requests';
import { Container, Flex } from '@styled-system/jsx';
import { GenerateCVForm } from './generateCvForm';
import { flex } from '@styled-system/patterns';
import { Code } from '@/components/code';
 

export default function Home() {
  const mutation = useGenerateCV();

  const onSubmit = (value: GenerateCVParameters) => mutation.mutateAsync(value);

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
    </Container>
  );
}