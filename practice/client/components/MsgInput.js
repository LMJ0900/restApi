import { useRef } from "react"

const MsgInput = (mutate) => {
    const textRef = useRef(null)

    const onSubmit = e =>{
        e.preventDefault()
        e.stopPropagation()
        const text = textRef.current.value
        textRef.current.value = ''
        mutate(text)
    }

    return(
        <form className="message__input" onSubmit={onSubmit}>
            <textarea 
            ref={textRef}
            placeholder="내용을 입력하세요."
            />
        </form>
    )
}