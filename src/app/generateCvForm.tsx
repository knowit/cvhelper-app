import { BaseSyntheticEvent, ComponentProps, ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { useForm } from "react-hook-form";

import { GenerateCVParameters } from "@/api/requests";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { TextareaAutosize } from "@/components/textArea";
import { Flex, styled } from "@styled-system/jsx";

import { FaSpinner } from "react-icons/fa"
import { useSession } from "next-auth/react";
import { flex } from "@styled-system/patterns";
import { defaults } from "lodash-es";
import { css } from "@styled-system/css";

type Input = GenerateCVParameters;
type GenerateCVFormProps = {
  onSubmit: (data: Input, event?: BaseSyntheticEvent) => unknown | Promise<Input>;
}

export const GenerateCVForm: FC<GenerateCVFormProps> = ({ onSubmit }) => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }

  } = useForm<Input>({});

  const submit = (valid: Input) => onSubmit(defaults(valid, { email: session?.user?.email }));

  const loading = css({
    _before: {
      content: '',
      boxSizing: "border-box",
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "20px",
      height: "20px",
      marginTop: "-10px",
      marginLeft: "-10px",
      borderRadius: "50%",
      border: "2px solid #ccc",
      borderTopColor: "#000",
      animation: "1s linear 0s infinite normal none running spin;",
    }
  });

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Flex justifyContent="center" width="full" gap={2}>
        <div className={flex({ flexDir:"column", width: "full", gap: '4' })}>
          <Input {...register("email", { required: false, disabled: isSubmitting })} placeholder={`Email (${session?.user?.email})`}/>
          <TextareaAutosize {...register("query", { required: true, disabled: isSubmitting })} minRows={1} maxRows={10} placeholder="Project description" />
        </div>
        <Button type="submit" disabled={isSubmitting} width="16" > {isSubmitting ? <Spinner color="accent.default"/> : "Send"}</Button>
      </Flex>
    </form>
  )
}

const Spinner: FC<ComponentProps<typeof styled.span>> = (props) => {
  return (
    <styled.span 
      className={
        css({
          content: "",
          display: "inline-block",
          width: "7",
          height: "7",
          verticalAlign: "text-bottom",
          border: "0.25em solid currentColor",
          borderRightColor: "transparent",
          borderRadius: "50%",
          animation: "0.7s linear 0s infinite normal none running spin;",
          _after: {
            display: "block",
            clear: "both",
            content: ""
          }
        })
      }
      {...props}
    />
  );
}