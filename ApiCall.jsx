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

export const CompleteUserProfile = async(title,designation,about) =>{
    try {
        const response = await api.post('user/update',{
            title:title,
            designation:designation,
            about:about
        })
        return response
    } catch (error) {
        return error.response
    }
}

export const CreatePost = async(destination,totalPersons,TravelMonth,BudgetPerPerson,description,userId) => {
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