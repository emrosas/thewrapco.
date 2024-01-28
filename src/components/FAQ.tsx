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
				<button
					onClick={toggleModal}
					className={`transition-all hover:scale-110 ${isOpen ? 'rotate-180' : ''}`}
				>
					<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							fill="currentColor"
							d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m-5 6l5 5l5-5z"
						/>
					</svg>
				</button>
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
