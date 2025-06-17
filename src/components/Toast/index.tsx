import React, { useEffect } from 'react'
import styled from 'styled-components'

interface ToastProps {
  messages: string[]
  onClose: () => void
  duration?: number
  isVisible: boolean
}

const ToastContainer = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #e66767;
  color: white;
  padding: 16px 20px;
  border-radius: 8px;
  z-index: 1000;
  max-width: 400px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.$isVisible ? 'translateY(0)' : 'translateY(-20px)'};
  transition: opacity 0.4s, transform 0.4s;
  pointer-events: ${(props) => (props.$isVisible ? 'auto' : 'none')};
  border-left: 5px solid #c53030;
`

const ToastHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

const ToastTitle = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
`

const MessageList = styled.ul`
  margin: 12px 0 0;
  padding-left: 20px;
  list-style-type: none;
`

const MessageItem = styled.li`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.4;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  /* Estilo para os marcadores de lista personalizados */
  &::before {
    content: '';
    display: ${(props) =>
      props.children?.toString().startsWith('-') ? 'inline-block' : 'none'};
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: white;
    margin-right: 8px;
    margin-bottom: 2px;
    position: absolute;
    left: -15px;
    top: 7px;
  }
`

const Toast: React.FC<ToastProps> = ({
  messages,
  onClose,
  duration = 5000,
  isVisible
}) => {
  useEffect(() => {
    if (isVisible && messages.length > 0) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [isVisible, messages, duration, onClose])

  if (messages.length === 0) {
    return null
  }

  return (
    <ToastContainer $isVisible={isVisible}>
      <ToastHeader>
        <ToastTitle>Por favor, corrija os seguintes erros:</ToastTitle>
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </ToastHeader>
      <MessageList>
        {messages.map((message, index) => (
          <MessageItem key={index}>{message}</MessageItem>
        ))}
      </MessageList>
    </ToastContainer>
  )
}

export default Toast
