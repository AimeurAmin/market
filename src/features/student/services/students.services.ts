import { localStorageGet } from "@app/utils";
import { StudentModel } from "@features/student/StudentModel";
import axios from "axios";

const fakeData: StudentModel[] = [{
  id: '1',
  photo: "https://api.lorem.space/image/face?w=200&h=200&hash=gboyikv5",
  firstName: "Holden",
  lastName: "Dicki",
  sex: "Masculin",
  phoneNumber: "905-943-7677",
  birthdate: 'Sun Nov 21 1994 01:24:34 GMT+0000 (Western European Standard Time)',
  email: 'mail@gmail.com',
  address: {
    city: "Bettyfort",
    street: "Casper Islands",
    houseDoor: "124",
    zipcode: "52652"
  }
},
{
  id: '2',
  photo: "https://api.lorem.space/image/face?w=200&h=200&hash=3by6iuyh",
  firstName: "Elton",
  lastName: "Rath",
  sex: "Féminin",
  phoneNumber: "941-648-3609",
  birthdate: 'Sun Nov 21 2002 01:24:34 GMT+0000 (Western European Standard Time)',
  email: 'mail@gmail.com',
  address: {
    city: "Bettyfort",
    street: "Casper Islands",
    houseDoor: "124",
    zipcode: "52652"
  }
},
{
  id: '3',
  photo: "https://api.lorem.space/image/face?w=200&h=200&hash=kpj1dw3z",
  firstName: "Angel",
  lastName: "Littel",
  sex: "Masculin",
  phoneNumber: "415-476-6547",
  birthdate: 'Sun Nov 21 2005 01:24:34 GMT+0000 (Western European Standard Time)',
  email: 'mail@gmail.com',
  address: {
    city: "Bettyfort",
    street: "Casper Islands",
    houseDoor: "124",
    zipcode: "52652"
  }
},
{
  id: '4',
  photo: "https://api.lorem.space/image/face?w=200&h=200&hash=kpj1dw3z",
  firstName: "Bart",
  lastName: "Osinski",
  sex: "Masculin",
  phoneNumber: "985-620-2693",
  birthdate: 'Sun Nov 21 1993 01:24:34 GMT+0000 (Western European Standard Time)',
  email: 'mail@gmail.com',
  address: {
    city: "Bettyfort",
    street: "Casper Islands",
    houseDoor: "124",
    zipcode: "52652"
  }
},
{
  id: '5',
  photo: "https://api.lorem.space/image/face?w=200&h=200&hash=jf10bim4",
  firstName: "Marlin",
  lastName: "Conroy",
  sex: "Masculin",
  phoneNumber: "845-527-0813",
  birthdate: 'Sun Nov 21 2001 01:24:34 GMT+0000 (Western European Standard Time)',
  email: 'mail@gmail.com',
  address: {
    city: "Bettyfort",
    street: "Casper Islands",
    houseDoor: "124",
    zipcode: "52652"
  }
},
{
  id: '6',
  photo: "https://api.lorem.space/image/face?w=200&h=200&hash=p3kq6qoh",
  firstName: "Rex",
  lastName: "McClure",
  sex: "Masculin",
  phoneNumber: "295-552-6643",
  birthdate: 'Sun Nov 21 1999 01:24:34 GMT+0000 (Western European Standard Time)',
  email: 'mail@gmail.com',
  address: {
    city: "Bettyfort",
    street: "Casper Islands",
    houseDoor: "124",
    zipcode: "52652"
  }
},
{
  id: '7',
  photo: "https://api.lorem.space/image/face?w=200&h=200&hash=n8cpzrkc",
  firstName: "Forrest",
  lastName: "Quigley",
  sex: "Masculin",
  phoneNumber: "546-705-5804",
  birthdate: 'Sun Nov 21 2000 01:24:34 GMT+0000 (Western European Standard Time)',
  email: 'mail@gmail.com',
  address: {
    city: "Bettyfort",
    street: "Casper Islands",
    houseDoor: "124",
    zipcode: "52652"
  }
},
{
  id: '8',
  photo: "https://api.lorem.space/image/face?w=200&h=200&hash=kr0oxhyx",
  firstName: "Julianne",
  lastName: "Leuschke",
  sex: "Masculin",
  phoneNumber: "842-656-8230",
  birthdate: 'Sun Nov 21 1989 01:24:34 GMT+0000 (Western European Standard Time)',
  email: 'mail@gmail.com',
  address: {
    city: "Bettyfort",
    street: "Casper Islands",
    houseDoor: "124",
    zipcode: "52652"
  }
},
{
  id: '9',
  photo: "https://api.lorem.space/image/face?w=200&h=200&hash=3k8qwrrb",
  firstName: "Nelda",
  lastName: "Padberg",
  sex: "Masculin",
  phoneNumber: "233-556-1551",
  birthdate: 'Sun Nov 21 2004 01:24:34 GMT+0000 (Western European Standard Time)',
  email: 'mail@gmail.com',
  address: {
    city: "Bettyfort",
    street: "Casper Islands",
    houseDoor: "124",
    zipcode: "52652"
  }
},
{
  id: '10',
  photo: "https://api.lorem.space/image/face?w=200&h=200&hash=jw3jyzig",
  firstName: "Asa",
  lastName: "Kilback",
  sex: "Masculin",
  phoneNumber: "557-989-3045",
  birthdate: 'Sun Nov 21 2010 01:24:34 GMT+0000 (Western European Standard Time)',
  email: 'mail@gmail.com',
  address: {
    city: "Bettyfort",
    street: "Casper Islands",
    houseDoor: "124",
    zipcode: "52652"
  }
},
{
  id: '11',
  photo: "https://api.lorem.space/image/face?w=200&h=200&hash=ly8v9zhx",
  firstName: "Eleanore",
  lastName: "Bins",
  sex: "Masculin",
  phoneNumber: "418-332-4003",
  birthdate: 'Sun Nov 21 2012 01:24:34 GMT+0000 (Western European Standard Time)',
  email: 'mail@gmail.com',
  address: {
    city: "Bettyfort",
    street: "Casper Islands",
    houseDoor: "124",
    zipcode: "52652"
  }
},
{
  id: '12',
  photo: "https://api.lorem.space/image/face?w=200&h=200&hash=czdvn5ms",
  firstName: "Kennith",
  lastName: "Stiedemann",
  sex: "Masculin",
  phoneNumber: "1-863-802-0642",
  birthdate: 'Sun Nov 21 2008 01:24:34 GMT+0000 (Western European Standard Time)',
  email: 'mail@gmail.com',
  address: {
    city: "Bettyfort",
    street: "Casper Islands",
    houseDoor: "124",
    zipcode: "52652"
  }
},
{
  id: '13',
  photo: "https://api.lorem.space/image/face?w=200&h=200&hash=c8bmo3an",
  firstName: "Tyshawn",
  lastName: "McGlynn",
  sex: "Masculin",
  phoneNumber: "640-201-5283",
  birthdate: 'Sun Nov 21 2005 01:24:34 GMT+0000 (Western European Standard Time)',
  email: 'mail@gmail.com',
  address: {
    city: "Bettyfort",
    street: "Casper Islands",
    houseDoor: "124",
    zipcode: "52652"
  }
}]

const token: string | null = localStorageGet("token");


const baseUrl = 'https://applicationapischool.herokuapp.com/api'

export const fetchStudents = () => {
  return axios.get(`${baseUrl}/students`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const fetchStudent = ({id}: {id: string}) => {
  return axios.get(`${baseUrl}/students/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}


export const fetchRemoveStudent = ({id}: {id: string}) => {
  return new Promise<{data: StudentModel[]}>((resolve, reject) => {
    setTimeout(() => {
      const students = fakeData.filter(item => item.id !== id);
      resolve({data: students});
    },2500)
  });
}