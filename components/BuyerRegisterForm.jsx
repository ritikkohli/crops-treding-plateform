'use client';

import React, {useState } from 'react'
import {useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [error, setError] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [districtsList, setDistrictsList] = useState([]);
  const isFarmer = false;

  const states = [
    {
        name : 'Punjab',
        districts : [
            "Barnala",
            "Bathinda",
            "Faridkot",
            "Fatehgarh Sahib",
            "Fazilka",
            "Ferozepur",
            "Gurdaspur",
            "Hoshiarpur",
            "Jalandhar",
            "Kapurthala", 
            "Ludhiana",
            "Malerkotla",
            "Mansa",
            "Moga",
            "Pathankot",
            "Patiala",
            "Rupnagar",
            "S.A.S Nagar",
            "Sangrur",
            "Shahid Bhagat Singh Nagar",
            "Sri Muktsar Sahib",
            "Tarn Taran"
        ]
    },
    {
        name: 'Haryana',
        districts: [
            "Ambala",
            "Bhiwani",
            "Charki Dadri",
            "Faridabad",
            "Fatehabad",
            "Gurugram",
            "Hisar",
            "Jhajjar",
            "Jind",
            "Kaithal",
            "Karnal",
            "Kurukshetra",
            "Mahendragarh",
            "Nuh",
            "Palwal",
            "Panchkula",
            "Panipat",
            "Rewari",
            "Rohtak",
            "Sirsa",
            "Sonipat",
            "Yamunanagar"
        ]
    },
    {
        name: 'Uttar Pradesh',
        districts: [
            "Agra",
            "Aligarh",
            "Ambedkar Nagar",
            "Amethi",
            "Amroha",
            "Auraiya",
            "Ayodhya",
            "Azamgarh",
            "Baghpat",
            "Bahraich",
            "Ballia",
            "Balrampur",
            "Banda",
            "Bara Banki",
            "Bareilly",
            "Basti",
            "Bhadohi",
            "Bijnor",
            "Budaun",
            "Bulandshahr",
            "Chandauli",
            "Chitrakoot",
            "Deoria",
            "Etah",
            "Etawah",
            "Farrukhabad",
            "Fatehpur",
            "Firozabad",
            "Gautam Buddha Nagar",
            "Ghaziabad",
            "Ghazipur",
            "Gonda",
            "Gorakhpur",
            "Hamirpur",
            "Hapur",
            "Hardoi",
            "Hathras",
            "Jalaun",
            "Jaunpur",
            "Jhansi",
            "Kannauj",
            "Kanpur Dehat",
            "Kanpur Nagar",
            "Kasganj",
            "Kaushambi",
            "Kheri",
            "Kushinagar",
            "Lalitpur",
            "Lucknow",
            "Mahoba",
            "Mahrajganj",
            "Mainpuri",
            "Mathura",
            "Mau",
            "Meerut",
            "Mirzapur",
            "Moradabad",
            "Muzaffarnagar",
            "Pilibhit",
            "Pratapgarh",
            "Prayagraj",
            "Rae Bareli",
            "Rampur",
            "Saharanpur",
            "Sambhal",
            "Sant Kabir Nagar",
            "Shahjahanpur",
            "Shamli",
            "Shrawasti",
            "Siddharthnagar",
            "Sitapur",
            "Sonbhadra",
            "Sultanpur",
            "Unnao",
            "Varanasi"
        ]
    },
    {
        name: 'Madhya Pradesh',
        districts: [
            "Agar-Malwa",
            "Alirajpur",
            "Anuppur",
            "Ashoknagar",
            "Balaghat",
            "Barwani",
            "Betul",
            "Bhind",
            "Bhopal",
            "Burhanpur",
            "Chhatarpur",
            "Chhindwara",
            "Damoh",
            "Datia",
            "Dewas",
            "Dhar",
            "Dindori",
            "Guna",
            "Gwalior",
            "Harda",
            "Indore",
            "Jabalpur",
            "Jhabua",
            "Katni",
            "Khandwa (East Nimar)",
            "Khargone (West Nimar)",
            "MAUGANJ",
            "Maiha",
            "Mandla",
            "Mandsaur",
            "Morena",
            "Narmadapuram",
            "Narsimhapur",
            "Neemuch",
            "Niwari",
            "Pandhurn",
            "Panna",
            "Raisen",
            "Rajgarh",
            "Ratlam",
            "Rewa",
            "Sagar",
            "Satna",
            "Sehore",
            "Seoni",
            "Shahdol",
            "Shajapur",
            "Sheopur",
            "Shivpuri",
            "Sidhi",
            "Singrauli",
            "Tikamgarh",
            "Ujjain",
            "Umaria",
            "Vidisha"
        ]
    },
    {
        name: 'Rajsthan',
        districts: [
            "Ajmer",
            "Alwar",
            "Anupgarh",
            "Balotra",
            "Banswara",
            "Baran",
            "Barmer",
            "Beawar",
            "Bharatpur",
            "Bhilwara",
            "Bikaner",
            "Bundi",
            "Chittorgarh",
            "Churu",
            "Dausa",
            "Deeg",
            "Dholpur",
            "Didwana-Kuchama",
            "Dudu",
            "Dungarpur",
            "Ganganagar",
            "Gangapurcity",
            "Hanumangarh",
            "Jaipur",
            "Jaipur (Gramin",
            "Jaisalmer",
            "Jalore",
            "Jhalawar",
            "Jhunjhunu",
            "Jodhpur",
            "Jodhpur (Gramin",
            "Karauli",
            "Kekri",
            "Khairthal-Tijara",
            "Kota",
            "Kotputli-Behror",
            "Nagaur",
            "Neem Ka Thana",
            "Pali",
            "Phalodi",
            "Pratapgarh",
            "Rajsamand",
            "Salumbar",
            "Sanchore",
            "Sawai Madhopur",
            "Shahpura",
            "Sikar",
            "Sirohi",
            "Tonk",
            "Udaipur"
        ]
    }
  ]


  const router = useRouter();

  const changeStateName = (e) =>{
    e.preventDefault();
    setState(e.target.value);
    if(e.target.value == ''){
        setDistrictsList([]);
    }else{
        setDistrictsList(states.find(s => s.name === e.target.value).districts);
    }
  }
    
  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(!name || !email || !mobile || !password) {
      setError('All field are mandatory !')
      return
    }

    if(password !== verifyPassword) {
      setError('password mismatched !')
      return
    }

    try {
      const res = await fetch('api/users/register',{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          mobile,
          password,
          state,
          district,
          isFarmer
        })
      })

      if(res.ok){
        const form = e.target;
        form.reset();
        toast.success('Registration successfull');
        router.push('/login')
      }else{
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("User registration failed.", error);
    }
  }

  return (
    <div className='w-1/4 bg-blue-300 p-2 absolute right-1/2 translate-x-1/2'>
        <h1>{}</h1>
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <h1 className=''>Signup</h1>
            <input
              type='text'
              onChange={(e)=>setName(e.target.value)} 
              placeholder='full name' 
              className='border border-2 rounded-md outline-0 p-2 '
             />
            <input 
              type='email' 
              onChange={(e)=>setEmail(e.target.value)} 
              placeholder='email' 
              className='border border-2 rounded-md outline-0 p-2 '
            />
            <input 
              type='tel' 
              onChange={(e)=>setMobile(e.target.value)}
              placeholder='mobile' 
              className='border border-2 rounded-md outline-0 p-2 '
            />
            {/* <input type='text' placeholder='otp' className='border border-2 rounded-md outline-0 p-2 '/> */}
            <input 
              type='password' 
              onChange={(e)=>setPassword(e.target.value)} 
              placeholder='password' 
              className='border border-2 rounded-md outline-0 p-2 '
            />
            <input
              type='password' 
              onChange={(e)=>setVerifyPassword(e.target.value)} 
              placeholder='verify password' 
              className='border border-2 rounded-md outline-0 p-2 '
            />
            <select 
              className='border border-2 rounded-md outline-0 p-2'
              onChange={changeStateName}
            >
              <option value="">Select state</option>
                {
                  states.map((s,id)=>(
                    <option value={s.name} key={id}>{s.name}</option>
                  ))
                }
            </select>
            <select 
              className='border border-2 rounded-md outline-0 p-2'
              onChange={(e)=>{setDistrict(e.target.value)}}
            >
              <option value="">Select district</option>
                {
                  districtsList.map((d,id)=>(
                    <option value={d} key={id}>{d}</option>
                  ))
                }
            </select>
            <span className='bg-red-500 text-white rounded-md px-1 w-max'>{error}</span>
            <input
              type='submit' 
              placeholder='' 
              className='cursor-pointer border border-2 rounded-md outline-0 p-2 '
            />
        </form>
    </div>
  )
}