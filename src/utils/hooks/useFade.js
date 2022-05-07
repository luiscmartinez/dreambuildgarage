import { useState, useEffect } from "react"
import "../../css/useFade.css"

export const useFade = initial => {
  const [show, setShow] = useState(initial)
  const [isVisible, setVisible] = useState(show)

  useEffect(() => {
    if (show) setVisible(true)
  }, [show])

  const onAnimationEnd = () => {
    if (!show) setVisible(false)
  }

  const style = { animation: `${show ? "slideIn" : "slideOut"} .3s` }

  const fadeProps = {
    style,
    onAnimationEnd,
  }
  return [isVisible, setShow, fadeProps]
}
