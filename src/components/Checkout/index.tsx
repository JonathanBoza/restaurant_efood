import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { formataPreco, getPriceTotal } from '../../utils/index'
import Button from '../Button/index'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import {
  close,
  clear,
  closeDeliverySidebar,
  closePurchaseSection,
  finish,
  openPurchaseFunction
} from '../../store/reducers/Cart'

import * as S from './styles'

const Checkout = () => {
  const { openDelivery, openPurchase, openFinalizar, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const [toPayment, setToPayment] = useState(false)

  const dispatch = useDispatch()
  const totalPrices = getPriceTotal(items)

  const buttonCLick = () => {
    setToPayment(true)
    dispatch(openPurchaseFunction())
  }

  const backPageCart = () => {
    setToPayment(false)
    dispatch(closeDeliverySidebar())
  }

  const backPageDelivery = () => {
    setToPayment(false)
    dispatch(closePurchaseSection())
  }

  const FinishButtonClick = () => {
    dispatch(close())
    dispatch(clear())
    setToPayment(false)
    form.resetForm()
  }

  const orderId = data?.orderId ?? 'N/A'

  const form = useFormik({
    initialValues: {
      destinatario: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      nameCard: '',
      numberCard: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      destinatario: Yup.string().required('O campo é obrigatorio'),
      endereco: Yup.string().required('O campo é obrigatorio'),
      cidade: Yup.string().required('O campo é obrigatorio'),
      cep: Yup.string().required('O campo é obrigatorio'),
      numero: Yup.string().required('O campo é obrigatorio'),
      nameCard: Yup.string().when((values, schema) =>
        toPayment ? schema.required('O campo é obrigatorio') : schema
      ),
      numberCard: Yup.string().when((values, schema) =>
        toPayment ? schema.required('O campo é obrigatorio') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        toPayment ? schema.required('O campo é obrigatorio') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        toPayment ? schema.required('O campo é obrigatorio') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        toPayment ? schema.required('O campo é obrigatorio') : schema
      )
    }),
    onSubmit: (values) => {
      console.log(values)
      purchase({
        products: items.map((item) => ({
          id: item.id,
          prices: item.preco
        })),
        delivery: {
          receiver: values.destinatario,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: values.numero,
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nameCard,
            number: values.numberCard,
            code: values.cardCode,
            expires: {
              month: values.expiresMonth,
              year: values.expiresYear
            }
          }
        }
      })
    }
  })

  const chekInputHasError = (fildName: string) => {
    const isTouched = fildName in form.touched
    const isInvalid = fildName in form.errors
    const hasError = isInvalid && isTouched

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(finish())
    }
  }, [dispatch, isSuccess])

  console.log(form.isValid)
  console.log(form.dirty)
  console.log(toPayment)

  return (
    <>
      <>
        <S.ContainerEntrega
          title="Entrega"
          className={openDelivery ? 'is-visible' : ''}
        >
          <>
            <S.Forms onSubmit={form.handleSubmit}>
              <S.InputGroup>
                <S.LabelGroup htmlFor="destinatario">
                  Quem irá receber
                </S.LabelGroup>
                <input
                  className={chekInputHasError('destinatario') ? 'error' : ''}
                  type="text"
                  id="destinatario"
                  name="destinatario"
                  value={form.values.destinatario}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
              <S.InputGroup>
                <S.LabelGroup htmlFor="endereco">Endereço</S.LabelGroup>
                <input
                  className={chekInputHasError('endereco') ? 'error' : ''}
                  type="text"
                  id="endereco"
                  name="endereco"
                  value={form.values.endereco}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
              <S.InputGroup>
                <S.LabelGroup htmlFor="cidade">Cidade</S.LabelGroup>
                <input
                  className={chekInputHasError('cidade') ? 'error' : ''}
                  type="text"
                  id="cidade"
                  name="cidade"
                  value={form.values.cidade}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
              <div className="dflex">
                <div>
                  <S.InputGroup>
                    <S.LabelGroup htmlFor="cep">CEP</S.LabelGroup>
                    <InputMask
                      className={chekInputHasError('cep') ? 'error' : ''}
                      type="text"
                      id="cep"
                      name="cep"
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99999-999"
                    />
                  </S.InputGroup>
                </div>
                <div>
                  <S.InputGroup>
                    <S.LabelGroup htmlFor="numero">Número</S.LabelGroup>
                    <InputMask
                      className={chekInputHasError('numero') ? 'error' : ''}
                      type="text"
                      id="numero"
                      name="numero"
                      value={form.values.numero}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="9999"
                    />
                  </S.InputGroup>
                </div>
              </div>
              <S.InputGroup>
                <S.LabelGroup htmlFor="complemento">
                  Complemento (opcional)
                </S.LabelGroup>
                <input
                  type="text"
                  id="complemento"
                  name="complemento"
                  value={form.values.complemento}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
            </S.Forms>
            <Button
              type="button"
              disabled={!form.dirty || !form.isValid || toPayment}
              onClick={buttonCLick}
              title="Clique aqui para adicionar forma de pagamento"
            >
              Continuar com o pagamento
            </Button>
            <Button
              title="Clique e volte para o carrinho"
              type="button"
              onClick={backPageCart}
            >
              Voltar Para o carrinho
            </Button>
          </>
        </S.ContainerEntrega>
      </>
      <>
        <S.ContainerPagamento
          title={`Pagamento - Valor a pagar ${formataPreco(totalPrices)}`}
          className={openPurchase ? 'is-visible' : ''}
        >
          <div>
            <S.Forms onSubmit={form.handleSubmit}>
              <S.InputGroup>
                <S.LabelGroup htmlFor="nameCard">Nome no cartão</S.LabelGroup>
                <input
                  className={chekInputHasError('nameCard') ? 'error' : ''}
                  type="text"
                  id="nameCard"
                  name="nameCard"
                  value={form.values.nameCard}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
              <div className="numberCart">
                <S.NumberCard>
                  <S.InputGroup>
                    <S.LabelGroup htmlFor="numberCard">
                      Número do cartão
                    </S.LabelGroup>
                    <InputMask
                      className={chekInputHasError('numberCard') ? 'error' : ''}
                      type="text"
                      id="numberCard"
                      name="numberCard"
                      value={form.values.numberCard}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="9999 9999 9999 9999"
                    />
                  </S.InputGroup>
                </S.NumberCard>
                <S.CardCode>
                  <S.InputGroup>
                    <S.LabelGroup htmlFor="cardCode">CVV</S.LabelGroup>
                    <InputMask
                      className={chekInputHasError('cardCode') ? 'error' : ''}
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="999"
                    />
                  </S.InputGroup>
                </S.CardCode>
              </div>
              <div className="expiresCard">
                <div>
                  <S.InputGroup>
                    <S.LabelGroup htmlFor="expiresMonth">
                      Mês de vencimento
                    </S.LabelGroup>
                    <InputMask
                      className={
                        chekInputHasError('expiresMonth') ? 'error' : ''
                      }
                      type="text"
                      id="expiresMonth"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99"
                    />
                  </S.InputGroup>
                </div>
                <div>
                  <S.InputGroup>
                    <S.LabelGroup htmlFor="expiresYear">
                      Ano de vencimento
                    </S.LabelGroup>
                    <InputMask
                      className={
                        chekInputHasError('expiresYear') ? 'error' : ''
                      }
                      type="text"
                      id="expiresYear"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99"
                    />
                  </S.InputGroup>
                </div>
              </div>
            </S.Forms>
            <Button
              type="submit"
              onClick={() => {
                if (!isLoading) {
                  form.handleSubmit()
                }
              }}
              title="Clique aqui para finalizar o pedido!"
              disabled={isLoading}
            >
              {isLoading ? 'Finalizando pedido...' : 'Finalizar compra!'}
            </Button>
            <Button
              title="Volte para edição de endereço"
              type="button"
              onClick={backPageDelivery}
            >
              Voltar para edição de endereço
            </Button>
          </div>
        </S.ContainerPagamento>
      </>
      <>
        <S.ContainerConfirmação
          title={`Pedido finalizado - ${orderId}`}
          className={openFinalizar ? 'is-visible' : ''}
        >
          <>
            <div>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </div>
            <Button
              title="Clique e finalize pedido"
              type="button"
              onClick={FinishButtonClick}
            >
              Concluir
            </Button>
          </>
        </S.ContainerConfirmação>
      </>
    </>
  )
}

export default Checkout
