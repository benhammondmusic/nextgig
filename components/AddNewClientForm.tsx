import { Dispatch, SetStateAction, useEffect, useState } from "react"
import BenButton from "./BenButton";

interface AddNewClientFormProps {
	addNewClient: Function,
	setShowAddClientForm: Dispatch<SetStateAction<boolean>>,
	handleFieldUpdate: Function
}

export function AddNewClientForm(props: AddNewClientFormProps) {

	const [newClientName, setNewClientName] = useState("")
	const [newClientAddress, setNewClientAddress] = useState("")
	const [newClientEmail, setNewClientEmail] = useState("")
	const [newClientPhone, setNewClientPhone] = useState("")


	async function handleSubmitNewClient() {
		const newClientInfo = {
			name: newClientName,
			address: newClientAddress,
			email: newClientEmail,
			phone: newClientPhone
		}

		const response = await props.addNewClient(newClientInfo)
		props.setShowAddClientForm(false)
		props.handleFieldUpdate("clientId", response.id)



	}

	return <>
		<div className="flex">
			<div className="my-3 mr-3">
				<label htmlFor="new-client-name" className="block text-sm font-medium text-gray-700">
					New Client Name
				</label>
				<div className="relative mt-1 rounded-md shadow-sm">

					<input
						type="text"
						id="new-client-name"
						className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						value={newClientName}
						onChange={(e) => setNewClientName(e.target.value)}
					/>

				</div>
			</div>

			<div className="my-3 mr-3">
				<label htmlFor="new-client-name" className="block text-sm font-medium text-gray-700">
					New Client Address
				</label>
				<div className="relative mt-1 rounded-md shadow-sm">

					<input
						type="text"
						id="new-client-address"
						className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						value={newClientAddress}
						onChange={(e) => setNewClientAddress(e.target.value)}
					/>

				</div>
			</div>

			<div className="my-3 mr-3">
				<label htmlFor="new-client-address" className="block text-sm font-medium text-gray-700">
					New Client Email
				</label>
				<div className="relative mt-1 rounded-md shadow-sm">
					<input
						type="email"
						id="new-client-email"
						className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						value={newClientEmail}
						onChange={(e) => setNewClientEmail(e.target.value)}
					/>

				</div>
			</div>

			<div className="my-3 mr-3">
				<label htmlFor="new-client-address" className="block text-sm font-medium text-gray-700">
					New Client Phone
				</label>
				<div className="relative mt-1 rounded-md shadow-sm">
					<input
						type="text"
						id="new-client-phone"
						className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						value={newClientPhone}
						onChange={(e) => setNewClientPhone(e.target.value)}
					/>

				</div>
			</div>
		</div>
		{(newClientName || newClientEmail) &&
			<BenButton label="Submit new client" onClick={handleSubmitNewClient} />
		}
	</>


}