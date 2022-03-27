//tipagem 
export type Store = {
	fantasyName: string;
	email: string;
	password: string;
	photoUrl: string;
	address: {
		street: string;
		city: string;
		state: string;
		postalCode: string;
		country: string;
		houseNumber: number;
		complement: string
	}
}

export type Props = {
	listStores : Store[]
  }