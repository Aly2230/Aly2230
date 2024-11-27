import { ReactNode } from "react"

type ItemSuggestionProps = {
	children:ReactNode
}
export function ItemSuggestion({children}:ItemSuggestionProps){
	return(
	  	<button>{children}</button>
	)
	
}