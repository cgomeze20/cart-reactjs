import React,{createContext,useEffect,useRef,useState} from 'react'

export const AppContext = createContext()

export const AppProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [isShow, setIsShow] = useState(false)
    const [isShowCart, setIsShowCart] = useState(false)
    const [selectedValues,setSelectedValues] = useState([])

    const inputCheck = useRef(null)
    
    const handleClick = (product) =>{
        setCart((currentCart)=>[...currentCart,product])
    }

const handleModal = () =>{
    setIsShow(!isShow)
  }

  const handleShowCart = (e) =>{
    setIsShowCart(!isShowCart)
    console.log(!isShowCart);
  }

  const handleCheck = (e) =>{
    const valor = e.target.value
    const productExist = selectedValues.find(item => item === +valor)

    if(productExist){
      const posicion = selectedValues.findIndex(item => item == +valor)
      selectedValues.splice(posicion,1)
    }else{
      setSelectedValues((currentValue) =>[...currentValue,+valor])
    }
  }

  const cleanChecks = () =>{
    let ChecksInputs = document.querySelectorAll('input[type=checkbox]')
    ChecksInputs = [...ChecksInputs]
    ChecksInputs.map(item => item.checked = false)
    setSelectedValues([])
    
  }

  const totalList = () =>{
    cart.reduce((prev,next)=> prev + next.price, 0)
  }

  return (
    <AppContext.Provider 
    value={{cart, handleClick, isShow, handleModal, handleCheck,selectedValues, cleanChecks, inputCheck, isShowCart, handleShowCart, totalList, setIsShowCart}}>
        {children}
    </AppContext.Provider>
  )
}
