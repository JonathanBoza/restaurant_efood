import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { getDescription } from '../Restaurante'
import { formataPreco } from '../../utils/index'
import { add, open } from '../../store/reducers/Cart'

import * as S from './styles'

import fechar from '../../assets/image/close.png'

export type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  prato: Prato
}

export type ModalState = {
  isVsisble: boolean
}

const Cardapio = ({ foto, preco, nome, descricao, porcao, prato }: Props) => {
  const dispatch = useDispatch()
  const addCart = () => {
    if (prato) {
      dispatch(add(prato))
      dispatch(open())
    }
    return prato
  }

  const [modal, setModal] = useState<ModalState>({
    isVsisble: false
  })

  const closeModal = () => {
    setModal({
      isVsisble: false
    })
  }

  return (
    <>
      <div className="container">
        <S.CardCardapio>
          <S.ImageCard>
            <img src={foto} alt={`Imagem do prato, ${nome}`} />
          </S.ImageCard>
          <S.Title>{nome}</S.Title>
          <S.Descricao>{getDescription(descricao)}</S.Descricao>
          <S.BotaoCard
            onClick={() => {
              setModal({
                isVsisble: true
              })
            }}
          >
            Mais detalhes
          </S.BotaoCard>
        </S.CardCardapio>
        <S.Modal className={modal.isVsisble ? 'visivel' : ''}>
          <S.ModalContent>
            <img src={fechar} onClick={() => closeModal()} />
            <div>
              <S.ImageModal src={foto} alt={`Imagem do prato, ${nome}`} />
            </div>
            <S.DescriptionModal>
              <h3>{nome}</h3>
              <S.Descricao>
                {descricao}
                <span>{porcao}</span>
              </S.Descricao>
              <S.BotaoModal
                onClick={addCart}
              >{`Adicionar ao carrinho ${formataPreco(preco)}`}</S.BotaoModal>
            </S.DescriptionModal>
          </S.ModalContent>
          <div className="overlay" onClick={() => closeModal()}></div>
        </S.Modal>
      </div>
    </>
  )
}

export default Cardapio
