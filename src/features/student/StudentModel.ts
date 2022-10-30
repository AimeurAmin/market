
export interface StudentModel {
  id: string;
  firstName: string;
  lastName: string;
  birthdate: string;
  photo: string;
  sex: string;
  phoneNumber: string;
  email: string;
  address: {
    city: string;
    street: string;
    zipcode: string;
    houseDoor: string;
  }
}