import axios from 'axios';

const api = axios.create({
    baseURL:"https://gohomiesbackend.onrender.com"
})

export const UserSignIn = async(email,password)=>{
    try {
        const response = await api.post('user/login',{email:email,password:password},{
            withCredentials: true,
          })
        return response

    } catch (error) {
        
        return error.response
    }
}

export const UserSignUp = async(name,email,username,password)=>{
    try {
        const response = await api.post('user/',
            {
                name:name,
                email:email,
                username:username,
                password:password
            }
        )
        return response;
    
    } catch (error) {
        return error.response;
    }
}

export const CompleteUserProfile = async(userEmail,title,designation,about) =>{
    try {
        const response = await api.post('user/update',{
            email:userEmail,
            title:title,
            designation:designation,
            about:about
        })
        return response
    } catch (error) {
        return error.response
    }
}

export const CreatePost = async(destination,totalPersons,TravelMonth,BudgetPerPerson,description) => {
    try {
        const response = await api.post('post/create',{
            destination:destination,
            totalPersons:totalPersons,
            TravelMonth:TravelMonth,
            BudgetPerPerson:BudgetPerPerson,
            description:description

        },{ withCredentials: true })

        return response
    } catch (error) {
        return error.response
    }
}

export const FetchPost = async() => {
    try {
        const response = await api.get('post/fetch',{
            withCredentials: true 
        })

        return response
    } catch (error) {
        return error.response
    }
}

export const PostImages = async(destination)=> {
    const destinations = destination + " " + "tourism"
    console.log(destinations)
    try {
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${destinations}&client_id=3StF_Gofq_OG9yN9Wuq4-RHJM-b7jh89sBJpql5fOS0`);
       
        return response

    } catch (error) {
        console.log(error)
        return error.response
    }
}