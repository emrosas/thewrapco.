import { useState } from 'react'

interface Props {
	question: string
	answer: string
}

export default function FAQ({ question, answer }: Props) {
	const [isOpen, setIsOpen] = useState(false)

	const toggleModal = () => {
		setIsOpen(!isOpen)
	}

	return (
		<li className=" flex list-none flex-col gap-2 border-t border-dark-1 pb-4 pt-5">
			<div className="flex justify-between">
				<h4 className="">{question}</h4>
				<button onClick={toggleModal}>Open Modal</button>
			</div>
			<div
				className={`grid grid-rows-[0fr] overflow-hidden transition-all ${
					isOpen ? 'grid-rows-[1fr]' : null
				}`}
			>
				<p className="overflow-hidden text-sm font-light leading-relaxed">{answer}</p>
			</div>
		</li>
	)
}
