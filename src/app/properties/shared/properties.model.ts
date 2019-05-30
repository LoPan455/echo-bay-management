export interface IPropertiesModel {

  id: number
  name: string
  address: IAddress
  market_value: bigint
  tenant: string
  likes: number
  details: string
}  

export interface IAddress {
  street_address: string
  street_address_2: string,
  city: string
  state: string,
  zipcode: string
  
}
