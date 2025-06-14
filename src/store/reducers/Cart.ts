import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast, ToastOptions } from 'react-toastify'

// Configuração padrão para os toasts
const toastConfig: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
}

type CartState = {
  items: Prato[]
  isOpen: boolean
  openSidebar: boolean
  openDelivery: boolean
  openPurchase: boolean
  openFinalizar: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  openDelivery: false,
  openFinalizar: false,
  openPurchase: false,
  openSidebar: false
}

const cartSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)
      if (!prato) {
        state.items.push(action.payload)
        toast.success(
          'O item foi adicionado ao carrinho com sucesso!',
          toastConfig
        )
      } else {
        toast.warning('O item já foi adicionado ao carrinho!', toastConfig)
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      toast.info('Item removido do carrinho', toastConfig)
    },
    open: (state) => {
      return {
        ...state,
        isOpen: true,
        openSidebar: true
      }
    },
    close: (state) => {
      state.isOpen = false
      state.openSidebar = false
      state.openFinalizar = false
    },
    closeCartSidebar: (state) => {
      ;(state.openDelivery = true), (state.openSidebar = false)
    },
    closeDeliverySidebar: (state) => {
      state.openSidebar = true
      state.openDelivery = false
    },
    openPurchaseFunction: (state) => {
      state.openPurchase = true
      state.openDelivery = false
    },
    openDeliveryHeader: (state) => {
      return {
        ...state,
        isOpen: true,
        openDelivery: true
      }
    },
    closePurchaseSection: (state) => {
      state.openDelivery = true
      state.openPurchase = false
    },
    finish: (state) => {
      state.openPurchase = false
      state.openFinalizar = true
      toast.success('Pedido realizado com sucesso!', toastConfig)
    },
    clear: (state) => {
      state.items = []
      toast.info('Carrinho foi esvaziado', toastConfig)
    }
  }
})

export const {
  add,
  close,
  open,
  remover,
  clear,
  closeCartSidebar,
  closeDeliverySidebar,
  closePurchaseSection,
  finish,
  openDeliveryHeader,
  openPurchaseFunction
} = cartSlice.actions

export default cartSlice.reducer
