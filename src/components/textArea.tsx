import { ark } from '@ark-ui/react'
import { css } from '@styled-system/css'
import { splitCssProps, styled } from '@styled-system/jsx'
import { textarea, TextareaVariantProps } from '@styled-system/recipes'
import { forwardRef, ComponentPropsWithoutRef } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'


export const Textarea = styled(ark.textarea, textarea)

type Props = TextareaVariantProps & ComponentPropsWithoutRef<typeof ark.textarea> & ComponentPropsWithoutRef<typeof ReactTextareaAutosize>

// eslint-disable-next-line react/display-name
export const TextareaAutosize = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const [cssProps, restProps] = splitCssProps(props)

  return (
    <ReactTextareaAutosize 
      className={css({
      resize: 'none',
      background: "none",
      borderWidth: '1px',
      borderRadius: "l2",
      borderColor: "border.default",
      outline: 0,
      padding: "3",
      fontSize: "md",
      _focus: {
        borderColor: "accent.default",
        boxShadow: "0 0 0 1px token(colors.accent.default)"
      },
      ...cssProps
    })} {...restProps} ref={ref}/>
  )
})

